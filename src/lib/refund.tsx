import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import UserCurrent from "@/lib/currentUser";
const idUser: number = UserCurrent.GetUserId();

const handlePlusTotalMoney = async (money: number, idUserCurrent: number) => {
    const apiUserOrigin: string = `${localUrl}/api/user`;
    const dataUser = {
        id: idUserCurrent,
        moneyChange: money
    };
    await ApiFunctions.putData(apiUserOrigin, dataUser);
    handleSendWallet(idUser, 1, money);

};

const handleSendWallet = (numberId: any, status: any, moneyNumber: any) => {
    const apiWallet: string = `${localUrl}/api/wallet`;
    try {
        if (idUser !== null) {
            const dataWallet: any = {
                id: numberId,
                status: status,
                moneyNumber: moneyNumber
            }
            ApiFunctions.postData(apiWallet, dataWallet);
        } else {
            console.warn("ID User hoặc URL không có giá trị");
        }
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}

const handleSendEmail = async (email: any, idBill: number) => {
    const urlSendEmail: string = `${localUrl}/api/email`;
    const urlBill: string = `${localUrl}/api/bill?id=${idBill}`;
    const money = await ApiFunctions.getData(urlBill)
    handlePlusTotalMoney(money.bill[0].total, idUser);
    const dataEmail: any = {
        currentEmailNameRefund: email,
        moneyNumber: money.bill[0].total,
        idBill: idBill
    };
    await ApiFunctions.postData(urlSendEmail, dataEmail)
};

const canCelBill = async (idPlace: number, idPlacesAndIdbill: any) => {
    const emailCurentUser = UserCurrent.GetUserEmail();
    const userConfirmed = window.confirm(`Xác nhận hủy đơn hàng?`);
    if (userConfirmed) {
        const idBill = idPlacesAndIdbill[idPlace]
        handleSendEmail(emailCurentUser, idBill)
        const apiDelBill = `${localUrl}/api/bill?id=${idBill}`;
        await ApiFunctions.deleteData(apiDelBill);
        window.location.href = "/";
    }
}
const RefundGenerate = { canCelBill, handleSendEmail, handleSendWallet, handlePlusTotalMoney };

export default RefundGenerate;