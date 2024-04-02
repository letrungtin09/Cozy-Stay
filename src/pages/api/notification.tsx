import { NextApiRequest, NextApiResponse } from 'next';
import ApiNotification from '../controllers/notification.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiNotification = new ApiNotification();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiNotification.getNotification(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiNotification.getAllNotification(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiNotification.postaddNotification(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiNotification.updateNotification(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiNotification.deleteNotification(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
