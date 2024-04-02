import WishList from '../models/wishList.models';
import { NextApiRequest, NextApiResponse } from 'next';
export default class ApiWishList {

    // Lấy tất
    public getAllWishList = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const resultWishList = await WishList.fetchAllWishList();
            res.json({ wishList: resultWishList });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu WishList' });
        }
    };

    // Thêm
    public postaddWishList = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const idUser = req.body.idUser;
            const idPlace = req.body.idPlace;
            const data = {
                idUser: idUser,
                idPlace: idPlace
            };
            await WishList.addNewWishList(data);
            res.json({ "thongbao": "Đã thêm WishList" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi thêm dữ liệu WishList' });
        }
    };

    // Lấy 1
    public getWishList = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const resultWishList = await WishList.fetchOneWishList(numberId);
            res.json({ wishList: resultWishList });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu WishList' });
        }
    };

    // Update
    public updateWishList = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const idUser = req.body.idUser;
            const idPlace = req.body.idPlace;
            const data = {
                idUser: idUser,
                idPlace: idPlace
            };
            await WishList.putUpDateWishList(data, numberId);
            res.json({ "thongbao": 'Đã cập nhật WishList' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi update dữ liệu WishList' });
        }
    };

    // Delete
    public deleteWishList = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            await WishList.delWishList(numberId);
            res.json({ "thongbao": 'Đã xóa thành công' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa dữ liệu WishList' });
        }
    };
}
