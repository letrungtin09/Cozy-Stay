import { NextApiRequest, NextApiResponse } from 'next';
import ApiReview from '../controllers/review.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiReview = new ApiReview();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiReview.getReview(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiReview.getAllReview(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiReview.postaddReview(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiReview.updateReview(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiReview.deleteReview(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
