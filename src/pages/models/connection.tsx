export interface Connection {
    connect(callback?: (err: any) => void): void;
    query(sql: string, values?: any, callback?: (err: any, results?: any) => void): void;
    // Các phương thức và thuộc tính khác nếu cần thiết
}
