import { NextApiRequest, NextApiResponse } from 'next';
import ApiCategory from '../controllers/category.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiCategory = new ApiCategory();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiCategory.getCate(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiCategory.getAllCate(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiCategory.postaddCate(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiCategory.updateCate(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiCategory.deleteCate(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
