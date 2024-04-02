import commonFunctions from './common';
import db from './database';
export default class WishList {
    // Trả về tất cả WishList
    static async fetchAllWishList() {
        const sqlItem = `SELECT * FROM wishlist`;

        try {
            const resultItems = await commonFunctions.getDataBase(db, sqlItem);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }

    // Thêm WishList
    static async addNewWishList(data: any) {
        const sql = 'INSERT INTO wishlist SET ?';
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Lấy 1 theo id
    static async fetchOneWishList(id: number) {
        const sqlGetItem = `SELECT * FROM wishlist WHERE id = ?`;
        try {
            const resultItem = await commonFunctions.handleDataBase(db, sqlGetItem, id);
            return resultItem;
        } catch (err) {
            throw err;
        }
    }

    // Sửa WishList
    static async putUpDateWishList(data: any, id: number) {
        const sql = `UPDATE wishlist SET ? WHERE id = ${id}`;
        try {
            await commonFunctions.handleDataBase(db, sql, data);
        } catch (err) {
            throw err;
        }
    }

    // Xóa WishList
    static async delWishList(id: number) {
        const sqlDeleteData = `DELETE FROM wishlist WHERE id=?`;
        try {
            await commonFunctions.handleDataBase(db, sqlDeleteData, id);
        } catch (err) {
            throw err;
        }
    }
}
