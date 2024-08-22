function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Tạo mã 6 chữ số ngẫu nhiên
}

export function CodeRandom() {
    return generateVerificationCode();
}

export function GenerateRandomCode(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
    }
    return result;
}