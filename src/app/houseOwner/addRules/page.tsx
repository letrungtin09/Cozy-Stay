"use client";
import LayoutHouseOwner from "@/components/layoutHouseOwner";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
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
    idConvenient: 0,
  });

  const addConvenient = async (e: any) => {
    e.preventDefault();
    const conNew = {
      idPlace: idPlace,
      idConvenient: 0,
    };
    console.log(conNew);

    try {
      const res = await ApiFunctions.postData(apiJoinRules, conNew)
        .then(() => {
          alert("Thêm mới thành công !");
          // router.push(`/houseOwner/managePlaces?idUser=${id}`);
        })
        .catch((err) => {
          console.error(err);
        });
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
                  <form onSubmit={addConvenient}>
                    <select
                      className="formInsertEdit__input w-90% p-2 bg-color-gray-0"
                      name="idConvenient"
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
