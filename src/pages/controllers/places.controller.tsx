import Places from "../models/places.models";
import { NextApiRequest, NextApiResponse } from "next";
export default class ApiPlaces {
  // Lấy tất
  public getAllPlaces = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const resultPlaces = await Places.fetchAllPlaces();
      res.json({ places: resultPlaces });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Places" });
    }
  };

  // Thêm
  public postaddPlaces = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const address = req.body.address;
      const price = req.body.price;
      const quantityPeople = req.body.quantityPeople;
      const idPartner = req.body.idPartner;
      const idCategory = req.body.idCategory;
      const longitude = req.body.longitude;
      const latitude = req.body.latitude;
      const discount = req.body.discount;
      const status = req.body.status;
      const longDescription = req.body.longDescription;
      const quantityBedRoom = req.body.quantityBedRoom;
      const quantityBath = req.body.quantityBath;
      const quantityBed = req.body.quantityBed;
      const title = req.body.title;
      const reservationKind = req.body.reservationKind;
      const kindroom = req.body.kindroom;
      const image = req.body.image;
      const data = {
        address: address,
        price: price,
        quantityPeople: quantityPeople,
        idPartner: idPartner,
        idCategory: idCategory,
        longitude: longitude,
        latitude: latitude,
        discount: discount,
        status: status,
        longDescription: longDescription,
        quantityBedRoom: quantityBedRoom,
        quantityBath: quantityBath,
        quantityBed: quantityBed,
        title: title,
        reservationKind: reservationKind,
        kindroom: kindroom,
        image: image,
      };
      await Places.addNewPlaces(data);
      res.json({ thongbao: "Đã thêm Places" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi thêm dữ liệu Places" });
    }
  };

  // Lấy 1
  public getPlaces = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const resultPlaces = await Places.fetchOnePlaces(numberId);
      res.json({ places: resultPlaces });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Places" });
    }
  };

  // Update
  public updatePlaces = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      const address = req.body.address;
      const price = req.body.price;
      const quantityPeople = req.body.quantityPeople;
      const idPartner = req.body.idPartner;
      const idCategory = req.body.idCategory;
      const longitude = req.body.longitude;
      const latitude = req.body.latitude;
      const discount = req.body.discount;
      const status = req.body.status;
      const longDescription = req.body.longDescription;
      const quantityBedRoom = req.body.quantityBedRoom;
      const quantityBath = req.body.quantityBath;
      const quantityBed = req.body.quantityBed;
      const title = req.body.title;
      const reservationKind = req.body.reservationKind;
      const kindroom = req.body.kindroom;
      const image = req.body.image;
      const approveStatus = req.body.approveStatus;
      const data = {
        address: address,
        price: price,
        quantityPeople: quantityPeople,
        idPartner: idPartner,
        idCategory: idCategory,
        longitude: longitude,
        latitude: latitude,
        discount: discount,
        status: status,
        longDescription: longDescription,
        quantityBedRoom: quantityBedRoom,
        quantityBath: quantityBath,
        quantityBed: quantityBed,
        title: title,
        reservationKind: reservationKind,
        kindroom: kindroom,
        image: image,
        approveStatus: approveStatus,
      };
      await Places.putUpDatePlaces(data, numberId);
      res.json({ thongbao: "Đã cập nhật Places" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Đã xảy ra lỗi khi update dữ liệu Places" });
    }
  };

    // Update
    public updatePlaces = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            const address = req.body.address;
            const price = req.body.price;
            const quantityPeople = req.body.quantityPeople;
            const idPartner = req.body.idPartner;
            const idCategory = req.body.idCategory;
            const longitude = req.body.longitude;
            const latitude = req.body.latitude;
            const discount = req.body.discount;
            const status = req.body.status;
            const longDescription = req.body.longDescription;
            const quantityBedRoom = req.body.quantityBedRoom;
            const quantityBath = req.body.quantityBath;
            const quantityBed = req.body.quantityBed;
            const title = req.body.title;
            const reservationKind = req.body.reservationKind;
            const kindroom = req.body.kindroom;
            const image = req.body.image;
            const approveStatus = req.body.approveStatus;
            const data = {
                address: address,
                price: price,
                quantityPeople: quantityPeople,
                idPartner: idPartner,
                idCategory: idCategory,
                longitude: longitude,
                latitude: latitude,
                discount: discount,
                status: status,
                longDescription: longDescription,
                quantityBedRoom: quantityBedRoom,
                quantityBath: quantityBath,
                quantityBed: quantityBed,
                title: title,
                reservationKind: reservationKind,
                kindroom: kindroom,
                image: image,
                approveStatus: approveStatus
            };
            await Places.putUpDatePlaces(data, numberId);
            res.json({ "thongbao": 'Đã cập nhật Places' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi update dữ liệu Places' });
        }
    };

    // Delete
    public deletePlaces = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const numberId: number = parseInt(req.query.id as string);
            await Places.delPlaces(numberId);
            res.json({ "thongbao": 'Đã xóa thành công' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa dữ liệu Places' });
        }
    };
}
