import commonFunctions from './common';
import db from './database';
export default class DetailRule {
    // Trả về tất cả DetailRule
    static async fetchAllDetailRule() {
        const sqlItem = `SELECT * FROM detailrule`;

        try {
            const resultItems = await commonFunctions.getDataBase(db, sqlItem);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }

    // Thêm DetailRule
    static async addNewDetailRule(data: any) {
        const sql = 'INSERT INTO detailrule SET ?';
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Lấy 1 theo id
    static async fetchOneDetailRule(id: number) {
        const sqlGetItem = `SELECT * FROM detailrule WHERE id = ?`;
        try {
            const resultItem = await commonFunctions.handleDataBase(db, sqlGetItem, id);
            return resultItem;
        } catch (err) {
            throw err;
        }
    }

    // Sửa DetailRule
    static async putUpDateDetailRule(data: any, id: number) {
        const sql = `UPDATE detailrule SET ? WHERE id = ${id}`;
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Xóa DetailRule
    static async delDetailRule(id: number) {
        const sqlDeleteData = `DELETE FROM detailrule WHERE id=?`;
        try {
            await commonFunctions.handleDataBase(db, sqlDeleteData, id);
        } catch (err) {
            throw err;
        }
    }
}
