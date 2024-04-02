import DetailService from '../models/detailService.models';
import { NextApiRequest, NextApiResponse } from 'next';
export default class ApiDetailService {

    // Lấy tất
    public getAllDetailService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const resultDetailService = await DetailService.fetchAllDetailService();
            res.json({ detailService: resultDetailService });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu DetailService' });
        }
    };

    // Thêm
    public postaddDetailService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const idService = req.body.idService;
            const nameDetailService = req.body.nameDetailService;
            const icon = req.body.icon;
            const data = {
                idService: idService,
                nameDetailService: nameDetailService,
                icon: icon,
            };
            await DetailService.addNewDetailService(data);
            res.json({ "thongbao": "Đã thêm DetailService" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi thêm dữ liệu DetailService' });
        }
    };

    // Lấy 1
    public getDetailService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const resultDetailService = await DetailService.fetchOneDetailService(numberId);
            res.json({ detailService: resultDetailService });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu DetailService' });
        }
    };

    // Update
    public updateDetailService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const idService = req.body.idService;
            const nameDetailService = req.body.nameDetailService;
            const icon = req.body.icon;
            const data = {
                idService: idService,
                nameDetailService: nameDetailService,
                icon: icon,
            };
            await DetailService.putUpDateDetailService(data, numberId);
            res.json({ "thongbao": 'Đã cập nhật DetailService' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi update dữ liệu DetailService' });
        }
    };

    // Delete
    public deleteDetailService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            await DetailService.delDetailService(numberId);
            res.json({ "thongbao": 'Đã xóa thành công' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa dữ liệu DetailService' });
        }
    };
}
