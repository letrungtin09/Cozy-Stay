import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const FormAddConvenient = () => {
  const apiConvenient = `${localUrl}/api/convenient`;
  const [dataConvenient, setDataConvenient] = useState<any>([]);
  const { values, handleChange } = useHandleChange({
    icon: "",
    nameConvenient: "",
  });

  useEffect(() => {
    setDataConvenient(values);
  }, [values]);

  const router = useRouter();

  const addConvenient = async (e: any) => {
    e.preventDefault();
    const convenientNew = {
      icon: dataConvenient.icon,
      nameConvenient: dataConvenient.nameConvenient,
    };
    const res = await ApiFunctions.postData(apiConvenient, convenientNew)
      .then(() => {
        alert("Thêm mới thành công !");
        router.push("/admin/adminConvenient");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="formInsertEdit">
      <div className="formInsertEdit__title">
        <h1>THÊM MỚI TIỆN NGHI</h1>
      </div>
      <div className="formInsertEdit__space"></div>
      <div className="formInsertEdit__content">
        <form onSubmit={addConvenient}>
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
            <label className="formInsertEdit__label">Tên tiện nghi</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="nameConvenient"
              onChange={handleChange}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">
              Biểu tượng tiện nghi
            </label>
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
            <Link href="/admin/adminConvenient" className="btn-form">
              Danh sách
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
export default FormAddConvenient;
