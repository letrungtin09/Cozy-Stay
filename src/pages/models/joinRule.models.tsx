import commonFunctions from './common';
import db from './database';
export default class JoinRule {
    // Trả về tất cả JoinRule
    static async fetchAllJoinRule() {
        const sqlItem = `SELECT * FROM joinrule`;

        try {
            const resultItems = await commonFunctions.getDataBase(db, sqlItem);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }

    // Thêm JoinRule
    static async addNewJoinRule(data: any) {
        const sql = 'INSERT INTO joinrule SET ?';
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Lấy 1 theo id
    static async fetchOneJoinRule(id: number) {
        const sqlGetItem = `SELECT * FROM joinrule WHERE id = ?`;
        try {
            const resultItem = await commonFunctions.handleDataBase(db, sqlGetItem, id);
            return resultItem;
        } catch (err) {
            throw err;
        }
    }

    // Sửa JoinRule
    static async putUpDateJoinRule(data: any, id: number) {
        const sql = `UPDATE joinrule SET ? WHERE id = ${id}`;
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Xóa JoinRule
    static async delJoinRule(id: number) {
        const sqlDeleteData = `DELETE FROM joinrule WHERE id=?`;
        try {
            await commonFunctions.handleDataBase(db, sqlDeleteData, id);
        } catch (err) {
            throw err;
        }
    }
}
