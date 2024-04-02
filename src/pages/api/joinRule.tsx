import { NextApiRequest, NextApiResponse } from 'next';
import ApiJoinRule from '../controllers/joinRule.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiJoinRule = new ApiJoinRule();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiJoinRule.getJoinRule(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiJoinRule.getAllJoinRule(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiJoinRule.postaddJoinRule(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiJoinRule.updateJoinRule(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiJoinRule.deleteJoinRule(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
