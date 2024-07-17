import JoinConvenient from "../models/joinConvenient.models";
import { NextApiRequest, NextApiResponse } from "next";
export default class ApiJoinConvenient {
  // Lấy tất
  public getAllJoinConvenient = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const resultJoinConvenient =
        await JoinConvenient.fetchAllJoinConvenient();
      res.json({ joinConvenient: resultJoinConvenient });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi lấy dữ liệu JoinConvenient" });
    }
  };

  // Thêm
  public postaddJoinConvenient = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const idPlace = req.body.idPlace;
      const idDetailConvenient = req.body.idDetailConvenient;
      const note = req.body.note;
      const data = {
        idPlace: idPlace,
        idDetailConvenient: idDetailConvenient,
        note: note,
      };
      await JoinConvenient.addNewJoinConvenient(data);
      res.json({ thongbao: "Đã thêm JoinConvenient" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi thêm dữ liệu JoinConvenient" });
    }
  };

  // Lấy 1
  public getJoinConvenient = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const numberId: number = parseInt(req.query.idPlace as string);
      const resultJoinConvenient =
        await JoinConvenient.fetchPlaceJoinConvenient(numberId);
      res.json({ joinConvenient: resultJoinConvenient });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi lấy dữ liệu JoinConvenient" });
    }
  };

  // Update
  public updateJoinConvenient = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const idPlace = req.body.idPlace;
      const idDetailConvenient = req.body.idDetailConvenient;
      const note = req.body.note;
      const data = {
        idPlace: idPlace,
        idDetailConvenient: idDetailConvenient,
        note: note,
      };
      await JoinConvenient.putUpDateJoinConvenient(data, numberId);
      res.json({ thongbao: "Đã cập nhật JoinConvenient" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi update dữ liệu JoinConvenient" });
    }
  };

  // Delete
  public deleteJoinConvenient = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      await JoinConvenient.delJoinConvenient(numberId);
      res.json({ thongbao: "Đã xóa thành công" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi xóa dữ liệu JoinConvenient" });
    }
  };
}
