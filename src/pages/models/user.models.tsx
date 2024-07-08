import commonFunctions from "./common";
import db from "./database";
export default class User {
  // Trả về tất cả User
  static async fetchAllUser() {
    const sqlItem = `SELECT * FROM user`;

    try {
      const resultItems = await commonFunctions.getDataBase(db, sqlItem);
      return resultItems;
    } catch (err) {
      throw err;
    }
  }

  // Trả về tất cả chủ nhà
  static async fetchAllPartner() {
    const sqlItem = `SELECT * FROM user WHERE role = 1`;

    try {
      const resultItems = await commonFunctions.getDataBase(db, sqlItem);
      return resultItems;
    } catch (err) {
      throw err;
    }
  }

  // Thêm User
  static async addNewUser(data: any) {
    const sql = "INSERT INTO user SET ?";
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  // Lấy 1 theo id
  static async fetchOneUser(id: number) {
    const sqlGetItem = `SELECT * FROM user WHERE id = ?`;
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

  // Sửa User
  static async putUpDateUser(data: any, id: number) {
    const sql = `UPDATE user SET ? WHERE id = ${id}`;
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  // Xóa User
  static async delUser(id: number) {
    const sqlDeleteData = `DELETE FROM user WHERE id=?`;
    try {
      await commonFunctions.handleDataBase(db, sqlDeleteData, id);
    } catch (err) {
      throw err;
    }
  }
}
