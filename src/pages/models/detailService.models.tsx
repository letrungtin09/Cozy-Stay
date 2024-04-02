import commonFunctions from './common';
import db from './database';
export default class DetailService {
    // Trả về tất cả DetailService
    static async fetchAllDetailService() {
        const sqlItem = `SELECT * FROM detailservice`;

        try {
            const resultItems = await commonFunctions.getDataBase(db, sqlItem);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }

    // Thêm DetailService
    static async addNewDetailService(data: any) {
        const sql = 'INSERT INTO detailservice SET ?';
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Lấy 1 theo id
    static async fetchOneDetailService(id: number) {
        const sqlGetItem = `SELECT * FROM detailservice WHERE id = ?`;
        try {
            const resultItem = await commonFunctions.handleDataBase(db, sqlGetItem, id);
            return resultItem;
        } catch (err) {
            throw err;
        }
    }

    // Sửa DetailService
    static async putUpDateDetailService(data: any, id: number) {
        const sql = `UPDATE detailservice SET ? WHERE id = ${id}`;
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Xóa DetailService
    static async delDetailService(id: number) {
        const sqlDeleteData = `DELETE FROM detailservice WHERE id=?`;
        try {
            await commonFunctions.handleDataBase(db, sqlDeleteData, id);
        } catch (err) {
            throw err;
        }
    }
}
