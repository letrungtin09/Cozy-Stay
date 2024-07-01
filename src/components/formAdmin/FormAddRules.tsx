import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const FormAddRules = () => {
  const apiRules = `${localUrl}/api/rules`;
  const [dataRules, setDataRules] = useState<any>([]);
  const { values, handleChange } = useHandleChange({
    icon: "",
    nameRules: "",
  });

  useEffect(() => {
    setDataRules(values);
  }, [values]);

  const router = useRouter();

  const addRules = async (e: any) => {
    e.preventDefault();
    const rulesNew = {
      icon: dataRules.icon,
      nameRules: dataRules.nameRules,
    };
    const res = await ApiFunctions.postData(apiRules, rulesNew)
      .then(() => {
        alert("Thêm mới thành công !");
        router.push("/admin/adminRules");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="formInsertEdit">
      <div className="formInsertEdit__title">
        <h1>THÊM MỚI NỘI QUY NHÀ</h1>
      </div>
      <div className="formInsertEdit__space"></div>
      <div className="formInsertEdit__content">
        <form onSubmit={addRules}>
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
            <label className="formInsertEdit__label">Tên nội quy</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="nameRules"
              onChange={handleChange}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Biểu tượng nội quy</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="icon"
              onChange={handleChange}
            />
          </div>

          <div className="formInsertEdit__item formInsertEdit__btn">
            <button name="btn-insert" className="btn-form" id="btnInsert">
              Thêm mới
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
export default FormAddRules;
