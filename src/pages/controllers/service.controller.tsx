import Service from '../models/service.models';
import { NextApiRequest, NextApiResponse } from 'next';
export default class ApiService {

    // Lấy tất
    public getAllService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const resultService = await Service.fetchAllService();
            res.json({ service: resultService });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu Service' });
        }
    };

    // Thêm
    public postaddService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const nameService = req.body.nameService;
            const data = {
                nameService: nameService
            };
            await Service.addNewService(data);
            res.json({ "thongbao": "Đã thêm Service" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi thêm dữ liệu Service' });
        }
    };

    // Lấy 1
    public getService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const resultService = await Service.fetchOneService(numberId);
            res.json({ service: resultService });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu Service' });
        }
    };

    // Update
    public updateService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const nameService = req.body.nameService;
            const data = {
                nameService: nameService
            };
            await Service.putUpDateService(data, numberId);
            res.json({ "thongbao": 'Đã cập nhật Service' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi update dữ liệu Service' });
        }
    };

    // Delete
    public deleteService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            await Service.delService(numberId);
            res.json({ "thongbao": 'Đã xóa thành công' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa dữ liệu Service' });
        }
    };
}
