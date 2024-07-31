"use client";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import Category from "@/pages/models/category.models";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const FormUpdateCategory = () => {
  const searchParams = useSearchParams();
  const id = searchParams!.get("id");
  const apiCategory = `${localUrl}/api/category?id=${id}`;
  const [dataCategory, setDataCategory] = useState<any>([]);

  useEffect(() => {
    const fetchDataCate = async () => {
      try {
        const res = await ApiFunctions.getData(apiCategory);
        setDataCategory(res.cate[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataCate();
  }, [apiCategory]);

  const { values, handleChange, setValues } = useHandleChange({
    icon: "",
    nameCategory: "",
  });

  useEffect(() => {
    setValues(dataCategory);
  }, [dataCategory]);

  const router = useRouter();

  const updateCategory = async (e: any) => {
    e.preventDefault();
    const cateUpdate = {
      icon: values.icon,
      nameCategory: values.nameCategory,
    };

    try {
      const res = await ApiFunctions.putData(apiCategory, cateUpdate)
        .then(() => {
          alert("Cập nhật thành công !");
          router.push("/admin/adminCategory");
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
        <h1>CẬP NHẬT DANH MỤC</h1>
      </div>
      <div className="formInsertEdit__space"></div>
      <div className="formInsertEdit__content">
        <form onSubmit={updateCategory}>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Mã số ID</label>
            <br />
            <input
              className="formInsertEdit__input input-readonly"
              type="text"
              name="id"
              value={dataCategory.id}
              readOnly
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label"> Tên danh mục</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="nameCategory"
              onChange={handleChange}
              value={values.nameCategory}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Biểu tượng danh mục</label>
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
            <Link href="/admin/adminCategory" className="btn-form">
              Danh sách
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormUpdateCategory;
