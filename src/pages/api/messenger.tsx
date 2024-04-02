import { NextApiRequest, NextApiResponse } from 'next';
import ApiMessenger from '../controllers/messenger.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiMessenger = new ApiMessenger();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiMessenger.getMessenger(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiMessenger.getAllMessenger(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiMessenger.postaddMessenger(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiMessenger.updateMessenger(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiMessenger.deleteMessenger(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
