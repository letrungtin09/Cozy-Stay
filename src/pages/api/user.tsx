import { NextApiRequest, NextApiResponse } from 'next';
import ApiUser from '../controllers/user.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiUser = new ApiUser();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiUser.getUser(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiUser.getAllUser(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiUser.postaddUser(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiUser.updateUser(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiUser.deleteUser(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
