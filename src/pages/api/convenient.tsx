import { NextApiRequest, NextApiResponse } from "next";
import ApiConvenient from "../controllers/convenient.controller";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const apiConvenient = new ApiConvenient();

  switch (req.method) {
    case "GET":
      if (req.query.id) {
        await apiConvenient.getConvenient(req, res);
      } else {
        // Lấy tất cả các sản phẩm
        await apiConvenient.getAllConvenient(req, res);
      }
      break;
    case "POST":
      // Thêm một sản phẩm mới
      await apiConvenient.postaddConvenient(req, res);
      break;
    case "PUT":
      // Cập nhật một sản phẩm
      await apiConvenient.updateConvenient(req, res);
      break;
    case "DELETE":
      // Xóa một sản phẩm
      await apiConvenient.deleteConvenient(req, res);
      break;
    default:
      res.status(405).json({ error: "Phương thức không được hỗ trợ" });
      break;
  }
};

export default handler;
