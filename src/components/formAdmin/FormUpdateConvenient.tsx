"use client";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const FormUpdateConvenient = () => {
  const searchParams = useSearchParams();
  const id = searchParams!.get("id");
  const apiConvenient = `${localUrl}/api/convenient?id=${id}`;
  const [dataConvenient, setDataConvenient] = useState<any>([]);

  useEffect(() => {
    const fetchDataConvenient = async () => {
      try {
        const res = await ApiFunctions.getData(apiConvenient);
        setDataConvenient(res.convenient[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataConvenient();
  }, [apiConvenient]);

  const { values, handleChange, setValues } = useHandleChange({
    icon: "",
    nameConvenient: "",
  });

  useEffect(() => {
    setValues(dataConvenient);
  }, [dataConvenient]);

  const router = useRouter();

  const updateConvenient = async (e: any) => {
    e.preventDefault();
    const convenientUpdate = {
      icon: values.icon,
      nameConvenient: values.nameConvenient,
    };

    try {
      const res = await ApiFunctions.putData(apiConvenient, convenientUpdate)
        .then(() => {
          alert("Cập nhật thành công !");
          router.push("/admin/adminConvenient");
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="formInsertEdit">
      <div className="formInsertEdit__title">
        <h1>CẬP NHẬT TIỆN NGHI</h1>
      </div>
      <div className="formInsertEdit__space"></div>
      <div className="formInsertEdit__content">
        <form onSubmit={updateConvenient}>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Mã số ID</label>
            <br />
            <input
              className="formInsertEdit__input input-readonly"
              type="text"
              name="id"
              value={dataConvenient.id}
              readOnly
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label"> Tên tiện nghi</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="nameConvenient"
              onChange={handleChange}
              value={values.nameConvenient}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">
              {" "}
              Biểu tượng tiện nghi
            </label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="icon"
              onChange={handleChange}
              value={values.icon}
            />
          </div>

          <div className="formInsertEdit__item formInsertEdit__btn">
            <button name="btn-insert" className="btn-form" id="btnInsert">
              Cập nhật
            </button>
            <button type="reset" className="btn-form">
              Nhập lại
            </button>
            <Link href="/admin/adminConvenient" className="btn-form">
              Danh sách
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormUpdateConvenient;
