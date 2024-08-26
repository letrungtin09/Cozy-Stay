import { NextApiRequest, NextApiResponse } from "next";
import ApiSendImage from "../controllers/sendImageController";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiRules = new ApiSendImage();

    switch (req.method) {
        case "POST":
            // Thêm một sản phẩm mới
            await apiRules.sendImageController(req, res);
            break;
        default:
            res.status(405).json({ error: "Phương thức không được hỗ trợ" });
            break;
    }
};

export default handler;
