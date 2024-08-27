"use client";
import LayoutHouseOwner from "@/components/layoutHouseOwner";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import UserCurrent from "@/lib/currentUser";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
interface ImageData {
  id: string;
  link: string;
  name: string;
  status: string;
  view: string;
}

export default function Home() {
  const id = UserCurrent.GetUserId();
  const apiCategory = `${localUrl}/api/category`;
  const apiPlace = `${localUrl}/api/places`;
  const [dataCategory, setDataCategory] = useState<any[]>([]);
  const [dataImage, setDataImage] = useState<string>();
  let postData: { name: string; type: string; data: string }[] = [];
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputAddressRef = useRef<HTMLInputElement>(null);
  const inputPriceRef = useRef<HTMLInputElement>(null);
  const inputImgRef = useRef<HTMLInputElement>(null);
  const inputIdCategoryRef = useRef<HTMLSelectElement>(null);
  const inputKindRoomRef = useRef<HTMLSelectElement>(null);
  const inputQuantityPeopleRef = useRef<HTMLInputElement>(null);
  const inputQuantityBathPeopleRef = useRef<HTMLInputElement>(null);
  const inputQuantityBedRoomPeopleRef = useRef<HTMLInputElement>(null);
  const inputAreaRef = useRef<HTMLInputElement>(null);
  const inputDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const inputLongitudePeopleRef = useRef<HTMLInputElement>(null);
  const inputLatitudePeopleRef = useRef<HTMLInputElement>(null);

  const generateUniqueFilename = (originalName: string) => {
    const timestamp = Date.now();
    const extension = originalName.split(".").pop();
    return `${timestamp}.${extension}`;
  };

  const handleFileChange = () => {
    if (inputImgRef.current?.files) {
      const fileList = inputImgRef.current.files;
      const filesArray = Array.from(fileList);
      filesArray.forEach((file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", () => {
          if (typeof reader.result === "string") {
            const data = reader.result.split(",")[1];
            postData.push({
              name: generateUniqueFilename(file.name),
              type: file.type,
              data: data,
            });
          }
        });
      });
    }
  };

  const postFile = async (postData: any) => {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwgpiLav-SfV7E-O-GhYq-DAGYdhWUP5XuMD-7rDLcv3wi97Nz8iUwhRW01pg0ZVidw/exec",
        {
          method: "POST",
          body: JSON.stringify(postData),
        }
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const links = data.map((item: ImageData) => item.link);
        const linksJson = JSON.stringify(links);
        setDataImage(linksJson);
      }
    } catch (error) {
      alert("Vui lòng thử lại");
    }
  };

  useEffect(() => {
    const fetchDataCate = async () => {
      try {
        const res = await ApiFunctions.getData(apiCategory);
        setDataCategory(res.cate);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataCate();
  }, [apiCategory]);

  const router = useRouter();

  useEffect(() => {
    const createPlace = async () => {
      if (dataImage) {
        const placeNew = {
          address: inputAddressRef.current?.value,
          price: inputPriceRef.current?.value,
          quantityPeople: inputQuantityPeopleRef.current?.value,
          image: dataImage,
          longtitude: inputLongitudePeopleRef.current?.value,
          latitude: inputLatitudePeopleRef.current?.value,
          description: inputDescriptionRef.current?.value,
          quantityBedRoom: inputQuantityBedRoomPeopleRef.current?.value,
          quantityBath: inputQuantityBathPeopleRef.current?.value,
          area: inputAreaRef.current?.value,
          kindRoom: inputKindRoomRef.current?.value,
          title: inputTitleRef.current?.value,
          idUser: id,
          idCategory: inputIdCategoryRef.current?.value,
        };
        console.log(dataImage);
        console.log(placeNew);

        try {
          await ApiFunctions.postData(apiPlace, placeNew);
          alert("Thêm mới thành công !");
          router.push(`/houseOwner/managePlaces?idUser=${id}`);
        } catch (error) {
          console.error(error);
        }
      }
    };

    createPlace();
  }, [dataImage]);

  const addDataPlace = async (e: any) => {
    e.preventDefault();
    await postFile(postData);
  };

  return (
    <>
      <LayoutHouseOwner>
        <div className="pt-24 pb-10 px-44">
          <section className="formInsertEdit">
            <div className="formInsertEdit__title">
              <h1>THÊM MỚI CHỖ CHO THUÊ</h1>
            </div>
            <div className="formInsertEdit__space"></div>
            <div className="formInsertEdit__content">
              <form>
                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">Mã số ID</label>
                  <br />
                  <input
                    className="formInsertEdit__input input-readonly"
                    type="text"
                    name="id"
                    value="Auto number"
                    readOnly
                  />
                </div>
                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">
                    Tên chỗ cho thuê
                  </label>
                  <br />
                  <input
                    className="formInsertEdit__input"
                    type="text"
                    name="title"
                    ref={inputTitleRef}
                  />
                </div>
                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">Địa chỉ</label>
                  <br />
                  <input
                    className="formInsertEdit__input"
                    type="text"
                    name="address"
                    ref={inputAddressRef}
                  />
                </div>
                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">
                    Giá tiền thuê 1 tháng
                  </label>
                  <br />
                  <input
                    className="formInsertEdit__input"
                    type="text"
                    name="price"
                    ref={inputPriceRef}
                  />
                </div>
                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">Hình ảnh</label>
                  <br />
                  <input
                    className="formInsertEdit__input"
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    ref={inputImgRef}
                    multiple
                  />
                </div>

                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">Chủ nhà</label>
                  <br />
                  <input
                    className="formInsertEdit__input"
                    type="text"
                    name="image5"
                    value={id}
                  />
                </div>

                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">Danh mục</label>
                  <br />
                  <select
                    className="formInsertEdit__input"
                    name="idCategory"
                    ref={inputIdCategoryRef}
                  >
                    <option value="0">Chọn danh mục</option>
                    {dataCategory.map((cate) => (
                      <option key={cate.id} value={cate.id}>
                        {cate.nameCategory}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">Loại cho thuê</label>
                  <br />
                  <select
                    className="formInsertEdit__input"
                    name="kindRoom"
                    ref={inputKindRoomRef}
                  >
                    <option value="">Chọn loại cho thuê</option>
                    <option value="0">Phòng</option>
                    <option value="1">Căn hộ</option>
                    <option value="2">Nhà</option>
                  </select>
                </div>

                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">
                    Số lượng khách
                  </label>
                  <br />
                  <input
                    className="formInsertEdit__input"
                    type="text"
                    name="quantityPeople"
                    ref={inputQuantityPeopleRef}
                  />
                </div>
                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">
                    Số lượng phòng tắm
                  </label>
                  <br />
                  <input
                    className="formInsertEdit__input"
                    type="text"
                    name="quantityBath"
                    ref={inputQuantityBathPeopleRef}
                  />
                </div>
                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">
                    Số lượng phòng ngủ
                  </label>
                  <br />
                  <input
                    className="formInsertEdit__input"
                    type="text"
                    name="quantityBedRoom"
                    ref={inputQuantityBedRoomPeopleRef}
                  />
                </div>
                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">
                    Diện tích (m<sup>2</sup>)
                  </label>
                  <br />
                  <input
                    className="formInsertEdit__input"
                    type="text"
                    name="area"
                    ref={inputAreaRef}
                  />
                </div>
                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">Mô tả</label>
                  <br />
                  <textarea
                    className="formInsertEdit__input formInsertEdit__textarea"
                    name="description"
                    cols={100}
                    rows={5}
                    ref={inputDescriptionRef}
                  ></textarea>
                </div>
                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">Kinh độ</label>
                  <br />
                  <input
                    className="formInsertEdit__input"
                    type="text"
                    name="longitude"
                    ref={inputLongitudePeopleRef}
                  />
                </div>
                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">Vĩ độ</label>
                  <br />
                  <input
                    className="formInsertEdit__input"
                    type="text"
                    name="latitude"
                    ref={inputLatitudePeopleRef}
                  />
                </div>

                <div className="formInsertEdit__item formInsertEdit__btn">
                  <button
                    name="btn-insert"
                    className="btn-form"
                    id="btnInsert"
                    onClick={addDataPlace}
                  >
                    Thêm mới
                  </button>
                  <button type="reset" className="btn-form">
                    Nhập lại
                  </button>
                  <Link href={`/houseOwner/managePlaces`} className="btn-form">
                    Danh sách
                  </Link>
                </div>
              </form>
            </div>
          </section>
        </div>
      </LayoutHouseOwner>
    </>
  );
}
