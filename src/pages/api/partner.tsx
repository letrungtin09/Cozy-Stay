import { NextApiRequest, NextApiResponse } from 'next';
import ApiPartner from '../controllers/partner.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiPartner = new ApiPartner();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiPartner.getPartner(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiPartner.getAllPartner(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiPartner.postaddPartner(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiPartner.updatePartner(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiPartner.deletePartner(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
