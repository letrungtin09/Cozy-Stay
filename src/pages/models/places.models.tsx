import commonFunctions from './common';
import db from './database';
export default class Places {
    // Trả về tất cả Places
    static async fetchAllPlaces() {
        const sqlItem = `SELECT * FROM places`;

        try {
            const resultItems = await commonFunctions.getDataBase(db, sqlItem);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }

    // Thêm Places
    static async addNewPlaces(data: any) {
        const sql = 'INSERT INTO places SET ?';
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Lấy 1 theo id
    static async fetchOnePlaces(id: number) {
        const sqlGetItem = `SELECT * FROM places WHERE id = ?`;
        try {
            const resultItem = await commonFunctions.handleDataBase(db, sqlGetItem, id);
            return resultItem;
        } catch (err) {
            throw err;
        }
    }

    // Sửa Places
    static async putUpDatePlaces(data: any, id: number) {
        const sql = `UPDATE places SET ? WHERE id = ${id}`;
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Xóa Places
    static async delPlaces(id: number) {
        const sqlDeleteData = `DELETE FROM places WHERE id=?`;
        try {
            await commonFunctions.handleDataBase(db, sqlDeleteData, id);
        } catch (err) {
            throw err;
        }
    }
}
