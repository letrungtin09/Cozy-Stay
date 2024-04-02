import Review from '../models/review.models';
import { NextApiRequest, NextApiResponse } from 'next';
export default class ApiReview {

    // Lấy tất
    public getAllReview = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const resultReview = await Review.fetchAllReview();
            res.json({ review: resultReview });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu Review' });
        }
    };

    // Thêm
    public postaddReview = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const idUser = req.body.idUser;
            const content = req.body.content;
            const star = req.body.star;
            const idPlace = req.body.idPlace;
            const data = {
                idUser: idUser,
                content: content,
                star: star,
                idPlace: idPlace,
            };
            await Review.addNewReview(data);
            res.json({ "thongbao": "Đã thêm Review" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi thêm dữ liệu Review' });
        }
    };

    // Lấy 1
    public getReview = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const resultReview = await Review.fetchOneReview(numberId);
            res.json({ review: resultReview });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu Review' });
        }
    };

    // Update
    public updateReview = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const idUser = req.body.idUser;
            const content = req.body.content;
            const star = req.body.star;
            const idPlace = req.body.idPlace;
            const data = {
                idUser: idUser,
                content: content,
                star: star,
                idPlace: idPlace,
            };
            await Review.putUpDateReview(data, numberId);
            res.json({ "thongbao": 'Đã cập nhật Review' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi update dữ liệu Review' });
        }
    };

    // Delete
    public deleteReview = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            await Review.delReview(numberId);
            res.json({ "thongbao": 'Đã xóa thành công' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa dữ liệu Review' });
        }
    };
}
