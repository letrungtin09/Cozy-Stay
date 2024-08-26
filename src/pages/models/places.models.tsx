import commonFunctions from "./common";
import db from "./database";
export default class Places {
  // Trả về tất cả Places
  static async fetchAllPlaces() {
    const sqlItem = `SELECT * FROM places`;

    try {
      const resultItems = await commonFunctions.getDataBase(db, sqlItem);
      return resultItems;
    } catch (err) {
      throw err;
    }
  }

  static async fetchPlacesByIds(ids: number[]) {
    // Tạo câu truy vấn SQL với điều kiện id nằm trong mảng ids
    const sqlGetItems = `SELECT * FROM places WHERE id IN (${ids
      .map(() => "?")
      .join(",")})`;

    try {
      // Thực thi truy vấn với mảng ids
      const resultItems = await commonFunctions.handleDataBase(
        db,
        sqlGetItems,
        ids
      );
      return resultItems;
    } catch (err) {
      throw err;
    }
  }

  // Thêm Places
  static async addNewPlaces(data: any) {
    const sql = "INSERT INTO places SET ?";
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  // Lấy 1 theo id
  static async fetchOnePlaces(id: number) {
    const sqlGetItem = `SELECT * FROM places WHERE id = ?`;
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
  // lấy theo cateid
  static async fetchIdCatePlaces(id: number) {
    const sqlGetItem = `SELECT * FROM places WHERE idCategory  = ?`;
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
  // Lấy 1 theo idUser
  static async fetchUserPlaces(idUser: number) {
    const sqlGetItem = `SELECT * FROM places WHERE idUser = ?`;
    try {
      const resultItem = await commonFunctions.handleDataBase(
        db,
        sqlGetItem,
        idUser
      );
      return resultItem;
    } catch (err) {
      throw err;
    }
  }

  // Sửa Places
  static async putUpDatePlaces(data: any, id: number) {
    const sql = `UPDATE places SET ? WHERE id = ${id}`;
    try {
      await commonFunctions.handleDataBase(db, sql, data);
    } catch (err) {
      throw err;
    }
  }

  //Tìm kiếm places
  static async searchPlaces(keyword: any) {
    const sql = `SELECT * FROM places WHERE title LIKE ? OR address LIKE ?`;
    const params = [`%${keyword}%`, `%${keyword}%`];
    try {
      const results = await commonFunctions.handleDataBase(db, sql, params);
      return results;
    } catch (err) {
      throw err;
    }
  }

  // Xóa Places
  static async delPlaces(id: number) {
    const sqlDeleteData = `DELETE FROM places WHERE id=?`;
    try {
      await commonFunctions.handleDataBase(db, sqlDeleteData, id);
    } catch (err) {
      throw err;
    }
  }
}
