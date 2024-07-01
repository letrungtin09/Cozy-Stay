import User from "../models/user.models";
import { NextApiRequest, NextApiResponse } from "next";
export default class ApiUser {
  // Lấy tất
  public getAllUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const resultUser = await User.fetchAllUser();
      res.json({ user: resultUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu User" });
    }
  };

  // lấy hết chủ nhà
  public getAllPartner = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const resultUser = await User.fetchAllPartner();
      res.json({ user: resultUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu User" });
    }
  };

  // Thêm
  public postaddUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const userName = req.body.userName;
      const email = req.body.email;
      const password = req.body.password;
      const avatar = req.body.avatar;
      const phoneNumber = req.body.phoneNumber;
      const role = req.body.role;
      const data = {
        userName: userName,
        email: email,
        password: password,
        avatar: avatar,
        phoneNumber: phoneNumber,
        role: role,
      };
      await User.addNewUser(data);
      res.json({ thongbao: "Đã thêm User" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi thêm dữ liệu User" });
    }
  };

  // Lấy 1
  public getUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const resultUser = await User.fetchOneUser(numberId);
      res.json({ user: resultUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu User" });
    }
  };

  // Update
  public updateUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const userName = req.body.userName;
      const email = req.body.email;
      const password = req.body.password;
      const avatar = req.body.avatar;
      const phoneNumber = req.body.phoneNumber;
      const role = req.body.role;
      const data = {
        userName: userName,
        email: email,
        password: password,
        avatar: avatar,
        phoneNumber: phoneNumber,
        role: role,
      };
      await User.putUpDateUser(data, numberId);
      res.json({ thongbao: "Đã cập nhật User" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi update dữ liệu User" });
    }
  };

  // Delete
  public deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      await User.delUser(numberId);
      res.json({ thongbao: "Đã xóa thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi xóa dữ liệu User" });
    }
  };
}
