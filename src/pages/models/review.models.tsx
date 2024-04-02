import commonFunctions from './common';
import db from './database';
export default class Review {
    // Trả về tất cả Review
    static async fetchAllReview() {
        const sqlItem = `SELECT * FROM review`;

        try {
            const resultItems = await commonFunctions.getDataBase(db, sqlItem);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }

    // Thêm Review
    static async addNewReview(data: any) {
        const sql = 'INSERT INTO review SET ?';
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Lấy 1 theo id
    static async fetchOneReview(id: number) {
        const sqlGetItem = `SELECT * FROM review WHERE id = ?`;
        try {
            const resultItem = await commonFunctions.handleDataBase(db, sqlGetItem, id);
            return resultItem;
        } catch (err) {
            throw err;
        }
    }

    // Sửa Review
    static async putUpDateReview(data: any, id: number) {
        const sql = `UPDATE review SET ? WHERE id = ${id}`;
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Xóa Review
    static async delReview(id: number) {
        const sqlDeleteData = `DELETE FROM review WHERE id=?`;
        try {
            await commonFunctions.handleDataBase(db, sqlDeleteData, id);
        } catch (err) {
            throw err;
        }
    }
}
