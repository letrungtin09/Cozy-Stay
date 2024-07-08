import { NextApiRequest, NextApiResponse } from "next";
import ApiWallet from "../controllers/wallet.controller";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const apiWallet = new ApiWallet();

  switch (req.method) {
    case "GET":
      if (req.query.id) {
        await apiWallet.getWallet(req, res);
      } else {
        // Lấy tất cả các sản phẩm
        await apiWallet.getAllWallet(req, res);
      }
      break;
    case "POST":
      // Thêm một sản phẩm mới
      await apiWallet.postaddWallet(req, res);
      break;
    case "PUT":
      // Cập nhật một sản phẩm
      await apiWallet.updateWallet(req, res);
      break;
    case "DELETE":
      // Xóa một sản phẩm
      await apiWallet.deleteWallet(req, res);
      break;
    default:
      res.status(405).json({ error: "Phương thức không được hỗ trợ" });
      break;
  }
};

export default handler;
