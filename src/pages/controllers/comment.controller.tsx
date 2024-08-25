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

  // Lấy theo IdPlaces
  public getCommentByIdPlaces = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const idPlace: number = parseInt(req.query.idPlace as string);
      const resultPlaces = await Comment.fetchCommentByIdPlaces(idPlace);
      res.json({ places: resultPlaces });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Places" });
    }
  };

  // Lấy theo IdPlaces and idUser
  public getCommentByIdPlaceAndIdUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const idPlace: number = parseInt(req.query.idPlaceAndIdUser as string);
      const idUser: number = parseInt(req.query.idUser as string);
      const resultPlaces = await Comment.fetchCommentByIdPlaceAndIdUser(idPlace, idUser);
      res.json({ comment: resultPlaces });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Places" });
    }
  };

  // Thêm
  public postaddComment = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const idUser = req.body.idUser;
      const content = req.body.content;
      const idPlace = req.body.idPlace;
      const data = {
        idUser: idUser,
        content: content,
        idPlace: idPlace,
      };
      const newCommentId = await Comment.addNewComment(data);
      res.json({ success: "Đã thêm Comment", newCommentId });
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
      const numberId: number = parseInt(req.body.id as string);
      const content = req.body.content;
      await Comment.putUpDateComment(content, numberId);
      res.json({ success: "Đã cập nhật Comment" });
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
      res.json({ success: "Đã xóa thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi xóa dữ liệu Comment" });
    }
  };
}
