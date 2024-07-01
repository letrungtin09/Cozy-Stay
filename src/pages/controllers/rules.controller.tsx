import Rules from "../models/rules.models";
import { NextApiRequest, NextApiResponse } from "next";
export default class ApiRules {
  // Lấy tất
  public getAllRules = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const resultRules = await Rules.fetchAllRules();
      res.json({ rules: resultRules });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Rules" });
    }
  };

  // Thêm
  public postaddRules = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const nameRules = req.body.nameRules;
      const icon = req.body.icon;
      const data = {
        icon: icon,
        nameRules: nameRules,
      };
      await Rules.addNewRules(data);
      res.json({ thongbao: "Đã thêm Rules" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi thêm dữ liệu Rules" });
    }
  };

  // Lấy 1
  public getRules = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const resultRules = await Rules.fetchOneRules(numberId);
      res.json({ rules: resultRules });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Rule" });
    }
  };

  // Update
  public updateRules = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const nameRules = req.body.nameRules;
      const data = {
        nameRules: nameRules,
      };
      await Rules.putUpDateRules(data, numberId);
      res.json({ thongbao: "Đã cập nhật Rules" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi update dữ liệu Rules" });
    }
  };

  // Delete
  public deleteRules = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      await Rules.delRules(numberId);
      res.json({ thongbao: "Đã xóa thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi xóa dữ liệu Rule" });
    }
  };
}
