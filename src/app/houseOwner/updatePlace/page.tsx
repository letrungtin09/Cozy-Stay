// "use client";
// import LayoutHouseOwner from "@/components/layoutHouseOwner";
// import useHandleChange from "@/hooks/useHandleChange";
// import ApiFunctions from "@/lib/api";
// import localUrl from "@/lib/const";
// import { faJoint } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import React, { useEffect, useState } from "react";

// export default function Home() {
//   const searchParams = useSearchParams();
//   const id = searchParams!.get("id");
//   const idUser = searchParams!.get("idUser");
//   const idPlace = searchParams!.get("idPlace");
//   const apiCategory = `${localUrl}/api/category`;
//   const apiPlace = `${localUrl}/api/places?id=${id}`;
//   const apiUser = `${localUrl}/api/user?idUser=${idUser}`;
//   const apiJoinConvenient = `${localUrl}/api/joinConvenient?idPlace=${idPlace}`;
//   const apiConvenient = `${localUrl}/api/convenient`;
//   const apiJoinRules = `${localUrl}/api/joinRules?idPlace=${idPlace}`;
//   const apiRules = `${localUrl}/api/rules`;
//   const [dataPlace, setDataPlace] = useState<any>([]);
//   const [dataCategory, setDataCategory] = useState<any[]>([]);
//   const [dataUser, setDataUser] = useState<any>([]);
//   const [dataJoinConvenient, setDataJoinConvenient] = useState<any[]>([]);
//   const [dataConvenient, setDataConvenient] = useState<any[]>([]);
//   const [dataJoinRules, setDataJoinRules] = useState<any[]>([]);
//   const [dataRules, setDataRules] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchDataPlace = async () => {
//       try {
//         const res = await ApiFunctions.getData(apiPlace);
//         setDataPlace(res.places[0]);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDataPlace();
//   }, [apiPlace]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await ApiFunctions.getData(apiUser);
//         setDataUser(res.user[0]);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [apiUser]);

//   useEffect(() => {
//     const fetchDataCate = async () => {
//       try {
//         const res = await ApiFunctions.getData(apiCategory);
//         setDataCategory(res.cate);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDataCate();
//   }, [apiCategory]);

//   useEffect(() => {
//     const fetchDataJoinConvenient = async () => {
//       try {
//         const res = await ApiFunctions.getData(apiJoinConvenient);
//         setDataJoinConvenient(res.joinConvenient);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDataJoinConvenient();
//   }, [apiJoinConvenient]);

//   useEffect(() => {
//     const fetchDataConvenient = async () => {
//       try {
//         const res = await ApiFunctions.getData(apiConvenient);
//         setDataConvenient(res.convenient);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDataConvenient();
//   }, [apiConvenient]);

//   useEffect(() => {
//     const fetchDataJoinRules = async () => {
//       try {
//         const res = await ApiFunctions.getData(apiJoinRules);
//         setDataJoinRules(res.joinRules);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDataJoinRules();
//   }, [apiJoinRules]);

//   useEffect(() => {
//     const fetchDataRules = async () => {
//       try {
//         const res = await ApiFunctions.getData(apiRules);
//         setDataRules(res.rules);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDataRules();
//   }, [apiRules]);

//   const showConvenient = () => { };

//   const renderKindRoom = (value: number) => {
//     if (value == 0) {
//       return (
//         <>
//           <option value="0" selected>
//             Phòng
//           </option>
//           <option value="1">Căn hộ</option>
//           <option value="2">Nhà</option>
//         </>
//       );
//     } else if (value == 1) {
//       return (
//         <>
//           <option value="0">Phòng</option>
//           <option value="1" selected>
//             Căn hộ
//           </option>
//           <option value="2">Nhà</option>
//         </>
//       );
//     } else if (value == 2) {
//       return (
//         <>
//           <option value="0">Phòng</option>
//           <option value="1">Căn hộ</option>
//           <option value="2" selected>
//             Nhà
//           </option>
//         </>
//       );
//     }
//   };

//   const { values, handleChange, setValues } = useHandleChange({
//     address: "",
//     price: 0,
//     quantityPeople: 0,
//     image1: "",
//     image2: "",
//     image3: "",
//     image4: "",
//     image5: "",
//     longitude: "",
//     latitude: "",
//     description: "",
//     quantityBedRoom: 0,
//     quantityBath: 0,
//     area: 0,
//     kindRoom: 0,
//     title: "",
//     approveStatus: 0,
//     idUser: 0,
//     idCategory: 0,
//   });

//   useEffect(() => {
//     setValues(dataPlace);
//   }, [dataPlace]);

//   const router = useRouter();

//   const updatePlace = async (e: any) => {
//     e.preventDefault();
//     const placeUpdate = {
//       address: values.address,
//       price: +values.price,
//       quantityPeople: +values.quantityPeople,
//       image1: "place1/image1.webp",
//       image2: "",
//       image3: "",
//       image4: "",
//       image5: "",
//       longitude: +values.longitude,
//       latitude: +values.latitude,
//       description: values.description,
//       quantityBedRoom: +values.quantityBedRoom,
//       quantityBath: +values.quantityBath,
//       area: +values.area,
//       kindRoom: +values.kindRoom,
//       title: values.title,
//       approveStatus: +values.approveStatus,
//       idUser: +dataUser.id,
//       idCategory: +values.idCategory,
//     };
//     console.log(placeUpdate);

//     try {
//       const res = await ApiFunctions.putData(apiPlace, placeUpdate)
//         .then(() => {
//           alert("Cập nhật thành công !");
//           router.push(`/houseOwner/managePlaces?idUser=${idUser}`);
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <LayoutHouseOwner>
//       <div className="pt-24 pb-10 px-44">
//         <section className="formInsertEdit">
//           <div className="formInsertEdit__title">
//             <h1>CẬP NHẬT CHỖ CHO THUÊ</h1>
//           </div>
//           <div className="formInsertEdit__space"></div>
//           <div className="formInsertEdit__content">
//             <form onSubmit={updatePlace}>
//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">Mã số ID</label>
//                 <br />
//                 <input
//                   className="formInsertEdit__input input-readonly"
//                   type="text"
//                   name="id"
//                   value={dataPlace.id}
//                   readOnly
//                 />
//               </div>
//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">
//                   Tên chỗ cho thuê
//                 </label>
//                 <br />
//                 <input
//                   className="formInsertEdit__input"
//                   type="text"
//                   name="title"
//                   value={values.title}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">Địa chỉ</label>
//                 <br />
//                 <input
//                   className="formInsertEdit__input"
//                   type="text"
//                   name="address"
//                   value={values.address}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">
//                   Giá tiền thuê 1 tháng
//                 </label>
//                 <br />
//                 <input
//                   className="formInsertEdit__input"
//                   type="text"
//                   name="price"
//                   value={values.price}
//                   onChange={handleChange}
//                 />
//               </div>
//               {/* <div className="formInsertEdit__item">
//             <label className="formInsertEdit__label">Hình ảnh</label>
//             <br />
//             <input
//               className="formInsertEdit__input"
//               type="text"
//               name="image"
//               value={values.image}
//               onChange={handleChange}
//             />
//           </div> */}

//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">Danh mục</label>
//                 <br />
//                 <select
//                   className="formInsertEdit__input"
//                   name="idCategory"
//                   onChange={handleChange}
//                 >
//                   <option value="0">Chọn danh mục</option>
//                   {dataCategory.map((cate) =>
//                     cate.id == dataPlace.idCategory ? (
//                       <>
//                         <option
//                           key={cate.id}
//                           value={values.idCategory}
//                           selected
//                         >
//                           {cate.nameCategory}
//                         </option>
//                       </>
//                     ) : (
//                       <>
//                         <option key={cate.id} value={values.idCategory}>
//                           {cate.nameCategory}
//                         </option>
//                       </>
//                     )
//                   )}
//                 </select>
//               </div>

//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">Loại cho thuê</label>
//                 <br />
//                 <select
//                   className="formInsertEdit__input"
//                   name="kindroom"
//                   onChange={handleChange}
//                 >
//                   { }
//                   <option value="">Chọn loại cho thuê</option>
//                   {renderKindRoom(values.kindRoom)}
//                 </select>
//               </div>

//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">Số lượng khách</label>
//                 <br />
//                 <input
//                   className="formInsertEdit__input"
//                   type="text"
//                   name="quantityPeople"
//                   value={values.quantityPeople}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">
//                   Số lượng phòng tắm
//                 </label>
//                 <br />
//                 <input
//                   className="formInsertEdit__input"
//                   type="text"
//                   name="quantityBath"
//                   value={values.quantityBath}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">
//                   Số lượng phòng ngủ
//                 </label>
//                 <br />
//                 <input
//                   className="formInsertEdit__input"
//                   type="text"
//                   name="quantityBedRoom"
//                   value={values.quantityBedRoom}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">Diện tích</label>
//                 <br />
//                 <input
//                   className="formInsertEdit__input"
//                   type="text"
//                   name="area"
//                   value={values.area}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">Mô tả</label>
//                 <br />
//                 <textarea
//                   className="formInsertEdit__input formInsertEdit__textarea"
//                   name="longDescription"
//                   cols={100}
//                   rows={5}
//                   value={values.description}
//                   onChange={handleChange}
//                 ></textarea>
//               </div>
//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">Kinh độ</label>
//                 <br />
//                 <input
//                   className="formInsertEdit__input"
//                   type="text"
//                   name="longitude"
//                   value={values.longitude}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">Vĩ độ</label>
//                 <br />
//                 <input
//                   className="formInsertEdit__input"
//                   type="text"
//                   name="latitude"
//                   value={values.latitude}
//                   onChange={handleChange}
//                 />
//               </div>

//               <input
//                 className="formInsertEdit__input"
//                 type="hidden"
//                 name="approveStatus"
//                 value={values.approveStatus}
//                 onChange={handleChange}
//               />

//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">Tiện nghi</label>
//                 <br />
//                 <div className="manageConvenient mt-2">
//                   <Link
//                     className="px-5 py-2 bg-color-green-0 text-color-white-0 rounded-md transition-all font-bold hover:bg-color-green-2"
//                     href={`/houseOwner/addConvenient?idPlace=${idPlace}`}
//                   >
//                     Thêm tiện nghi
//                   </Link>
//                 </div>
//                 <div className="addConvenient d-flex w-70% flex-wrap">
//                   {dataJoinConvenient.map((join) =>
//                     dataConvenient.map((con) =>
//                       join.idConvenient == con.id ? (
//                         <>
//                           <div
//                             className="addConvenient__item w-50% mb-3 d-flex items-center"
//                             key={join.id}
//                           >
//                             <img
//                               className="w-6"
//                               src={`images/iconSvg/iconConvenient/${con.icon}`}
//                               alt=""
//                             />
//                             <span className="ml-3 font-medium">
//                               {con.nameConvenient}
//                             </span>
//                           </div>
//                         </>
//                       ) : (
//                         <></>
//                       )
//                     )
//                   )}
//                 </div>
//               </div>
//               <div className="formInsertEdit__item">
//                 <label className="formInsertEdit__label">Nội quy nhà</label>
//                 <br />
//                 <div className="manageRules mt-2">
//                   <Link
//                     className="px-5 py-2 bg-color-green-0 text-color-white-0 rounded-md transition-all font-bold hover:bg-color-green-2"
//                     href={`/houseOwner/addRules?idPlace=${idPlace}`}
//                   >
//                     Thêm nội quy
//                   </Link>
//                 </div>
//                 <div className="addRules d-flex w-70% flex-wrap">
//                   {dataJoinRules.map((join) =>
//                     dataRules.map((ru) =>
//                       join.idRules == ru.id ? (
//                         <>
//                           <div
//                             className="addRules__item w-50% mb-3 d-flex items-center"
//                             key={join.id}
//                           >
//                             <img
//                               className="w-6"
//                               src={`images/iconSvg/iconRules/${ru.icon}`}
//                               alt=""
//                             />
//                             <span className="ml-3 font-medium">
//                               {ru.nameRules}
//                             </span>
//                           </div>
//                         </>
//                       ) : (
//                         <></>
//                       )
//                     )
//                   )}
//                 </div>
//               </div>

//               <div className="formInsertEdit__item formInsertEdit__btn">
//                 <button name="btn-insert" className="btn-form" id="btnInsert">
//                   Cập nhật
//                 </button>
//                 <button type="reset" className="btn-form">
//                   Nhập lại
//                 </button>
//                 <Link
//                   href={`/houseOwner/managePlaces?idUser=${id}`}
//                   className="btn-form"
//                 >
//                   Danh sách
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </section>
//       </div>
//     </LayoutHouseOwner>
//   );
// }
"use client";
import LayoutHouseOwner from "@/components/layoutHouseOwner";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import UserCurrent from "@/lib/currentUser";
import Image from "next/image";
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
  const searchParams = useSearchParams();
  const idPlace = searchParams!.get("idPlace");
  const apiJoinConvenient = `${localUrl}/api/joinConvenient?idPlace=${idPlace}`;
  const apiConvenient = `${localUrl}/api/convenient`;
  const apiJoinRules = `${localUrl}/api/joinRules?idPlace=${idPlace}`;
  const apiRules = `${localUrl}/api/rules`;
  const [dataCategory, setDataCategory] = useState<any[]>([]);
  const [dataImage, setDataImage] = useState<string>();
  let postData: { name: string; type: string; data: string }[] = [];
  const [isUploading, setIsUploading] = useState(false);
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
  const [dataPlace, setDataPlace] = useState<any>([]);
  const [dataJoinRules, setDataJoinRules] = useState<any[]>([]);
  const [dataJoinConvenient, setDataJoinConvenient] = useState<any[]>([]);
  const [dataConvenient, setDataConvenient] = useState<any[]>([]);
  const [dataRules, setDataRules] = useState<any[]>([]);

  useEffect(() => {
    const fetchDataJoinConvenient = async () => {
      try {
        const res = await ApiFunctions.getData(apiJoinConvenient);
        setDataJoinConvenient(res.joinConvenient);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataJoinConvenient();
  }, [apiJoinConvenient]);

  useEffect(() => {
    const fetchDataConvenient = async () => {
      try {
        const res = await ApiFunctions.getData(apiConvenient);
        setDataConvenient(res.convenient);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataConvenient();
  }, [apiConvenient]);

  useEffect(() => {
    const fetchDataJoinRules = async () => {
      try {
        const res = await ApiFunctions.getData(apiJoinRules);
        setDataJoinRules(res.joinRules);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataJoinRules();
  }, [apiJoinRules]);

  useEffect(() => {
    const fetchDataRules = async () => {
      try {
        const res = await ApiFunctions.getData(apiRules);
        setDataRules(res.rules);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataRules();
  }, [apiRules]);

  useEffect(() => {
    const fetchDataPlace = async () => {
      try {
        const res = await ApiFunctions.getData(apiPlace);
        setDataPlace(res.places[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataPlace();
  }, [apiPlace]);
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    price: "",
    quantityPeople: "",
    quantityBath: "",
    quantityBedRoom: "",
    area: "",
    description: "",
    longtitude: "",
    latitude: "",
  });

  useEffect(() => {
    // Khi nhận được dataPlace từ API, cập nhật state
    if (dataPlace) {
      setFormData({
        title: dataPlace.title,
        address: dataPlace.address,
        price: dataPlace.price,
        quantityPeople: dataPlace.quantityPeople,
        quantityBath: dataPlace.quantityBath,
        quantityBedRoom: dataPlace.quantityBedRoom,
        area: dataPlace.area,
        description: dataPlace.description,
        longtitude: dataPlace.longtitude,
        latitude: dataPlace.latitude,
      });
    }
  }, [dataPlace]);

  // Hàm xử lý thay đổi giá trị input
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateUniqueFilename = (originalName: string) => {
    const timestamp = Date.now();
    const extension = originalName.split('.').pop();
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
    setIsUploading(true); // Bắt đầu upload

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
        const linksJson = JSON.stringify(links)
        setDataImage(linksJson);
      } else {
        setIsUploading(false); // Bắt đầu upload
      }
    } catch (error) {
      alert("Vui lòng thử lại");
    }
  }

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
        const placeUpdate = {
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
          numberId: idPlace
        };
        console.log(placeUpdate)
        try {
          await ApiFunctions.putData(apiPlace, placeUpdate)
            .then(() => {
              alert("Cập nhật thành công !");
              router.push(`/houseOwner/managePlaces?`);
            })
            .catch((err) => {
              console.error(err);
            });
        } catch (error) {
          console.error(error);
        } finally {
          setIsUploading(false); // Kết thúc upload
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
                    value={formData.title}
                    onChange={handleInputChange}
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
                    value={formData.address}
                    onChange={handleInputChange}
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
                    value={formData.price}
                    onChange={handleInputChange}
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
                      cate.id == dataPlace.idCategory ?
                        <option key={cate.id} value={cate.id} selected>
                          {cate.nameCategory}
                        </option> : <option key={cate.id} value={cate.id}>
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
                    {dataPlace.kindRoom === 0 ? (
                      <option value="0">Phòng</option>
                    ) : dataPlace.kindRoom === 1 ? (
                      <option value="1">Căn hộ</option>
                    ) : <option value="2">Nhà</option>}
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
                    value={formData.quantityPeople}
                    onChange={handleInputChange}
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
                    value={formData.quantityBath}
                    onChange={handleInputChange}
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
                    value={formData.quantityBedRoom}
                    onChange={handleInputChange}
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
                    value={formData.area}
                    onChange={handleInputChange}
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
                    value={formData.description}
                    onChange={handleInputChange}
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
                    value={formData.longtitude}
                    onChange={handleInputChange}
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
                    value={formData.latitude}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">Tiện nghi</label>
                  <br />
                  <div className="manageConvenient mt-2">
                    <Link
                      className="px-5 py-2 bg-color-green-0 text-color-white-0 rounded-md transition-all font-bold hover:bg-color-green-2"
                      href={`/houseOwner/addConvenient?idPlace=${idPlace}`}
                    >
                      Thêm tiện nghi
                    </Link>
                  </div>
                  <div className="addConvenient d-flex w-70% flex-wrap">
                    {dataJoinConvenient.map((join) =>
                      dataConvenient.map((con) =>
                        join.idConvenient == con.id ? (
                          <>
                            <div
                              className="addConvenient__item w-50% mb-3 d-flex items-center"
                              key={join.id}
                            >
                              <Image
                                className="w-6"
                                src={`/images/iconSvg/iconConvenient/${con.icon}`}
                                alt=""
                                width={100}
                                height={100}
                              />
                              <span className="ml-3 font-medium">
                                {con.nameConvenient}
                              </span>
                            </div>
                          </>
                        ) : (
                          <></>
                        )
                      )
                    )}
                  </div>
                </div>
                <div className="formInsertEdit__item">
                  <label className="formInsertEdit__label">Nội quy nhà</label>
                  <br />
                  <div className="manageRules mt-2">
                    <Link
                      className="px-5 py-2 bg-color-green-0 text-color-white-0 rounded-md transition-all font-bold hover:bg-color-green-2"
                      href={`/houseOwner/addRules?idPlace=${idPlace}`}
                    >
                      Thêm nội quy
                    </Link>
                  </div>
                  <div className="addRules d-flex w-70% flex-wrap">
                    {dataJoinRules.map((join) =>
                      dataRules.map((ru) =>
                        join.idRules == ru.id ? (
                          <>
                            <div
                              className="addRules__item w-50% mb-3 d-flex items-center"
                              key={join.id}
                            >
                              <Image
                                className="w-6"
                                src={`/images/iconSvg/iconRules/${ru.icon}`}
                                alt=""
                                width={100}
                                height={100}
                              />
                              <span className="ml-3 font-medium">
                                {ru.nameRules}
                              </span>
                            </div>
                          </>
                        ) : (
                          <></>
                        )
                      )
                    )}
                  </div>
                </div>

                <div className="formInsertEdit__item formInsertEdit__btn">
                  <button
                    onClick={addDataPlace}
                    disabled={isUploading} // Disable nút khi đang upload
                    className={`btn-form ${isUploading ? 'btn-disabled' : ''}`} // Thêm class 'btn-disabled' khi đang upload
                  >
                    {isUploading ? "Đang upload..." : "Thêm mới"} {/* Đổi nội dung nút */}
                  </button>
                  <button type="reset" className="btn-form">
                    Nhập lại
                  </button>
                  <Link
                    href={`/houseOwner/managePlaces`}
                    className="btn-form"
                  >
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
