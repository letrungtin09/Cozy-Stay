import JoinRule from '../models/joinRule.models';
import { NextApiRequest, NextApiResponse } from 'next';
export default class ApiJoinRule {

    // Lấy tất
    public getAllJoinRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const resultJoinRule = await JoinRule.fetchAllJoinRule();
            res.json({ joinRule: resultJoinRule });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu JoinRule' });
        }
    };

    // Thêm
    public postaddJoinRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const idPlace = req.body.idPlace;
            const idDetailRule = req.body.idDetailRule;
            const note = req.body.note;
            const data = {
                idPlace: idPlace,
                idDetailRule: idDetailRule,
                note: note,
            };
            await JoinRule.addNewJoinRule(data);
            res.json({ "thongbao": "Đã thêm JoinRule" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi thêm dữ liệu JoinRule' });
        }
    };

    // Lấy 1
    public getJoinRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const resultJoinRule = await JoinRule.fetchOneJoinRule(numberId);
            res.json({ joinRule: resultJoinRule });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu JoinRule' });
        }
    };

    // Update
    public updateJoinRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const idPlace = req.body.idPlace;
            const idDetailRule = req.body.idDetailRule;
            const note = req.body.note;
            const data = {
                idPlace: idPlace,
                idDetailRule: idDetailRule,
                note: note,
            };
            await JoinRule.putUpDateJoinRule(data, numberId);
            res.json({ "thongbao": 'Đã cập nhật JoinRule' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi update dữ liệu JoinRule' });
        }
    };

    // Delete
    public deleteJoinRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            await JoinRule.delJoinRule(numberId);
            res.json({ "thongbao": 'Đã xóa thành công' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa dữ liệu JoinRule' });
        }
    };
}
