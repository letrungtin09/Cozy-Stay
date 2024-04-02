import commonFunctions from './common';
import db from './database';
export default class JoinService {
    // Trả về tất cả JoinService
    static async fetchAllJoinService() {
        const sqlItem = `SELECT * FROM joinservice`;

        try {
            const resultItems = await commonFunctions.getDataBase(db, sqlItem);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }

    // Thêm JoinService
    static async addNewJoinService(data: any) {
        const sql = 'INSERT INTO joinservice SET ?';
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Lấy 1 theo id
    static async fetchOneJoinService(id: number) {
        const sqlGetItem = `SELECT * FROM joinservice WHERE id = ?`;
        try {
            const resultItem = await commonFunctions.handleDataBase(db, sqlGetItem, id);
            return resultItem;
        } catch (err) {
            throw err;
        }
    }

    // Sửa JoinService
    static async putUpDateJoinService(data: any, id: number) {
        const sql = `UPDATE joinservice SET ? WHERE id = ${id}`;
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Xóa JoinService
    static async delJoinService(id: number) {
        const sqlDeleteData = `DELETE FROM joinservice WHERE id=?`;
        try {
            await commonFunctions.handleDataBase(db, sqlDeleteData, id);
        } catch (err) {
            throw err;
        }
    }
}
