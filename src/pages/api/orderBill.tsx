import { NextApiRequest, NextApiResponse } from 'next';
import ApiOrderBill from '../controllers/orderBill.controller';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const apiOrderBill = new ApiOrderBill();

    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                await apiOrderBill.getOrderBill(req, res);
            } else {
                // Lấy tất cả các sản phẩm
                await apiOrderBill.getAllOrderBill(req, res);
            }
            break;
        case 'POST':
            // Thêm một sản phẩm mới
            await apiOrderBill.postaddOrderBill(req, res);
            break;
        case 'PUT':
            // Cập nhật một sản phẩm
            await apiOrderBill.updateOrderBill(req, res);
            break;
        case 'DELETE':
            // Xóa một sản phẩm
            await apiOrderBill.deleteOrderBill(req, res);
            break;
        default:
            res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
            break;
    }
};

export default handler;
