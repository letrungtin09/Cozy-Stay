import JoinRules from "../models/joinRules.models";
import { NextApiRequest, NextApiResponse } from "next";
export default class ApiJoinRules {
  // Lấy tất
  public getAllJoinRules = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const resultJoinRules = await JoinRules.fetchAllJoinRules();
      res.json({ joinRules: resultJoinRules });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu JoinRule" });
    }
  };

  // Thêm
  public postaddJoinRules = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const idPlace = req.body.idPlace;
      const idDetailRule = req.body.idDetailRule;
      const note = req.body.note;
      const data = {
        idPlace: idPlace,
        idDetailRule: idDetailRule,
        note: note,
      };
      await JoinRules.addNewJoinRules(data);
      res.json({ thongbao: "Đã thêm JoinRule" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi thêm dữ liệu JoinRule" });
    }
  };

  // Lấy 1
  public getJoinRules = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const resultJoinRules = await JoinRules.fetchPlaceJoinRules(numberId);
      res.json({ joinRules: resultJoinRules });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu JoinRule" });
    }
  };

  // Update
  public updateJoinRules = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const idPlace = req.body.idPlace;
      const idDetailRule = req.body.idDetailRule;
      const note = req.body.note;
      const data = {
        idPlace: idPlace,
        idDetailRule: idDetailRule,
        note: note,
      };
      await JoinRules.putUpDateJoinRules(data, numberId);
      res.json({ thongbao: "Đã cập nhật JoinRule" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi update dữ liệu JoinRule" });
    }
  };

  // Delete
  public deleteJoinRules = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      await JoinRules.delJoinRules(numberId);
      res.json({ thongbao: "Đã xóa thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi xóa dữ liệu JoinRule" });
    }
  };
}
