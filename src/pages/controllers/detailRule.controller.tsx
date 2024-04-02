import DetailRule from '../models/detailRule.models';
import { NextApiRequest, NextApiResponse } from 'next';
export default class ApiDetailRule {

    // Lấy tất
    public getAllDetailRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const resultDetailRule = await DetailRule.fetchAllDetailRule();
            res.json({ detailRule: resultDetailRule });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu DetailRule' });
        }
    };

    // Thêm
    public postaddDetailRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const idRule = req.body.idRule;
            const nameDetailRule = req.body.nameDetailRule;
            const icon = req.body.icon;
            const data = {
                idRule: idRule,
                nameDetailRule: nameDetailRule,
                icon: icon,
            };
            await DetailRule.addNewDetailRule(data);
            res.json({ "thongbao": "Đã thêm DetailRule" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi thêm dữ liệu DetailRule' });
        }
    };

    // Lấy 1
    public getDetailRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const resultDetailRule = await DetailRule.fetchOneDetailRule(numberId);
            res.json({ detailRule: resultDetailRule });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu DetailRule' });
        }
    };

    // Update
    public updateDetailRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const idRule = req.body.idRule;
            const nameDetailRule = req.body.nameDetailRule;
            const icon = req.body.icon;
            const data = {
                idRule: idRule,
                nameDetailRule: nameDetailRule,
                icon: icon,
            };
            await DetailRule.putUpDateDetailRule(data, numberId);
            res.json({ "thongbao": 'Đã cập nhật DetailRule' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi update dữ liệu DetailRule' });
        }
    };

    // Delete
    public deleteDetailRule = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            await DetailRule.delDetailRule(numberId);
            res.json({ "thongbao": 'Đã xóa thành công' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa dữ liệu DetailRule' });
        }
    };
}
