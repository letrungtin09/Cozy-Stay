import commonFunctions from './common';
import db from './database';
export default class Category {
    // Trả về tất cả category
    static async fetchAllCategory() {
        const sqlItem = `SELECT * FROM category`;

        try {
            const resultItems = await commonFunctions.getDataBase(db, sqlItem);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }

    // Thêm category
    static async addNewCategory(data: any) {
        const sql = 'INSERT INTO category SET ?';
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Lấy 1 theo id
    static async fetchOneCategory(id: number) {
        const sqlGetItem = `SELECT * FROM category WHERE id = ?`;
        try {
            const resultItem = await commonFunctions.handleDataBase(db, sqlGetItem, id);
            return resultItem;
        } catch (err) {
            throw err;
        }
    }

    // Sửa category
    static async putUpDateCategory(data: any, id: number) {
        const sql = `UPDATE category SET ? WHERE id = ${id}`;
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Xóa category
    static async delCategory(id: number) {
        const sqlDeleteData = `DELETE FROM category WHERE id=?`;
        try {
            await commonFunctions.handleDataBase(db, sqlDeleteData, id);
        } catch (err) {
            throw err;
        }
    }
}
