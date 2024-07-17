import commonFunctions from "./common";
import db from "./database";
export default class Wallet {
  // Trả về tất cả Wallet
  static async fetchAllWallet() {
    const sqlItem = `SELECT * FROM wallet`;
    try {
      const resultItems = await commonFunctions.getDataBase(db, sqlItem);
      return resultItems;
    } catch (err) {
      throw err;
    }
  }

  // Thêm Wallet
  static async addNewWallet(data: any) {
    const sql = "INSERT INTO wallet SET ?";
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  // Lấy 1 theo idUser
  static async fetchUserWallet(id: number) {
    const sqlGetItem = `SELECT * FROM wallet WHERE idUser = ?`;
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

}
