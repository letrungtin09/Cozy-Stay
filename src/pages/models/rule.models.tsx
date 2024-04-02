import commonFunctions from './common';
import db from './database';
export default class Rule {
    // Trả về tất cả Rule
    static async fetchAllRule() {
        const sqlItem = `SELECT * FROM rule`;

        try {
            const resultItems = await commonFunctions.getDataBase(db, sqlItem);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }

    // Thêm Rule
    static async addNewRule(data: any) {
        const sql = 'INSERT INTO rule SET ?';
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Lấy 1 theo id
    static async fetchOneRule(id: number) {
        const sqlGetItem = `SELECT * FROM rule WHERE id = ?`;
        try {
            const resultItem = await commonFunctions.handleDataBase(db, sqlGetItem, id);
            return resultItem;
        } catch (err) {
            throw err;
        }
    }

    // Sửa Rule
    static async putUpDateRule(data: any, id: number) {
        const sql = `UPDATE rule SET ? WHERE id = ${id}`;
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Xóa Rule
    static async delRule(id: number) {
        const sqlDeleteData = `DELETE FROM rule WHERE id=?`;
        try {
            await commonFunctions.handleDataBase(db, sqlDeleteData, id);
        } catch (err) {
            throw err;
        }
    }
}
