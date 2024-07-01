import Category from "../models/category.models";
import { NextApiRequest, NextApiResponse } from "next";
export default class ApiCategory {
  // Lấy tất
  public getAllCate = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const resultCate = await Category.fetchAllCategory();
      res.json({ cate: resultCate });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Cate" });
    }
  };

  // Thêm
  public postaddCate = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const nameCategory: string = req.body.nameCategory;
      const icon: string = req.body.icon;
      const data = {
        icon: icon,
        nameCategory: nameCategory,
      };
      await Category.addNewCategory(data);
      res.json({ thongbao: "Đã thêm cate" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi thêm dữ liệu Cate" });
    }
  };

  // Lấy 1
  public getCate = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const resultCate = await Category.fetchOneCategory(numberId);
      res.json({ cate: resultCate });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Cate" });
    }
  };

  // Update
  public updateCate = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const nameCategory: string = req.body.nameCategory;
      const icon: string = req.body.icon;
      const data = {
        icon: icon,
        nameCategory: nameCategory,
      };
      await Category.putUpDateCategory(data, numberId);
      res.json({ thongbao: "Đã cập nhật Cate" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi update dữ liệu Cate" });
    }
  };

  // Delete
  public deleteCate = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      await Category.delCategory(numberId);
      res.json({ thongbao: "Đã xóa thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi xóa dữ liệu Cate" });
    }
  };
}
