import DataEmail from "@/lib/email";

const nodemailer = require("nodemailer");

export default class EmailModels {
    // Trả về tất cả Comment
    static async sendEmailModels(email: string, code: string) {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: DataEmail.emailUserName,
                pass: DataEmail.passEmail,
            },
        });
        const info = await transporter.sendMail({
            from: '"CozyStay" <duyttps26271@fpt.edu.vn>', // sender address
            to: email, // list of receivers
            subject: "[CozyStay] Mã xác thực đăng ký tài khoản cozystay", // Subject line
            text: "Thuê nhà giá rẻ an tâm sức khỏe", // plain text body
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>Chào bạn,</h2>
                <p>Cảm ơn bạn đã đăng ký tài khoản trên CozyStay. Dưới đây là mã xác thực để hoàn tất quá trình đăng ký:</p>
                <h1 style="color: #4CAF50;">${code}</h1>
                <p>Vui lòng nhập mã xác thực này trên trang đăng ký để hoàn tất.</p>
                <p>Nếu bạn không yêu cầu đăng ký tài khoản, vui lòng bỏ qua email này.</p>
                <br>
                <p>Trân trọng,</p>
                <p>Đội ngũ CozyStay</p>
            </div>
        `
        });
        return info;
    }

}
