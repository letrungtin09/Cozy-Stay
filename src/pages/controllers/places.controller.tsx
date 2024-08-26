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
      const longtitude = req.body.longtitude;
      const latitude = req.body.latitude;
      const description = req.body.description;
      const quantityBedRoom = req.body.quantityBedRoom;
      const quantityBath = req.body.quantityBath;
      const area = req.body.area;
      const title = req.body.title;
      const kindRoom = req.body.kindRoom;
      const image = req.body.image;
      const data = {
        address: address,
        price: price,
        quantityPeople: quantityPeople,
        image: image,
        longtitude: longtitude,
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

  // Lấy dựa theo 1 mảng id
  public getArrayPlaces = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // Lấy mảng idPlace từ query string và chuyển đổi nó thành mảng số nguyên
      const ids: number[] = JSON.parse(req.query.idPlaces as string);

      // Gọi hàm fetchPlacesByIds với mảng ids
      const resultPlaces = await Places.fetchPlacesByIds(ids);

      // Trả kết quả places dưới dạng JSON
      res.json({ places: resultPlaces });
    } catch (error) {
      // In lỗi ra console và trả về phản hồi lỗi
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Places" });
    }
  };

  // Lấy 1
  public getUserPlaces = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const numberId: number = parseInt(req.query.idUser as string);
      const resultPlaces = await Places.fetchUserPlaces(numberId);
      res.json({ places: resultPlaces });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Places" });
    }
  };
  // Lấy theo IDcate
  public getCatePlaces = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const cateId: number = parseInt(req.query.cateId as string);
      const resultPlaces = await Places.fetchIdCatePlaces(cateId);
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
      const longtitude = req.body.longtitude;
      const latitude = req.body.latitude;
      const description = req.body.description;
      const quantityBedRoom = req.body.quantityBedRoom;
      const quantityBath = req.body.quantityBath;
      const area = req.body.area;
      const title = req.body.title;
      const kindRoom = req.body.kindRoom;
      const image = req.body.image;
      const approveStatus = req.body.approveStatus;
      const data = {
        address: address,
        price: price,
        quantityPeople: quantityPeople,
        image: image,
        longtitude: longtitude,
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

  // Tìm kiếm
  public searchPlaces = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const keyword: any = req.query.keyword;
      const resultPlaces = await Places.searchPlaces(keyword);
      res.json({ places: resultPlaces });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu Places" });
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
