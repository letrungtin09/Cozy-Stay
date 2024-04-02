import commonFunctions from './common';
import db from './database';
export default class Notification {
    // Trả về tất cả Notification
    static async fetchAllNotification() {
        const sqlItem = `SELECT * FROM notification`;

        try {
            const resultItems = await commonFunctions.getDataBase(db, sqlItem);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }

    // Thêm Notification
    static async addNewNotification(data: any) {
        const sql = 'INSERT INTO notification SET ?';
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Lấy 1 theo id
    static async fetchOneNotification(id: number) {
        const sqlGetItem = `SELECT * FROM notification WHERE id = ?`;
        try {
            const resultItem = await commonFunctions.handleDataBase(db, sqlGetItem, id);
            return resultItem;
        } catch (err) {
            throw err;
        }
    }

    // Sửa Notification
    static async putUpDateNotification(data: any, id: number) {
        const sql = `UPDATE notification SET ? WHERE id = ${id}`;
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Xóa Notification
    static async delNotification(id: number) {
        const sqlDeleteData = `DELETE FROM notification WHERE id=?`;
        try {
            await commonFunctions.handleDataBase(db, sqlDeleteData, id);
        } catch (err) {
            throw err;
        }
    }
}
