import JoinService from '../models/joinService.models';
import { NextApiRequest, NextApiResponse } from 'next';
export default class ApiJoinService {

    // Lấy tất
    public getAllJoinService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const resultJoinService = await JoinService.fetchAllJoinService();
            res.json({ joinService: resultJoinService });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu JoinService' });
        }
    };

    // Thêm
    public postaddJoinService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const idPlace = req.body.idPlace;
            const idDetailService = req.body.idDetailService;
            const note = req.body.note;
            const data = {
                idPlace: idPlace,
                idDetailService: idDetailService,
                note: note,
            };
            await JoinService.addNewJoinService(data);
            res.json({ "thongbao": "Đã thêm JoinService" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi thêm dữ liệu JoinService' });
        }
    };

    // Lấy 1
    public getJoinService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const resultJoinService = await JoinService.fetchOneJoinService(numberId);
            res.json({ joinService: resultJoinService });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu JoinService' });
        }
    };

    // Update
    public updateJoinService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const idPlace = req.body.idPlace;
            const idDetailService = req.body.idDetailService;
            const note = req.body.note;
            const data = {
                idPlace: idPlace,
                idDetailService: idDetailService,
                note: note,
            };
            await JoinService.putUpDateJoinService(data, numberId);
            res.json({ "thongbao": 'Đã cập nhật JoinService' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi update dữ liệu JoinService' });
        }
    };

    // Delete
    public deleteJoinService = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            await JoinService.delJoinService(numberId);
            res.json({ "thongbao": 'Đã xóa thành công' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa dữ liệu JoinService' });
        }
    };
}
