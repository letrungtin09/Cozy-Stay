import { NextApiRequest, NextApiResponse } from 'next';
import ApiService from '../controllers/service.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiService = new ApiService();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiService.getService(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiService.getAllService(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiService.postaddService(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiService.updateService(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiService.deleteService(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
