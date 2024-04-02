import { NextApiRequest, NextApiResponse } from 'next';
import ApiPlaces from '../controllers/places.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiPlaces = new ApiPlaces();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiPlaces.getPlaces(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiPlaces.getAllPlaces(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiPlaces.postaddPlaces(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiPlaces.updatePlaces(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiPlaces.deletePlaces(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
