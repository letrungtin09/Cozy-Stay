"use client";
import LayoutCustomer from "@/components/layoutCustomer";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import UserCurrent from "@/lib/currentUser";
import RefundGenerate from "@/lib/refund";
import {
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const idUser = UserCurrent.GetUserId();
  const emailCurentUser = UserCurrent.GetUserEmail();
  const apiBill = `${localUrl}/api/bill?idUserAll=${idUser}`;
  const [idPlaces, setIdPlaces] = useState<number[]>([]);
  const [idPlacesAndIdbill, setIdPlacesAndIdbill] = useState<number[]>([]);
  const [sttPlaces, setSttPlaces] = useState<number[]>([]);
  const [dataPlaces, setDataPlaces] = useState<any>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchDataBill = async () => {
      try {
        const res = await ApiFunctions.getData(apiBill);
        if (res?.bill?.length > 0) {
          const idPlaceArray = res.bill.map((item: any) => item.idPlace); // Lấy idPlace từ res.bill

          const idPlaceStt = res.bill.reduce((acc: Record<number, number>, item: any) => {
            acc[item.idPlace] = item.status;
            return acc;
          }, {});

          const idPlaceWithBill = res.bill.reduce((acc: Record<number, number>, item: any) => {
            acc[item.idPlace] = item.id;
            return acc;
          }, {});
          setIdPlacesAndIdbill(idPlaceWithBill)
          setSttPlaces(idPlaceStt);
          setIdPlaces(idPlaceArray); // Lưu vào state
        } else {
          console.warn("No bill data found");
        }
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };

    fetchDataBill();
  }, [apiBill]);
  useEffect(() => {
    console.log(sttPlaces)
  }, [sttPlaces]);
  useEffect(() => {
    // Kiểm tra nếu mảng idPlaces có giá trị và các giá trị là số nguyên hợp lệ
    if (Array.isArray(idPlaces) && idPlaces.length > 0 && idPlaces.every(id => Number.isInteger(id))) {
      const apiPlaces = `${localUrl}/api/places?idPlaces=${JSON.stringify(idPlaces)}`;

      const fetchDataPlaces = async () => {
        try {
          const res = await ApiFunctions.getData(apiPlaces);
          setDataPlaces(res.places)
        } catch (error) {
          console.error("Lỗi khi gọi API:", error);
        }
      };
      fetchDataPlaces();
    }
  }, [idPlaces]);

  if (!dataPlaces) {
    return <div>Loading...</div>; // Hiển thị khi dữ liệu chưa tải xong
  }

  return (
    <>
      <LayoutCustomer>
        <div className="houseOwnerInfo pt-[140px] px-[100px] pb-14 d-flex">
          <div className="houseOwnerInfo__places">
            <div className="text-[20px] font-bold mb-[20px]">
              Phòng/nhà của bạn
            </div>
            <div className="d-flex flex-wrap gap-y-[30px]">
              {dataPlaces.map((place: any, index: number) => {
                let imageList = []
                if (place.image) {
                  imageList = JSON.parse(place.image)
                }
                return (
                  <Link
                    key={index}
                    href={{
                      pathname: "/detailPlace",
                      query: { id: place.id },
                    }}
                    className="relative cursor-pointer flex w-[300px] mr-[18px] max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
                  >
                    <div
                      className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                      <Image
                        src={`/images/places/${imageList[0]}`}
                        alt="ui/ux review check"
                        width={1000}
                        height={1000}
                        className="h-[200px] object-cover"
                      />
                      <div
                        className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                      </div>
                    </div>
                    <div className="py-3 px-6">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                          {place.title}
                        </h5>
                      </div>
                      <div>
                        {/* Giới hạn văn bản hiển thị khi chưa mở rộng */}
                        <p
                          className={`block font-sans text-base antialiased font-light leading-relaxed text-gray-700 ${expandedIndex === index ? '' : 'line-clamp-2'}`}
                        >
                          {place.description}
                        </p>

                        {/* Nút "Xem tất cả" hoặc "Thu gọn" */}
                        <button
                          onClick={(e) => {
                            e.preventDefault(); // Ngăn hành vi mặc định
                            e.stopPropagation(); // Ngăn chặn sự kiện click lan truyền
                            toggleExpand(index); // Thay đổi trạng thái hiển thị văn bản
                          }}
                          className="text-blue-500 hover:text-blue-700 focus:outline-none"
                        >
                          {expandedIndex === index ? 'Thu gọn' : 'Xem tất cả'}
                        </button>
                      </div>
                    </div>
                    <div className="p-6 pt-3">
                      {sttPlaces[place.id] === 0 ? <button
                        className="block w-full select-none rounded-lg bg-color-red-button py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault(); // Ngăn hành vi mặc định
                          e.stopPropagation(); // Ngăn chặn sự kiện click lan truyền
                          RefundGenerate.canCelBill(place.id, idPlacesAndIdbill, emailCurentUser);
                        }}
                      >
                        Hủy đặt phòng
                      </button> : <button
                        className="block w-full select-none rounded-lg bg-color-green-0 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        Đến trang chi tiết <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                      }
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </LayoutCustomer>
    </>
  );
}
