
import * as crypto from "node:crypto";

const createCipherObj = () => {
    const algorithm = "aes-256-cbc";

    const key = crypto
        .createHash("sha256")
        .update(String(process.env.NEXT_PUBLIC_SECRET_KEY!))
        .digest("base64")
        .substring(0, 32);

    const iv = crypto
        .createHash("sha256")
        .update(String(process.env.NEXT_PUBLIC_SECRET_KEY!))
        .digest("base64")
        .substring(0, 16);
    const cipher = crypto.createCipheriv(algorithm, key, iv)

    const decipher = crypto.createDecipheriv(algorithm, key, iv)

    return { cipher, decipher };
};
/**
 * @param {*} content - Nội dung cần mã hóa.
 * @returns Chuỗi mã hóa.
 */
export const encrypt = (content: any): string => {
    const { cipher } = createCipherObj();
    let encryptedData = cipher.update(JSON.stringify(content), 'utf8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
}
/**
 * @param {*} encrypted - Nội dung cần mã hóa.
 * @returns Chuỗi mã hóa.
 */
export const decrypt = (encrypted: string) => {
    const { decipher } = createCipherObj();
    let decryptedData = decipher.update(encrypted, 'hex', 'utf8');
    decryptedData += decipher.final('utf8');
    return decryptedData;
}
