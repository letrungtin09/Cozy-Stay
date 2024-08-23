import Wallet from "../models/wallet.models";
import { NextApiRequest, NextApiResponse } from "next";
export default class ApiWallet {
  // Lấy tất
  public getAllWallet = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const resultWallet = await Wallet.fetchAllWallet();
      res.json({ wallet: resultWallet });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Wallet" });
    }
  };

  // Thêm
  public postAddWallet = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = req.body.id;
      const status: number = req.body.status;
      const moneyNumber: number = req.body.moneyNumber;
      const data = {
        changeMoney: moneyNumber,
        transactionType: status,
        idUser: numberId,
      };
      const newWallet = await Wallet.addNewWallet(data);
      res.json({ thongbao: "Đã thêm Wallet", data: newWallet });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi thêm dữ liệu Wallet" });
    }
  };

  // Update linkQr
  public updateLinkQR = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      let numberId: number = parseInt(req.body.id as string);
      let linkQr: string = req.body.linkQr as string;
      let linkQrId: string = req.body.linkQrId as string;
      await Wallet.putUpDateQrLink(linkQr, linkQrId, numberId);
      res.json({ thongbao: "Đã cập nhật Wallet" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi update dữ liệu Wallet1 " });
    }
  };
  // UpdateSuccess linkQr and role
  public updateSuccessPayment = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      let numberId: number = parseInt(req.body.id as string);
      let transactionType: number = req.body.transactionType as number;
      let linkQrId: string = req.body.linkQrId as string;
      const resul = await Wallet.putUpdateSuccessPayment(
        transactionType,
        linkQrId,
        numberId
      );
      if (resul.affectedRows > 0) {
        const walletSuccess = await Wallet.fetchWalletbyId(numberId);
        res.json({ thongbao: resul, data: walletSuccess[0].changeMoney });
      } else {
        res.json({ thongbao: resul, data: 0 });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi update dữ liệu Wallet1 " });
    }
  };
  // Lấy 1
  public getWallet = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const resultWallet = await Wallet.fetchUserWallet(numberId);
      res.json({ wallet: resultWallet });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Wallet" });
    }
  };
  // Xóa
  public deleteWallet = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const linkId = Array.isArray(req.query.linkQrId)
        ? req.query.linkQrId[0]
        : req.query.linkQrId;
      if (isNaN(numberId) || !linkId) {
        return res.status(400).json({ error: "Thiếu id hoặc linkQrId" });
      }
      await Wallet.delWallet(numberId, linkId);
      res.json({ thongbao: "Đã xóa thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi xóa dữ liệu User" });
    }
  };
}
