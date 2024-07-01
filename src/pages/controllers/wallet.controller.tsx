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
  public postaddWallet = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const nameWallet: string = req.body.nameWallet;
      const description: string = req.body.description;
      const data = {
        nameWallet: nameWallet,
        description: description,
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

  // Update
  public updateWallet = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const nameWallet: string = req.body.nameWallet;
      const description: string = req.body.description;
      const data = {
        nameWallet: nameWallet,
        description: description,
      };
      await Wallet.putUpDateWallet(data, numberId);
      res.json({ thongbao: "Đã cập nhật Wallet" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi update dữ liệu Wallet" });
    }
  };

  // Delete
  public deleteWallet = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      await Wallet.delWallet(numberId);
      res.json({ thongbao: "Đã xóa thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi xóa dữ liệu Wallet" });
    }
  };
}
