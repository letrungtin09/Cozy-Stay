"use client";
import LayoutHouseOwner from "@/components/layoutHouseOwner";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import UserCurrent from "@/lib/currentUser";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const id = UserCurrent.GetUserId();
  const apiPlaces = `${localUrl}/api/places?idUser=${id}`;
  const [dataPlaces, setDataPlaces] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiPlaces);
        const dataRes = res.places;
        const sortData = dataRes.sort(function (a: any, b: any) {
          return b.id - a.id;
        });
        setDataPlaces(sortData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiPlaces]);

  const PlaceStatus = (status: any) => {
    if (status === 0) {
      return (
        <>
          <div className="trang-thai text-center text-color-green-2 font-bold">
            Chưa được thuê
          </div>
        </>
      );
    } else if (status === 1) {
      return (
        <>
          <div className="trang-thai text-center text-orange-600 font-bold">
            Đang được thuê
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="trang-thai text-center text-color-red-0 font-bold">
            Tắt nhận khách
          </div>
        </>
      );
    }
  };

  const deletePlace = async (id: any) => {
    const apiPlaces2 = `${localUrl}/api/places?id=${id}`;
    try {
      const res = await ApiFunctions.deleteData(apiPlaces2).then(() => {
        alert("Xóa thành công !");
        location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LayoutHouseOwner>
        <section className="houserholder-container section-padding">
          <div className="content">
            <div className="col-1">
              <h1 className="title font-bold">Nhà/Phòng cho thuê của bạn</h1>
              <Link
                className="btn-dk"
                href={`/houseOwner/addPlace?idUser=${id}`}
              >
                Thêm mới
              </Link>
            </div>
            <div className="col-2">
              <table className="table table-list-house table-hover">
                <thead>
                  <tr>
                    <th className="text-center" scope="col">
                      ID
                    </th>
                    <th className="text-center" scope="col">
                      ẢNH ĐẠI DIỆN
                    </th>
                    <th className="text-center" scope="col">
                      TÊN PHÒNG/NHÀ
                    </th>
                    <th className="text-center" scope="col">
                      TRẠNG THÁI CHO THUÊ
                    </th>
                    <th className="text-center" scope="col">
                      TRẠNG THÁI HỦY
                    </th>
                    <th className="text-center" scope="col">
                      TRẠNG THÁI XÉT DUYỆT
                    </th>
                    <th className="text-center" scope="col">
                      HÀNH ĐỘNG
                    </th>
                  </tr>
                </thead>
                <tbody className="s">
                  {dataPlaces.map((place) => (
                    <tr key={place.id}>
                      <td className="text-center" scope="row">
                        {place.id}
                      </td>
                      <td className="img-place-holder">
                        <a href="#">
                          <img src={`images/places/${place.image}`} alt="" />
                        </a>
                      </td>
                      <td className="text-center">
                        <a href="#">{place.title}</a>
                      </td>
                      <td className="">{PlaceStatus(place.status)}</td>
                      <td className="">
                        {place.statusCancel == 0 ? (
                          <>
                            <div className="trang-thai text-center text-color-green-2 font-bold">
                              Không
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="trang-thai text-center text-color-red-0 font-bold">
                              Báo hủy
                            </div>
                          </>
                        )}
                      </td>
                      <td className="">
                        {place.approveStatus == 0 ? (
                          <>
                            <div className="trang-thai text-center text-color-red-0 font-bold">
                              Chưa xét duyệt
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="trang-thai text-center text-color-green-2 font-bold">
                              Đã xét duyệt
                            </div>
                          </>
                        )}
                      </td>
                      <td className="text-center">
                        <div className="flex">
                          <button className="mr-[5px]">
                            <Link
                              className=" bg-blue-600 px-3 py-2.5 text-color-white-0 rounded-lg"
                              href={`/houseOwner/updatePlace?id=${place.id}&idUser=${id}&idPlace=${place.id}`}
                            >
                              Sửa
                            </Link>
                          </button>
                          <button
                            type="button"
                            className=" bg-red-600 px-3 py-2 text-color-white-0 rounded-lg"
                            onClick={() => deletePlace(place.id)}
                          >
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </LayoutHouseOwner>
    </>
  );
}
