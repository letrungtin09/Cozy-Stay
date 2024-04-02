import commonFunctions from './common';
import db from './database';
export default class Service {
    // Trả về tất cả Service
    static async fetchAllService() {
        const sqlItem = `SELECT * FROM service`;

        try {
            const resultItems = await commonFunctions.getDataBase(db, sqlItem);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }

    // Thêm Service
    static async addNewService(data: any) {
        const sql = 'INSERT INTO service SET ?';
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Lấy 1 theo id
    static async fetchOneService(id: number) {
        const sqlGetItem = `SELECT * FROM service WHERE id = ?`;
        try {
            const resultItem = await commonFunctions.handleDataBase(db, sqlGetItem, id);
            return resultItem;
        } catch (err) {
            throw err;
        }
    }

    // Sửa Service
    static async putUpDateService(data: any, id: number) {
        const sql = `UPDATE service SET ? WHERE id = ${id}`;
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Xóa Service
    static async delService(id: number) {
        const sqlDeleteData = `DELETE FROM service WHERE id=?`;
        try {
            await commonFunctions.handleDataBase(db, sqlDeleteData, id);
        } catch (err) {
            throw err;
        }
    }
}
