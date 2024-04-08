import commonFunctions from './common';
import db from './database';
export default class LoginModels {
    static async fetchUserbyIdEmail(email: any) {
        const sqlGetUser = `SELECT * FROM user where email = ?`;

        try {
            const resultItems = await commonFunctions.handleDataBase(db, sqlGetUser, email);
            return resultItems;
        } catch (err) {
            throw err;
        }
    }
}