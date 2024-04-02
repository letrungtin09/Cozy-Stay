import Notification from '../models/notification.models';
import { NextApiRequest, NextApiResponse } from 'next';
export default class ApiNotification {

    // Lấy tất
    public getAllNotification = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const resultNotification = await Notification.fetchAllNotification();
            res.json({ notification: resultNotification });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu Notification' });
        }
    };

    // Thêm
    public postaddNotification = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const content = req.body.content;
            const idSender = req.body.idSender;
            const title = req.body.title;
            const role = req.body.role;
            const data = {
                content: content,
                idSender: idSender,
                title: title,
                role: role
            };
            await Notification.addNewNotification(data);
            res.json({ "thongbao": "Đã thêm Notification" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi thêm dữ liệu Notification' });
        }
    };

    // Lấy 1
    public getNotification = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const resultNotification = await Notification.fetchOneNotification(numberId);
            res.json({ notification: resultNotification });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu Notification' });
        }
    };

    // Update
    public updateNotification = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const content = req.body.content;
            const idSender = req.body.idSender;
            const title = req.body.title;
            const role = req.body.role;
            const data = {
                content: content,
                idSender: idSender,
                title: title,
                role: role
            };
            await Notification.putUpDateNotification(data, numberId);
            res.json({ "thongbao": 'Đã cập nhật Notification' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi update dữ liệu Notification' });
        }
    };

    // Delete
    public deleteNotification = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            await Notification.delNotification(numberId);
            res.json({ "thongbao": 'Đã xóa thành công' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa dữ liệu Notification' });
        }
    };
}
