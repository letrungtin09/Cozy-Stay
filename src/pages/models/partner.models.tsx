import commonFunctions from './common';
import db from './database';
export default class Partner {
    // Trả về tất cả Partner
    static async fetchAllPartner() {
        const sqlItem = `SELECT * FROM partner`;

        try {
            const resultItems = await commonFunctions.getDataBase(db, sqlItem);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }

    // Thêm Partner
    static async addNewPartner(data: any) {
        const sql = 'INSERT INTO partner SET ?';
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Lấy 1 theo id
    static async fetchOnePartner(id: number) {
        const sqlGetItem = `SELECT * FROM partner WHERE id = ?`;
        try {
            const resultItem = await commonFunctions.handleDataBase(db, sqlGetItem, id);
            return resultItem;
        } catch (err) {
            throw err;
        }
    }

    // Sửa Partner
    static async putUpDatePartner(data: any, id: number) {
        const sql = `UPDATE partner SET ? WHERE id = ${id}`;
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Xóa Partner
    static async delPartner(id: number) {
        const sqlDeleteData = `DELETE FROM partner WHERE id=?`;
        try {
            await commonFunctions.handleDataBase(db, sqlDeleteData, id);
        } catch (err) {
            throw err;
        }
    }
}
