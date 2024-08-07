import { NextApiRequest, NextApiResponse } from "next";
import ApiBill from "../controllers/bill.controller";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const apiBill = new ApiBill();

  switch (req.method) {
    case "GET":
      if (req.query.id) {
        await apiBill.getBill(req, res);
      } else {
        // Lấy tất cả các sản phẩm
        await apiBill.getAllBill(req, res);
      }
      break;
    case "POST":
      // Thêm một sản phẩm mới
      await apiBill.postaddBill(req, res);
      break;
    case "PUT":
      // Cập nhật một sản phẩm
      await apiBill.updateBill(req, res);
      break;
    case "DELETE":
      // Xóa một sản phẩm
      await apiBill.deleteBill(req, res);
      break;
    default:
      res.status(405).json({ error: "Phương thức không được hỗ trợ" });
      break;
  }
};

export default handler;
