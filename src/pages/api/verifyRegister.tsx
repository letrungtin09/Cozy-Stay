import { NextApiRequest, NextApiResponse } from "next";
import ApiRegister from '../controllers/register.controller';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiRegister = new ApiRegister();

    switch (req.method) {

        case "POST":
            await apiRegister.addUser(req, res);
            break;
        default:
            res.status(405).json({ error: "Phương thức không được hỗ trợ" });
            break;
    }
};

export default handler;
