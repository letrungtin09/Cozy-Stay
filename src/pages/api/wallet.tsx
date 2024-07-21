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
      await apiWallet.postAddWallet(req, res);
      break;
    case "PUT":
      if (req.body.linkQr && req.body.linkQrId) { // Cập nhật qr
        await apiWallet.updateLinkQR(req, res);
      } else if (req.body.transactionType && req.body.linkQrId) {// Cập nhật role 
        await apiWallet.updateSuccessPayment(req, res);
      }
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
