import { NextApiRequest, NextApiResponse } from "next";
import ApiJoinConvenient from "../controllers/joinConvenient.controller";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const apiJoinConvenient = new ApiJoinConvenient();

  switch (req.method) {
    case "GET":
      if (req.query.idPlace) {
        await apiJoinConvenient.getJoinConvenient(req, res);
      } else if (req.query.idArPlaces) {
        await apiJoinConvenient.getArrayConvenient(req, res);
      }
      else {
        // Lấy tất cả các sản phẩm
        await apiJoinConvenient.getAllJoinConvenient(req, res);
      }
      break;
    case "POST":
      // Thêm một sản phẩm mới
      await apiJoinConvenient.postaddJoinConvenient(req, res);
      break;
    case "PUT":
      // Cập nhật một sản phẩm
      await apiJoinConvenient.updateJoinConvenient(req, res);
      break;
    case "DELETE":
      // Xóa một sản phẩm
      await apiJoinConvenient.deleteJoinConvenient(req, res);
      break;
    default:
      res.status(405).json({ error: "Phương thức không được hỗ trợ" });
      break;
  }
};

export default handler;
