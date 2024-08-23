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
      const rentalMonth = req.body.rentalMonth;
      const total = req.body.total;
      const serviceFee = req.body.serviceFee;
      const code = req.body.code;
      const idPlace = req.body.idPlace;
      const idUser = req.body.idUser;
      const data = {
        dateStart: dateStart,
        dateEnd: dateEnd,
        rentalMonth: rentalMonth,
        total: total,
        serviceFee: serviceFee,
        code: code,
        idPlace: idPlace,
        idUser: idUser,
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

  // lấy places theo iduser vs idplace
  public getBillByIdUserAndIdPlaces = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const idPlace = parseInt(req.query.idPlace as string);
      const idUser = parseInt(req.query.idUser as string);
      const resultBill = await Bill.fetchIduserAndIdPlaces(idPlace, idUser);
      res.json({ bill: resultBill });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Bill" });
    }
  };

  // Change status
  public changeStatusBill = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const status = req.body.status;
      const data = { status: status };
      await Bill.changeStatusBill(data, numberId);
      res.json({ thongbao: "Đã thay đổi trạng thái Bill" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi thay đổi trạng thái Bill" });
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
