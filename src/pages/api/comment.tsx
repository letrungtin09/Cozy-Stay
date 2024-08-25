import { NextApiRequest, NextApiResponse } from "next";
import ApiComment from "../controllers/comment.controller";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const apiComment = new ApiComment();

  switch (req.method) {
    case "GET":
      if (req.query.idPlace) {
        await apiComment.getCommentByIdPlaces(req, res);
      } if (req.query.idPlaceAndIdUser) {
        await apiComment.getCommentByIdPlaceAndIdUser(req, res);
      } else {
        // Lấy tất cả các sản phẩm
        await apiComment.getAllComment(req, res);
      }
      break;
    case "POST":
      // Thêm một sản phẩm mới
      await apiComment.postaddComment(req, res);
      break;
    case "PUT":
      // Cập nhật một sản phẩm
      await apiComment.updateComment(req, res);
      break;
    case "DELETE":
      // Xóa một sản phẩm
      await apiComment.deleteComment(req, res);
      break;
    default:
      res.status(405).json({ error: "Phương thức không được hỗ trợ" });
      break;
  }
};

export default handler;
