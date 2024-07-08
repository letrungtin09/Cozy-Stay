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
      const idUser = req.body.idUser;
      const idCategory = req.body.idCategory;
      const longitude = req.body.longitude;
      const latitude = req.body.latitude;
      const description = req.body.description;
      const quantityBedRoom = req.body.quantityBedRoom;
      const quantityBath = req.body.quantityBath;
      const area = req.body.area;
      const title = req.body.title;
      const kindRoom = req.body.kindRoom;
      const image1 = req.body.image1;
      const image2 = req.body.image2;
      const image3 = req.body.image3;
      const image4 = req.body.image4;
      const image5 = req.body.image5;
      const data = {
        address: address,
        price: price,
        quantityPeople: quantityPeople,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        image5: image5,
        longitude: longitude,
        latitude: latitude,
        description: description,
        quantityBedRoom: quantityBedRoom,
        quantityBath: quantityBath,
        area: area,
        kindRoom: kindRoom,
        title: title,
        idUser: idUser,
        idCategory: idCategory,
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
      const idUser = req.body.idUser;
      const idCategory = req.body.idCategory;
      const longitude = req.body.longitude;
      const latitude = req.body.latitude;
      const description = req.body.description;
      const quantityBedRoom = req.body.quantityBedRoom;
      const quantityBath = req.body.quantityBath;
      const area = req.body.area;
      const title = req.body.title;
      const kindRoom = req.body.kindRoom;
      const image1 = req.body.image1;
      const image2 = req.body.image2;
      const image3 = req.body.image3;
      const image4 = req.body.image4;
      const image5 = req.body.image5;
      const approveStatus = req.body.approveStatus;
      const data = {
        address: address,
        price: price,
        quantityPeople: quantityPeople,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        image5: image5,
        longitude: longitude,
        latitude: latitude,
        description: description,
        quantityBedRoom: quantityBedRoom,
        quantityBath: quantityBath,
        area: area,
        kindRoom: kindRoom,
        title: title,
        approveStatus: approveStatus,
        idUser: idUser,
        idCategory: idCategory,
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

  // Delete
  public deletePlaces = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.id as string);
      await Places.delPlaces(numberId);
      res.json({ thongbao: "Đã xóa thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi xóa dữ liệu Places" });
    }
  };
}
