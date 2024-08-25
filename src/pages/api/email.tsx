import { NextApiRequest, NextApiResponse } from "next";
import ApiEmail from "../controllers/email.controller";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiEmail = new ApiEmail();

    switch (req.method) {

        case "POST":
            if (req.body.emailName) {
                await apiEmail.sendEmailController(req, res);
            } else if (req.body.currentEmailNameRefund) {
                await apiEmail.sendEmailRefundController(req, res);
            } else if (req.body.currentEmailNameAccept) {
                await apiEmail.sendEmailAcceptController(req, res);
            }
            break;
        default:
            res.status(405).json({ error: "Phương thức không được hỗ trợ" });
            break;
    }
};

export default handler;
