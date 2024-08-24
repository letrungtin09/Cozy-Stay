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
  // Lấy 1
  static async fetchWalletbyId(id: number) {
    const sqlGetItem = `SELECT * FROM wallet WHERE id = ?`;
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
  // Thêm Wallet
  static async addNewWallet(data: any) {
    const sql = "INSERT INTO wallet SET ?";
    try {
      const resultItem = await commonFunctions.handleDataBase(db, sql, data);
      return resultItem;
    } catch (err) {
      throw err;
    }
  }
  // Sửa wallet qr
  static async putUpDateQrLink(qrLink: string, linkQrId: string, id: number) {
    const sql = `UPDATE wallet SET linkQr = ?, linkQrId = ? WHERE id = ?`;
    try {
      await commonFunctions.handleDataBase(db, sql, [qrLink, linkQrId, id]);
    } catch (err) {
      throw err;
    }
  }
  // Sửa wallet qr and role
  static async putUpdateSuccessPayment(
    transactionType: number,
    linkQrId: string,
    id: number
  ) {
    const sql = `UPDATE wallet SET linkQr = '', transactionType = ? WHERE id = ? AND linkQrId = ?`;
    try {
      const result = await commonFunctions.handleDataBase(db, sql, [
        transactionType,
        id,
        linkQrId,
      ]);
      return result;
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
  // Xóa Wallet
  static async delWallet(id: number, linkId: string) {
    const sqlDeleteData = `DELETE FROM wallet WHERE id = ? AND linkQrId = ?`;
    try {
      await commonFunctions.handleDataBase(db, sqlDeleteData, [id, linkId]);
    } catch (err) {
      throw err;
    }
  }
}
