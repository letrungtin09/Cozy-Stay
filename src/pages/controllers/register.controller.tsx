import RegisterModels from '../models/register.models';
import { NextApiRequest, NextApiResponse } from 'next';
export default class ApiRegister {

    public postRegister = async (req: NextApiRequest, res: NextApiResponse) => {
        let userName = req.body.userName;
        let email = req.body.email;
        let password = req.body.password;
        const data = {
            userName: userName,
            email: email,
            password: password,
        };

        async function addUser() {
            try {
                await RegisterModels.addNewUser(data);
                res.status(200).json({ status: true });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Đã xảy ra lỗi khi thêm người dùng mới' });
            }
        }

        await RegisterModels.findEmailbyEmail(email)
            .then(res => {
                if (res.length > 0) {
                    res.status(409);
                } else {
                    addUser();
                }
            })
            .catch(error => {
                console.error(error);
                res.status(409).json({ error: 'Email đã tồn tại' });
            });;
    }
}