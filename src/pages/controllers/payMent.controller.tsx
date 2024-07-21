import Wallet from "../models/wallet.models";
import { NextApiRequest, NextApiResponse } from "next";
import localUrl from "@/lib/const";
const PayOS = require("@payos/node");

const payos = new PayOS(
    "40110d9e-5375-42ae-935b-e30302ef25d7",
    "e2b00b96-1825-4004-b579-988497d6868d",
    "9fdb1707b75cbd6e0e628a9afad350d8a6602e8f42b2269934f2b342eb222c25");

export default class ApiPayment {

    // Thêm
    public postPayment = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = req.body.id;
            const moneyChange: number = req.body.money;
            if (numberId == null || moneyChange == null) {
                return res.status(400).json({ error: 'Invalid parameters. id and money must not be undefined or null.' });
            }
            const order = {
                orderCode: numberId,
                amount: moneyChange,
                description: `Nạp ví CozyStay`,
                cancelUrl: `${localUrl}/wallet`,
                returnUrl: `${localUrl}/wallet`,
            };
            const paymentLinkData = await payos.createPaymentLink(order);
            res.json({ paymentLinkData });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Đã xảy ra lỗi khi thêm dữ liệu Wallet" });
        }
    };
}
