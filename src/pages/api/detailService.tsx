import { NextApiRequest, NextApiResponse } from 'next';
import ApiDetailService from '../controllers/detailService.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiDetailService = new ApiDetailService();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiDetailService.getDetailService(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiDetailService.getAllDetailService(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiDetailService.postaddDetailService(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiDetailService.updateDetailService(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiDetailService.deleteDetailService(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
