import Convenient from "../models/convenient.models";
import { NextApiRequest, NextApiResponse } from "next";
export default class ApiConvenient {
  // Lấy tất
  public getAllConvenient = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const resultConvenient = await Convenient.fetchAllConvenient();
      res.json({ convenient: resultConvenient });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Convenient" });
    }
  };

  // Thêm
  public postaddConvenient = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const nameConvenient = req.body.nameConvenient;
      const icon = req.body.icon;
      const data = {
        icon: icon,
        nameConvenient: nameConvenient,
      };
      await Convenient.addNewConvenient(data);
      res.json({ thongbao: "Đã thêm Convenient" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi thêm dữ liệu Convenient" });
    }
  };

  // Lấy 1
  public getConvenient = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const resultConvenient = await Convenient.fetchOneConvenient(numberId);
      res.json({ convenient: resultConvenient });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Convenient" });
    }
  };

  // Update
  public updateConvenient = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const nameConvenient = req.body.nameConvenient;
      const data = {
        nameConvenient: nameConvenient,
      };
      await Convenient.putUpDateConvenient(data, numberId);
      res.json({ thongbao: "Đã cập nhật Convenient" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi update dữ liệu Convenient" });
    }
  };

  // Delete
  public deleteConvenient = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      await Convenient.delConvenient(numberId);
      res.json({ thongbao: "Đã xóa thành công" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi xóa dữ liệu Convenient" });
    }
  };
}
