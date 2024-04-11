"use client";
import useHandleChange from '@/hooks/useHandleChange';
import ApiFunctions from '@/lib/api';
import localUrl from '@/lib/const';
import Category from '@/pages/models/category.models';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const FormUpdateCategory = () => {

  const searchParams = useSearchParams();
  const id = searchParams!.get("id");
  const apiCategory = `${localUrl}/api/category?id=${id}`;
  const [dataCategory, setDataCategory] = useState<any>([]);

 
  const {values, handleChange, setValues} = useHandleChange({
    nameCategory: '',
    description: '',
}) 


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


const UpdateCate = async (e:any) => {
  e.preventDefault();
 
  try {
    const res = await ApiFunctions.putData(apiCategory, values);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}
  

useEffect(() => {
    setDataCategory(values);
}, [values]);







    return (
        <section className="formInsertEdit">
        <div className="formInsertEdit__title">
          <h1>SỬA MỚI DANH MỤC</h1>
        </div>
        <div className="formInsertEdit__space"></div>
        <div className="formInsertEdit__content">
          <form onSubmit={UpdateCate}>
            <div className="formInsertEdit__item">
              <label className="formInsertEdit__label">Mã số ID</label>
              <br />
              <input
                className="formInsertEdit__input input-readonly"
                type="text"
                name="id"
                value= {dataCategory.id}
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
                value= {dataCategory.nameCategory}
                
              />
            </div>
            <div className="formInsertEdit__item">
              <label className="formInsertEdit__label">Mô tả danh mục</label>
              <br />
              <textarea
                className="formInsertEdit__input formInsertEdit__textarea"
                cols={100}
                rows={5}
                name="description"
                onChange={handleChange}
                value= {dataCategory.description}
              ></textarea>
            </div>
           
  
            <div className="formInsertEdit__item formInsertEdit__btn">
              <button name="btn-insert" className="btn-form" id="btnInsert">
                Thêm mới
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