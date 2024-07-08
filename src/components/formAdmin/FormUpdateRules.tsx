"use client";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const FormUpdateRules = () => {
  const searchParams = useSearchParams();
  const id = searchParams!.get("id");
  const apiRules = `${localUrl}/api/rules?id=${id}`;
  const [dataRules, setDataRules] = useState<any>([]);

  useEffect(() => {
    const fetchDataRules = async () => {
      try {
        const res = await ApiFunctions.getData(apiRules);
        setDataRules(res.rules[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataRules();
  }, [apiRules]);

  const { values, handleChange, setValues } = useHandleChange({
    icon: "",
    nameRules: "",
  });

  useEffect(() => {
    setValues(dataRules);
  }, [dataRules]);

  const router = useRouter();

  const updateRules = async (e: any) => {
    e.preventDefault();
    const rulesUpdate = {
      icon: values.icon,
      nameRules: values.nameRules,
    };

    try {
      const res = await ApiFunctions.putData(apiRules, rulesUpdate)
        .then(() => {
          alert("Cập nhật thành công !");
          router.push("/admin/adminRules");
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
        <h1>CẬP NHẬT NỘI QUY</h1>
      </div>
      <div className="formInsertEdit__space"></div>
      <div className="formInsertEdit__content">
        <form onSubmit={updateRules}>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Mã số ID</label>
            <br />
            <input
              className="formInsertEdit__input input-readonly"
              type="text"
              name="id"
              value={dataRules.id}
              readOnly
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label"> Tên nội quy</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="nameRules"
              onChange={handleChange}
              value={values.nameRules}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label"> Biểu tượng nội quy</label>
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
            <Link href="/admin/adminRules" className="btn-form">
              Danh sách
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormUpdateRules;
