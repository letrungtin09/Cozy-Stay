import Comment from "../models/comment.models";
import { NextApiRequest, NextApiResponse } from "next";
export default class ApiComment {
  // Lấy tất
  public getAllComment = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const resultComment = await Comment.fetchAllComment();
      res.json({ comment: resultComment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Comment" });
    }
  };

  // Thêm
  public postaddComment = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const idUser = req.body.idUser;
      const content = req.body.content;
      const star = req.body.star;
      const idPlace = req.body.idPlace;
      const data = {
        idUser: idUser,
        content: content,
        star: star,
        idPlace: idPlace,
      };
      await Comment.addNewComment(data);
      res.json({ thongbao: "Đã thêm Comment" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi thêm dữ liệu Comment" });
    }
  };

  // Lấy 1
  public getComment = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const resultComment = await Comment.fetchOneComment(numberId);
      res.json({ comment: resultComment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Comment" });
    }
  };

  // Update
  public updateComment = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const idUser = req.body.idUser;
      const content = req.body.content;
      const star = req.body.star;
      const idPlace = req.body.idPlace;
      const data = {
        idUser: idUser,
        content: content,
        star: star,
        idPlace: idPlace,
      };
      await Comment.putUpDateComment(data, numberId);
      res.json({ thongbao: "Đã cập nhật Comment" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi update dữ liệu Comment" });
    }
  };

  // Delete
  public deleteComment = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      await Comment.delComment(numberId);
      res.json({ thongbao: "Đã xóa thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi xóa dữ liệu Comment" });
    }
  };
}
