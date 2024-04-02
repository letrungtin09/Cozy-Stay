import commonFunctions from './common';
import db from './database';
export default class Messenger {
    // Trả về tất cả Messenger
    static async fetchAllMessenger() {
        const sqlItem = `SELECT * FROM messenger`;

        try {
            const resultItems = await commonFunctions.getDataBase(db, sqlItem);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }

    // Thêm Messenger
    static async addNewMessenger(data: any) {
        const sql = 'INSERT INTO messenger SET ?';
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Lấy 1 theo id
    static async fetchOneMessenger(id: number) {
        const sqlGetItem = `SELECT * FROM messenger WHERE id = ?`;
        try {
            const resultItem = await commonFunctions.handleDataBase(db, sqlGetItem, id);
            return resultItem;
        } catch (err) {
            throw err;
        }
    }

    // Sửa Messenger
    static async putUpDateMessenger(data: any, id: number) {
        const sql = `UPDATE messenger SET ? WHERE id = ${id}`;
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Xóa Messenger
    static async delMessenger(id: number) {
        const sqlDeleteData = `DELETE FROM messenger WHERE id=?`;
        try {
            await commonFunctions.handleDataBase(db, sqlDeleteData, id);
        } catch (err) {
            throw err;
        }
    }
}
