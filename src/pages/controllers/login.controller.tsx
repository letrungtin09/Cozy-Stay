

import { encrypt } from '@/lib/utils';
import LoginModels from '../models/login.models';
import { NextApiRequest, NextApiResponse } from 'next';

export default class ApiLogin {

    public postLogin = async (req: NextApiRequest, res: NextApiResponse) => {
        let email = req.body.email;
        let pass = req.body.password;
        let types = req.body.types;
        try {
            const resultLogin = await LoginModels.fetchUserbyIdEmail(email);
            if (resultLogin) {
                const user = JSON.parse(JSON.stringify(resultLogin[0]));
                if (user.password == pass) {
                    const encryptedSessionData = encrypt({
                        idUser: user.id,
                        userName: user.userName,
                        email: user.email,
                        avatar: user.avatar,
                        phoneNumber: user.phoneNumber,
                        role: user.role
                    });
                    if (types == true) {
                        res.setHeader('Set-Cookie', `user=${encodeURIComponent(encryptedSessionData)}; Max-Age=86400; Path=/`);
                        res.status(200).json({ status: true });
                    } else {
                        res.status(200).json({ status: true, idUser: user.id, userName: user.userName, email: user.email, avatar: user.avatar, phoneNumber: user.phoneNumber, role: user.role });
                    }
                } else {
                    res.status(401).json({ error: 'Sai mật khẩu' })
                }
            }
        } catch (error) {
            console.error('error');
            res.status(404).json({ error: 'Người dùng không tồn tại' });
        }
    };
}
