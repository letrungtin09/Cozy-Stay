import commonFunctions from "./common";
import db from "./database";
export default class JoinRules {
  // Trả về tất cả JoinRules
  static async fetchAllJoinRules() {
    const sqlItem = `SELECT * FROM join_rules`;

    try {
      const resultItems = await commonFunctions.getDataBase(db, sqlItem);
      return resultItems;
    } catch (err) {
      throw err;
    }
  }

  // Thêm JoinRule
  static async addNewJoinRules(data: any) {
    const sql = "INSERT INTO join_rules SET ?";
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  // Lấy 1 theo idPlace
  static async fetchPlaceJoinRules(id: number) {
    const sqlGetItem = `SELECT * FROM join_rules WHERE idPlace = ?`;
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

  // Sửa JoinRule
  static async putUpDateJoinRules(data: any, id: number) {
    const sql = `UPDATE join_rules SET ? WHERE id = ${id}`;
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  // Xóa JoinRule
  static async delJoinRules(id: number) {
    const sqlDeleteData = `DELETE FROM join_rules WHERE id=?`;
    try {
      await commonFunctions.handleDataBase(db, sqlDeleteData, id);
    } catch (err) {
      throw err;
    }
  }
}
