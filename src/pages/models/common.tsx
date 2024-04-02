import mysql from 'mysql';
import { Connection } from './connection';

const getDataBase = (dtb: Connection, sql: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        dtb.query(sql, function (err: any, data: any) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const handleDataBase = (dtb: Connection, sql: string, dataUp: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        dtb.query(sql, dataUp, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
const commonFunctions = { getDataBase, handleDataBase };

export default commonFunctions;
