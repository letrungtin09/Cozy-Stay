import Partner from '../models/partner.models';
import { NextApiRequest, NextApiResponse } from 'next';
export default class ApiPartner {

    // Lấy tất
    public getAllPartner = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const resultPartner = await Partner.fetchAllPartner();
            res.json({ partner: resultPartner });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu Partner' });
        }
    };

    // Thêm
    public postaddPartner = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const userName = req.body.userName;
            const address = req.body.address;
            const info = req.body.info;
            const license = req.body.license;
            const email = req.body.email;
            const password = req.body.password;
            const phoneNumber = req.body.phoneNumber;
            const language = req.body.language;
            const data = {
                userName: userName,
                address: address,
                info: info,
                license: license,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                language: language
            };
            await Partner.addNewPartner(data);
            res.json({ "thongbao": "Đã thêm Partner" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi thêm dữ liệu Partner' });
        }
    };

    // Lấy 1
    public getPartner = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const resultPartner = await Partner.fetchOnePartner(numberId);
            res.json({ partner: resultPartner });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu Partner' });
        }
    };

    // Update
    public updatePartner = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const userName = req.body.userName;
            const address = req.body.address;
            const info = req.body.info;
            const license = req.body.license;
            const email = req.body.email;
            const password = req.body.password;
            const phoneNumber = req.body.phoneNumber;
            const language = req.body.language;
            const data = {
                userName: userName,
                address: address,
                info: info,
                license: license,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                language: language
            };
            await Partner.putUpDatePartner(data, numberId);
            res.json({ "thongbao": 'Đã cập nhật Partner' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi update dữ liệu Partner' });
        }
    };

    // Delete
    public deletePartner = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            await Partner.delPartner(numberId);
            res.json({ "thongbao": 'Đã xóa thành công' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa dữ liệu Partner' });
        }
    };
}
