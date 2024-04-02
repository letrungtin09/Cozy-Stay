import { NextApiRequest, NextApiResponse } from 'next';
import ApiWishList from '../controllers/wishList.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiWishList = new ApiWishList();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiWishList.getWishList(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiWishList.getAllWishList(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiWishList.postaddWishList(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiWishList.updateWishList(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiWishList.deleteWishList(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
