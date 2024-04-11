import useHandleChange from '@/hooks/useHandleChange';
import ApiFunctions from '@/lib/api';
import localUrl from '@/lib/const';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const FormAddCategory = () => {
    const apiCategory = `${localUrl}/api/category`;
    const [dataCategory, setDataCategory] =  useState<any>([]);
   
    const {values, handleChange} = useHandleChange({
        nameCategory: "",
        description: "",
    }) 

useEffect(() => {
    setDataCategory(values);
}, [values]);
    
const router = useRouter();

const addCategory = async(e:any) => {
    e.preventDefault();
    const categoryNew = {
        nameCategory: dataCategory.nameCategory,
        description: dataCategory.description,
    }
    const res = await ApiFunctions.postData(apiCategory, categoryNew).then(()=>{
        alert("Thêm mới thành công !");
        router.push("/admin/adminCategory");

    }).catch((err)=>{
         console.error(err);
    });



}
    
    return (
        <section className="formInsertEdit">
        <div className="formInsertEdit__title">
          <h1>THÊM MỚI DANH MỤC</h1>
        </div>
        <div className="formInsertEdit__space"></div>
        <div className="formInsertEdit__content">
          <form onSubmit={addCategory}>
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
              <label className="formInsertEdit__label">Tên danh mục</label>
              <br />
              <input
                className="formInsertEdit__input"
                type="text"
                name="nameCategory"
                onChange={handleChange}
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

export default FormAddCategory;