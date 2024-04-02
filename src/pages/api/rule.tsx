import { NextApiRequest, NextApiResponse } from 'next';
import ApiRule from '../controllers/rule.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiRule = new ApiRule();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiRule.getRule(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiRule.getAllRule(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiRule.postaddRule(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiRule.updateRule(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiRule.deleteRule(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
