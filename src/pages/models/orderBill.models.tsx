import commonFunctions from './common';
import db from './database';
export default class OrderBill {
    // Trả về tất cả OrderBill
    static async fetchAllOrderBill() {
        const sqlItem = `SELECT * FROM orderbill`;

        try {
            const resultItems = await commonFunctions.getDataBase(db, sqlItem);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }

    // Thêm OrderBill
    static async addNewOrderBill(data: any) {
        const sql = 'INSERT INTO orderbill SET ?';
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Lấy 1 theo id
    static async fetchOneOrderBill(id: number) {
        const sqlGetItem = `SELECT * FROM orderbill WHERE id = ?`;
        try {
            const resultItem = await commonFunctions.handleDataBase(db, sqlGetItem, id);
            return resultItem;
        } catch (err) {
            throw err;
        }
    }

    // Sửa OrderBill
    static async putUpDateOrderBill(data: any, id: number) {
        const sql = `UPDATE orderbill SET ? WHERE id = ${id}`;
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Xóa OrderBill
    static async delOrderBill(id: number) {
        const sqlDeleteData = `DELETE FROM orderbill WHERE id=?`;
        try {
            await commonFunctions.handleDataBase(db, sqlDeleteData, id);
        } catch (err) {
            throw err;
        }
    }
}
