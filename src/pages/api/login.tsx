import { NextApiRequest, NextApiResponse } from 'next';
import ApiLogin from '../controllers/login.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiLogin = new ApiLogin();

    switch (req.method) {
        case 'GET':

            break;
        case 'POST':
            // gửi yêu cầu đăng nhập
            await apiLogin.postLogin(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
