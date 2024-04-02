import Messenger from '../models/messenger.models';
import { NextApiRequest, NextApiResponse } from 'next';
export default class ApiMessenger {

    // Lấy tất
    public getAllMessenger = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const resultMessenger = await Messenger.fetchAllMessenger();
            res.json({ messenger: resultMessenger });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu Messenger' });
        }
    };

    // Thêm
    public postaddMessenger = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const content = req.body.content;
            const idUser = req.body.idUser;
            const idPartner = req.body.idPartner;
            const room = req.body.room;
            const sender = req.body.sender;
            const data = {
                content: content,
                idUser: idUser,
                idPartner: idPartner,
                room: room,
                sender: sender
            };
            await Messenger.addNewMessenger(data);
            res.json({ "thongbao": "Đã thêm Messenger" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi thêm dữ liệu Messenger' });
        }
    };

    // Lấy 1
    public getMessenger = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const resultMessenger = await Messenger.fetchOneMessenger(numberId);
            res.json({ messenger: resultMessenger });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu Messenger' });
        }
    };

    // Update
    public updateMessenger = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const content = req.body.content;
            const idUser = req.body.idUser;
            const idPartner = req.body.idPartner;
            const room = req.body.room;
            const sender = req.body.sender;
            const data = {
                content: content,
                idUser: idUser,
                idPartner: idPartner,
                room: room,
                sender: sender
            };
            await Messenger.putUpDateMessenger(data, numberId);
            res.json({ "thongbao": 'Đã cập nhật Messenger' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi update dữ liệu Messenger' });
        }
    };

    // Delete
    public deleteMessenger = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            await Messenger.delMessenger(numberId);
            res.json({ "thongbao": 'Đã xóa thành công' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa dữ liệu Messenger' });
        }
    };
}
