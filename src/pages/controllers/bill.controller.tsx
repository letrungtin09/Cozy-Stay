import Bill from "../models/bill.models";
import { NextApiRequest, NextApiResponse } from "next";
export default class ApiBill {
  // Lấy tất
  public getAllBill = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const resultBill = await Bill.fetchAllBill();
      res.json({ bill: resultBill });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Bill" });
    }
  };

  // Thêm
  public postaddBill = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const dateStart = req.body.dateStart;
      const dateEnd = req.body.dateEnd;
      const status = req.body.status;
      const serviceFee = req.body.serviceFee;
      const total = req.body.total;
      const idPlace = req.body.idPlace;
      const idUser = req.body.idUser;
      const imageBefore = req.body.imageBefore;
      const code = req.body.code;
      const data = {
        dateStart: dateStart,
        dateEnd: dateEnd,
        status: status,
        serviceFee: serviceFee,
        total: total,
        idPlace: idPlace,
        idUser: idUser,
        imageBefore: imageBefore,
        code: code,
      };
      await Bill.addNewBill(data);
      res.json({ thongbao: "Đã thêm Bill" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi thêm dữ liệu Bill" });
    }
  };

  // Lấy 1
  public getBill = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const resultBill = await Bill.fetchOneBill(numberId);
      res.json({ bill: resultBill });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Bill" });
    }
  };

  // Update
  public updateBill = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const dateStart = req.body.dateStart;
      const dateEnd = req.body.dateEnd;
      const status = req.body.status;
      const serviceFee = req.body.serviceFee;
      const total = req.body.total;
      const idPlace = req.body.idPlace;
      const idUser = req.body.idUser;
      const imageBefore = req.body.imageBefore;
      const code = req.body.code;
      const data = {
        dateStart: dateStart,
        dateEnd: dateEnd,
        status: status,
        serviceFee: serviceFee,
        total: total,
        idPlace: idPlace,
        idUser: idUser,
        imageBefore: imageBefore,
        code: code,
      };
      await Bill.putUpDateBill(data, numberId);
      res.json({ thongbao: "Đã cập nhật Bill" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi update dữ liệu Bill" });
    }
  };

  // Delete
  public deleteBill = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      await Bill.delBill(numberId);
      res.json({ thongbao: "Đã xóa thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi xóa dữ liệu Bill" });
    }
  };
}
