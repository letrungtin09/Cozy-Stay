import commonFunctions from './common';
import db from './database';
export default class LoginModels {
    static async addNewUser(data: any) {
        const sqlGetUser = `insert into user SET ?`;
        try {
            await commonFunctions.handleDataBase(db, sqlGetUser, data);

        } catch (err) {
            throw err;
        }
    }
    static async findEmailbyEmail(email: any) {
        const sqlGetUser = `SELECT * FROM user WHERE email = ?`;
        try {
            const result = await commonFunctions.handleDataBase(db, sqlGetUser, email);
            return result;
        } catch (err) {
            throw err;
        }
    }
}