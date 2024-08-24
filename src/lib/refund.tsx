import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";

const handleSendEmail = async (email: any, idBill: number) => {
    const urlSendEmail: string = `${localUrl}/api/email`;
    const urlBill: string = `${localUrl}/api/bill?id=${idBill}`;
    const money = await ApiFunctions.getData(urlBill)
    const dataEmail: any = {
        currentEmailNameRefund: email,
        moneyNumber: money.bill[0].total,
        idBill: idBill
    };
    await ApiFunctions.postData(urlSendEmail, dataEmail)
};

const canCelBill = async (idPlace: number, idPlacesAndIdbill: any, emailCurentUser: any) => {
    const userConfirmed = window.confirm(`Xác nhận hủy đơn hàng?`);
    if (userConfirmed) {
        const idBill = idPlacesAndIdbill[idPlace]
        handleSendEmail(emailCurentUser, idBill)
        const apiDelBill = `${localUrl}/api/bill?id=${idBill}`;
        await ApiFunctions.deleteData(apiDelBill);
        window.location.href = "/";
    }
}
const RefundGenerate = { canCelBill };

export default RefundGenerate;