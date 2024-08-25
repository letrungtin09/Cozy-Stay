import { CodeRandom } from "@/lib/generateCode";
import EmailModels from "../models/email.models";
import { NextApiRequest, NextApiResponse } from "next";

export default class ApiEmail {

    // send
    public sendEmailController = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            let email = req.body.emailName;
            const code = CodeRandom();
            if (email) {
                await EmailModels.sendEmailModels(email, code);
                res.status(200).json({ status: true, message: 'đã gửi email', verifyCode: code });
            }
        } catch (error) {
            console.error(error);
            res
                .status(500)
                .json({ error: "Đã xảy ra lỗi khi gửi email" });
        }
    };

    public sendEmailRefundController = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            let email = req.body.currentEmailNameRefund;
            let moneyNumber = req.body.moneyNumber;
            let idBill = req.body.idBill;
            if (email) {
                await EmailModels.sendEmailRefundModels(email, moneyNumber, idBill);
                res.status(200).json({ status: true, message: 'đã gửi email hoàn tiền' });
            }
        } catch (error) {
            console.error(error);
            res
                .status(500)
                .json({ error: "Đã xảy ra lỗi khi gửi email" });
        }
    };

    public sendEmailAcceptController = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            let email = req.body.currentEmailNameAccept;
            let idBill = req.body.idBill;
            let dateStart = req.body.dateStart;
            let dateEnd = req.body.dateEnd;
            let code = req.body.code;
            if (email) {
                await EmailModels.sendEmailAcceptModels(email, idBill, dateStart, dateEnd, code);
                res.status(200).json({ status: true, message: 'đã gửi email hoàn tiền' });
            }
        } catch (error) {
            console.error(error);
            res
                .status(500)
                .json({ error: "Đã xảy ra lỗi khi gửi email" });
        }
    };
}
