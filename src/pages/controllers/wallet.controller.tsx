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
      const numberId: number = parseInt(req.query.id as string);
      const status: number = parseInt(req.query.status as string);
      const moneyNumber: number = parseInt(req.query.moneyNumber as string);
      const data = {
        changeMoney: moneyNumber,
        transactionType: status,
        idUser: numberId
      };
      await Wallet.addNewWallet(data);
      res.json({ thongbao: "Đã thêm Wallet" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi thêm dữ liệu Wallet" });
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
}
