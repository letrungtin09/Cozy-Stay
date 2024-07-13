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
}
