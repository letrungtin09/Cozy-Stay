"use client";
import LayoutHouseOwner from "@/components/layoutHouseOwner";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const idUser = searchParams!.get("idUser");
  const idPlace = searchParams!.get("idPlace");
  const apiJoinConvenient = `${localUrl}/api/joinConvenient?idPlace=${idPlace}`;
  const apiConvenient = `${localUrl}/api/convenient`;
  const [dataJoinConvenient, setDataJoinConvenient] = useState<any[]>([]);
  const [dataConvenient, setDataConvenient] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiConvenient);
        setDataConvenient(res.convenient);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiConvenient]);

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

  const { values, handleChange } = useHandleChange({
    idPlace: 0,
    idConvenient: 0,
  });

  const router = useRouter();

  const addConvenient = async (e: any) => {
    e.preventDefault();

    const conNew = {
      idPlace: idPlace,
      idConvenient: values.idConvenient,
    };
    console.log(conNew);
    try {
      const res = await ApiFunctions.postData(apiJoinConvenient, conNew)
        .then(() => {
          alert("Thêm mới thành công !");
          router.push(
            `/houseOwner/updatePlace?idUser=${idUser}&idPlace=${idPlace}`
          );
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteConvenient = async (id: any) => {
    const apiJoinConvenient = `${localUrl}/api/joinConvenient?id=${id}`;
    try {
      const res = await ApiFunctions.deleteData(apiJoinConvenient);
      alert("Xóa thành công !");
      router.push(
        `/houseOwner/updatePlace?idUser=${idUser}&idPlace=${idPlace}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <LayoutHouseOwner>
        <section className="convenient-container pl-52 pr-52 pb-14">
          <div className="content">
            <div className="col-1">
              <div className="mr-14">
                <div className="title">
                  <h1 className="mb-4">Tiện nghi</h1>
                  <p className="text-gray-500">
                    Sau đây là những tiện nghi mà bạn đã thêm vào mục cho thuê
                    từ trước đến nay.
                  </p>
                </div>
                <div className="list-item-now">
                  <div className="list-item-now-col-1 mt-3">
                    {dataJoinConvenient.map((join) =>
                      dataConvenient.map((con) =>
                        join.idConvenient == con.id ? (
                          <>
                            <div
                              className="item-convenient d-flex items-center mb-4"
                              key={join.id}
                            >
                              <Image
                                className="w-6"
                                width={500}
                                height={500}
                                src={`/images/iconSvg/iconConvenient/${con.icon}`}
                                alt="convenient"
                              />
                              <span className="ml-3 font-medium">
                                {con.nameConvenient}
                              </span>
                              <button
                                className="text-[14px] ml-[20px] cursor-pointer"
                                onClick={() => deleteConvenient(join.id)}
                              >
                                <FontAwesomeIcon
                                  className="text-white bg-red-700 px-[5px] py-[5px] rounded-[50%]"
                                  icon={faX}
                                />
                              </button>
                            </div>
                          </>
                        ) : (
                          <></>
                        )
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="ml-9">
                <div className="title">
                  <h1 className="mb-4">Thêm tiện nghi</h1>
                  <p className="text-gray-500">
                    Thêm các tiện nghi vào mục cho thuê
                  </p>
                </div>
                <div className="list-item-add">
                  <form onSubmit={addConvenient}>
                    <select
                      className="formInsertEdit__input w-90% p-2 bg-color-gray-0"
                      name="idConvenient"
                      onChange={handleChange}
                    >
                      <option value="0">Chọn tiện nghi</option>
                      {dataConvenient.map((con) => (
                        <option key={con.id} value={con.id}>
                          {con.nameConvenient}
                        </option>
                      ))}
                    </select>
                    <br></br>
                    <button
                      name="btn-insert"
                      className="btn-form mt-2 rounded-lg bg-color-green-0 px-3 py-1 text-white font-bold"
                      id="btnInsert"
                    >
                      Thêm mới
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutHouseOwner>
    </>
  );
}
