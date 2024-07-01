import { NextApiRequest, NextApiResponse } from "next";
import ApiRules from "../controllers/rules.controller";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const apiRules = new ApiRules();

  switch (req.method) {
    case "GET":
      if (req.query.id) {
        await apiRules.getRules(req, res);
      } else {
        // Lấy tất cả các sản phẩm
        await apiRules.getAllRules(req, res);
      }
      break;
    case "POST":
      // Thêm một sản phẩm mới
      await apiRules.postaddRules(req, res);
      break;
    case "PUT":
      // Cập nhật một sản phẩm
      await apiRules.updateRules(req, res);
      break;
    case "DELETE":
      // Xóa một sản phẩm
      await apiRules.deleteRules(req, res);
      break;
    default:
      res.status(405).json({ error: "Phương thức không được hỗ trợ" });
      break;
  }
};

export default handler;
