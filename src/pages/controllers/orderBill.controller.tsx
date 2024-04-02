import OrderBill from '../models/orderBill.models';
import { NextApiRequest, NextApiResponse } from 'next';
export default class ApiOrderBill {

    // Lấy tất
    public getAllOrderBill = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const resultOrderBill = await OrderBill.fetchAllOrderBill();
            res.json({ orderBill: resultOrderBill });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu OrderBill' });
        }
    };

    // Thêm
    public postaddOrderBill = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const dateStart = req.body.dateStart;
            const dateEnd = req.body.dateEnd;
            const status = req.body.status;
            const serviceFee = req.body.serviceFee;
            const total = req.body.total;
            const idPlace = req.body.idPlace;
            const idUser = req.body.idUser;
            const imageBefore = req.body.imageBefore;
            const code = req.body.code;
            const data = {
                dateStart: dateStart,
                dateEnd: dateEnd,
                status: status,
                serviceFee: serviceFee,
                total: total,
                idPlace: idPlace,
                idUser: idUser,
                imageBefore: imageBefore,
                code: code
            };
            await OrderBill.addNewOrderBill(data);
            res.json({ "thongbao": "Đã thêm OrderBill" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi thêm dữ liệu OrderBill' });
        }
    };

    // Lấy 1
    public getOrderBill = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const resultOrderBill = await OrderBill.fetchOneOrderBill(numberId);
            res.json({ orderBill: resultOrderBill });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu OrderBill' });
        }
    };

    // Update
    public updateOrderBill = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const dateStart = req.body.dateStart;
            const dateEnd = req.body.dateEnd;
            const status = req.body.status;
            const serviceFee = req.body.serviceFee;
            const total = req.body.total;
            const idPlace = req.body.idPlace;
            const idUser = req.body.idUser;
            const imageBefore = req.body.imageBefore;
            const code = req.body.code;
            const data = {
                dateStart: dateStart,
                dateEnd: dateEnd,
                status: status,
                serviceFee: serviceFee,
                total: total,
                idPlace: idPlace,
                idUser: idUser,
                imageBefore: imageBefore,
                code: code
            };
            await OrderBill.putUpDateOrderBill(data, numberId);
            res.json({ "thongbao": 'Đã cập nhật OrderBill' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi update dữ liệu OrderBill' });
        }
    };

    // Delete
    public deleteOrderBill = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            await OrderBill.delOrderBill(numberId);
            res.json({ "thongbao": 'Đã xóa thành công' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa dữ liệu OrderBill' });
        }
    };
}
