"use client";
import LayoutHouseOwner from "@/components/layoutHouseOwner";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const idUser = searchParams!.get("idUser");
  const idPlace = searchParams!.get("idPlace");
  const apiJoinRules = `${localUrl}/api/joinRules?idPlace=${idPlace}`;
  const apiRules = `${localUrl}/api/rules`;
  const [dataJoinRules, setDataJoinRules] = useState<any[]>([]);
  const [dataRules, setDataRules] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiRules);
        setDataRules(res.rules);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiRules]);

  useEffect(() => {
    const fetchDataJoinConvenient = async () => {
      try {
        const res = await ApiFunctions.getData(apiJoinRules);
        setDataJoinRules(res.joinRules);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataJoinConvenient();
  }, [apiJoinRules]);

  const { values, handleChange } = useHandleChange({
    idPlace: 0,
    idRules: 0,
  });

  const router = useRouter();

  const addRules = async (e: any) => {
    e.preventDefault();
    const conNew = {
      idPlace: idPlace,
      idRules: values.idRules,
    };
    console.log(conNew);

    try {
      const res = await ApiFunctions.postData(apiJoinRules, conNew)
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

  const deleteRules = async (id: any) => {
    const apiJoinRules = `${localUrl}/api/joinRules?id=${id}`;
    try {
      const res = await ApiFunctions.deleteData(apiJoinRules);
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
                  <h1 className="mb-4">Nội quy nhà</h1>
                  <p className="text-gray-500">
                    Sau đây là những nội quy mà bạn đã thêm vào mục cho thuê từ
                    trước đến nay.
                  </p>
                </div>
                <div className="list-item-now">
                  <div className="list-item-now-col-1 mt-3">
                    {dataJoinRules.map((join) =>
                      dataRules.map((rules) =>
                        join.idRules == rules.id ? (
                          <>
                            <div
                              className="item-convenient d-flex items-center mb-4"
                              key={join.id}
                            >
                              <Image
                                className="w-6"
                                src={`images/iconSvg/iconRules/${rules.icon}`}
                                width={100}
                                height={100}
                                alt=""
                              />
                              <span className="ml-3 font-medium">
                                {rules.nameRules}
                              </span>
                              <button
                                className="text-[14px] ml-[20px] cursor-pointer"
                                onClick={() => deleteRules(join.id)}
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
                  <h1 className="mb-4">Thêm nội quy nhà</h1>
                  <p className="text-gray-500">
                    Thêm các nội quy vào mục cho thuê
                  </p>
                </div>
                <div className="list-item-add">
                  <form onSubmit={addRules}>
                    <select
                      className="formInsertEdit__input w-90% p-2 bg-color-gray-0"
                      name="idRules"
                      onChange={handleChange}
                    >
                      <option value="0">Chọn nội quy</option>
                      {dataRules.map((rules) => (
                        <option key={rules.id} value={rules.id}>
                          {rules.nameRules}
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
