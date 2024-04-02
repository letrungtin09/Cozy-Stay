import { NextApiRequest, NextApiResponse } from 'next';
import ApiDetailRule from '../controllers/detailRule.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiDetailRule = new ApiDetailRule();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiDetailRule.getDetailRule(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiDetailRule.getAllDetailRule(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiDetailRule.postaddDetailRule(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiDetailRule.updateDetailRule(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiDetailRule.deleteDetailRule(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
