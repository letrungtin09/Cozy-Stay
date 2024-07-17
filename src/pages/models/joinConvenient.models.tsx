import commonFunctions from "./common";
import db from "./database";
export default class JoinConvenient {
  // Trả về tất cả JoinConvenient
  static async fetchAllJoinConvenient() {
    const sqlItem = `SELECT * FROM join_convenient`;

    try {
      const resultItems = await commonFunctions.getDataBase(db, sqlItem);
      return resultItems;
    } catch (err) {
      throw err;
    }
  }

  // Thêm JoinConvenient
  static async addNewJoinConvenient(data: any) {
    const sql = "INSERT INTO join_convenient SET ?";
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  // Lấy theo idPlace
  static async fetchPlaceJoinConvenient(id: number) {
    const sqlGetItem = `SELECT * FROM join_convenient WHERE idPlace = ? GROUP BY idConvenient`;
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

  // Sửa JoinConvenient
  static async putUpDateJoinConvenient(data: any, id: number) {
    const sql = `UPDATE join_convenient SET ? WHERE id = ${id}`;
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  // Xóa JoinConvenient
  static async delJoinConvenient(id: number) {
    const sqlDeleteData = `DELETE FROM join_convenient WHERE id=?`;
    try {
      await commonFunctions.handleDataBase(db, sqlDeleteData, id);
    } catch (err) {
      throw err;
    }
  }
}
