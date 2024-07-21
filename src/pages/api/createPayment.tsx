import { NextApiRequest, NextApiResponse } from 'next';
import ApiPayment from '../controllers/payMent.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiPayment = new ApiPayment();

    switch (req.method) {
        case 'POST':
            // gửi yêu cầu thanh toans
            await apiPayment.postPayment(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
