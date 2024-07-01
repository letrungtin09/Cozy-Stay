import commonFunctions from "./common";
import db from "./database";
export default class Bill {
  // Trả về tất cả Bill
  static async fetchAllBill() {
    const sqlItem = `SELECT * FROM bill`;

    try {
      const resultItems = await commonFunctions.getDataBase(db, sqlItem);
      return resultItems;
    } catch (err) {
      throw err;
    }
  }

  // Thêm Bill
  static async addNewBill(data: any) {
    const sql = "INSERT INTO bill SET ?";
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  // Lấy 1 theo id
  static async fetchOneBill(id: number) {
    const sqlGetItem = `SELECT * FROM bill WHERE id = ?`;
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

  // Sửa Bill
  static async putUpDateBill(data: any, id: number) {
    const sql = `UPDATE bill SET ? WHERE id = ${id}`;
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  // Xóa Bill
  static async delBill(id: number) {
    const sqlDeleteData = `DELETE FROM bill WHERE id=?`;
    try {
      await commonFunctions.handleDataBase(db, sqlDeleteData, id);
    } catch (err) {
      throw err;
    }
  }
}
