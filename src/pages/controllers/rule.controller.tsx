import Rule from '../models/rule.models';
import { NextApiRequest, NextApiResponse } from 'next';
export default class ApiRule {

    // Lấy tất
    public getAllRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const resultRule = await Rule.fetchAllRule();
            res.json({ rule: resultRule });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu Rule' });
        }
    };

    // Thêm
    public postaddRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const nameRule = req.body.nameRule;
            const data = {
                nameRule: nameRule
            };
            await Rule.addNewRule(data);
            res.json({ "thongbao": "Đã thêm Rule" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi thêm dữ liệu Rule' });
        }
    };

    // Lấy 1
    public getRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const resultRule = await Rule.fetchOneRule(numberId);
            res.json({ rule: resultRule });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu Rule' });
        }
    };

    // Update
    public updateRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const nameRule = req.body.nameRule;
            const data = {
                nameRule: nameRule
            };
            await Rule.putUpDateRule(data, numberId);
            res.json({ "thongbao": 'Đã cập nhật Rule' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi update dữ liệu Rule' });
        }
    };

    // Delete
    public deleteRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            await Rule.delRule(numberId);
            res.json({ "thongbao": 'Đã xóa thành công' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa dữ liệu Rule' });
        }
    };
}
