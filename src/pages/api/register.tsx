import { NextApiRequest, NextApiResponse } from 'next';
import ApiRegister from '../controllers/register.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiRegister = new ApiRegister();

    switch (req.method) {
        case 'POST':
            // gửi yêu cầu đăng ký
            await apiRegister.postRegister(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
