import { NextApiRequest, NextApiResponse } from "next";
import ApiJoinRules from "../controllers/joinRules.controller";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const apiJoinRules = new ApiJoinRules();

  switch (req.method) {
    case "GET":
      if (req.query.id) {
        await apiJoinRules.getJoinRules(req, res);
      } else {
        // Lấy tất cả các sản phẩm
        await apiJoinRules.getAllJoinRules(req, res);
      }
      break;
    case "POST":
      // Thêm một sản phẩm mới
      await apiJoinRules.postaddJoinRules(req, res);
      break;
    case "PUT":
      // Cập nhật một sản phẩm
      await apiJoinRules.updateJoinRules(req, res);
      break;
    case "DELETE":
      // Xóa một sản phẩm
      await apiJoinRules.deleteJoinRules(req, res);
      break;
    default:
      res.status(405).json({ error: "Phương thức không được hỗ trợ" });
      break;
  }
};

export default handler;
