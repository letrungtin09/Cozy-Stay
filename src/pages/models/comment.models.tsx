import commonFunctions from "./common";
import db from "./database";
export default class Comment {
  // Trả về tất cả Comment
  static async fetchAllComment() {
    const sqlItem = `SELECT * FROM comment`;

    try {
      const resultItems = await commonFunctions.getDataBase(db, sqlItem);
      return resultItems;
    } catch (err) {
      throw err;
    }
  }

  // lấy theo idPlaces 
  static async fetchCommentByIdPlaces(id: number) {
    const sqlGetItem = `SELECT * FROM comment WHERE idPlace  = ?`;
    try {
      const resultItem = await commonFunctions.handleDataBase(
        db,
        sqlGetItem,
        id
      );
      return resultItem;
    } catch (err) {
      throw err;
    }
  }

  // lấy theo idPlaces and idUser
  static async fetchCommentByIdPlaceAndIdUser(idPlace: number, idUser: number) {
    const sqlGetItem = `SELECT * FROM comment WHERE idPlace = ? AND idUser = ?`;
    try {
      const resultItem = await commonFunctions.handleDataBase(
        db,
        sqlGetItem,
        [idPlace, idUser]
      );
      return resultItem;
    } catch (err) {
      throw err;
    }
  }


  // Thêm Comment
  static async addNewComment(data: any) {
    const sql = "INSERT INTO comment SET ?";
    try {
      const resultItem = await commonFunctions.handleDataBase(db, sql, data);
      const commentId = resultItem.insertId; // MySQL trả về ID của dòng mới được thêm vào

      return commentId;
    } catch (err) {
      throw err;
    }
  }

  // Lấy 1 theo id
  static async fetchOneComment(id: number) {
    const sqlGetItem = `SELECT * FROM comment WHERE id = ?`;
    try {
      const resultItem = await commonFunctions.handleDataBase(
        db,
        sqlGetItem,
        id
      );
      return resultItem;
    } catch (err) {
      throw err;
    }
  }

  // Sửa Comment
  static async putUpDateComment(content: string, id: number) {
    const sql = `UPDATE comment SET content = ? WHERE id = ?`;
    try {
      await commonFunctions.handleDataBase(db, sql, [content, id]);
    } catch (err) {
      throw err;
    }
  }

  // Xóa Comment
  static async delComment(id: number) {
    const sqlDeleteData = `DELETE FROM comment WHERE id=?`;
    try {
      await commonFunctions.handleDataBase(db, sqlDeleteData, id);
    } catch (err) {
      throw err;
    }
  }
}
