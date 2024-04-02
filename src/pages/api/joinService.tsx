import { NextApiRequest, NextApiResponse } from 'next';
import ApiJoinService from '../controllers/joinService.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiJoinService = new ApiJoinService();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiJoinService.getJoinService(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiJoinService.getAllJoinService(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiJoinService.postaddJoinService(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiJoinService.updateJoinService(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiJoinService.deleteJoinService(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
