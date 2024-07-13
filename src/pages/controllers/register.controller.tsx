import RegisterModels from '../models/register.models';
import { NextApiRequest, NextApiResponse } from 'next';
export default class ApiRegister {

    public addUser = async (req: NextApiRequest, res: NextApiResponse) => {
        let userName = req.body.fullName;
        let email = req.body.emailName;
        let password = req.body.passWord;
        const data = {
            userName: userName,
            email: email,
            password: password,
        };
        try {
            await RegisterModels.addNewUser(data);
            res.status(200).json({ status: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi thêm người dùng mới' });
        }

    }

    public postRegister = async (req: NextApiRequest, res: NextApiResponse) => {
        let email = req.body.email;

        try {
            const result = await RegisterModels.findEmailbyEmail(email);
            if (result.length > 0) {
                res.status(409).json({ error: 'Email đã tồn tại' });
            } else {
                res.status(200).json({ status: true, message: 'Email có sẵn' });
                // await addUser();
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi kiểm tra email' });
        }
    }
}