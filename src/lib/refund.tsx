import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import UserCurrent from "@/lib/currentUser";

const handlePlusTotalMoney = async (money: number) => {
    const idUserCurrent = UserCurrent.GetUserId();
    const apiUserOrigin: string = `${localUrl}/api/user`;
    const dataUser = {
        id: idUserCurrent,
        moneyChange: money
    };
    ApiFunctions.putData(apiUserOrigin, dataUser);
};

const handleSendEmail = async (email: any, idBill: number) => {
    const urlSendEmail: string = `${localUrl}/api/email`;
    const urlBill: string = `${localUrl}/api/bill?id=${idBill}`;
    const money = await ApiFunctions.getData(urlBill)
    handlePlusTotalMoney(money.bill[0].total);
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
const RefundGenerate = { canCelBill, handleSendEmail };

export default RefundGenerate;