import { NextApiRequest, NextApiResponse } from "next";
import ApiEmail from "../controllers/email.controller";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiEmail = new ApiEmail();

    switch (req.method) {

        case "POST":
            await apiEmail.sendEmailController(req, res);
            break;
        default:
            res.status(405).json({ error: "Phương thức không được hỗ trợ" });
            break;
    }
};

export default handler;
