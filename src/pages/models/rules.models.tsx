import commonFunctions from "./common";
import db from "./database";
export default class Rule {
  // Trả về tất cả Rule
  static async fetchAllRules() {
    const sqlItem = `SELECT * FROM rules`;

    try {
      const resultItems = await commonFunctions.getDataBase(db, sqlItem);
      return resultItems;
    } catch (err) {
      throw err;
    }
  }

  // Thêm Rule
  static async addNewRules(data: any) {
    const sql = "INSERT INTO rules SET ?";
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  // Lấy 1 theo id
  static async fetchOneRules(id: number) {
    const sqlGetItem = `SELECT * FROM rules WHERE id = ?`;
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

  // Sửa Rule
  static async putUpDateRules(data: any, id: number) {
    const sql = `UPDATE rules SET ? WHERE id = ${id}`;
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  // Xóa Rule
  static async delRules(id: number) {
    const sqlDeleteData = `DELETE FROM rules WHERE id=?`;
    try {
      await commonFunctions.handleDataBase(db, sqlDeleteData, id);
    } catch (err) {
      throw err;
    }
  }
}
