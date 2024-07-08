import commonFunctions from "./common";
import db from "./database";
export default class Convenient {
  // Trả về tất cả Service
  static async fetchAllConvenient() {
    const sqlItem = `SELECT * FROM convenient`;

    try {
      const resultItems = await commonFunctions.getDataBase(db, sqlItem);
      return resultItems;
    } catch (err) {
      throw err;
    }
  }

  // Thêm Service
  static async addNewConvenient(data: any) {
    const sql = "INSERT INTO convenient SET ?";
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  // Lấy 1 theo id
  static async fetchOneConvenient(id: number) {
    const sqlGetItem = `SELECT * FROM convenient WHERE id = ?`;
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

  // Sửa Service
  static async putUpDateConvenient(data: any, id: number) {
    const sql = `UPDATE convenient SET ? WHERE id = ${id}`;
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  // Xóa Service
  static async delConvenient(id: number) {
    const sqlDeleteData = `DELETE FROM convenient WHERE id=?`;
    try {
      await commonFunctions.handleDataBase(db, sqlDeleteData, id);
    } catch (err) {
      throw err;
    }
  }
}
