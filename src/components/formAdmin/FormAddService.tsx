import useHandleChange from '@/hooks/useHandleChange';
import ApiFunctions from '@/lib/api';
import localUrl from '@/lib/const';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const FormAddService = () => {
    const apiService = `${localUrl}/api/service`;
    const [dataService, setDataService] =  useState<any>([]);
    const {values, handleChange} = useHandleChange({
        nameService: "",
       
    }) 

useEffect(() => {
    setDataService(values);
}, [values]);
    
const router = useRouter();

const addService = async(e:any) => {
    e.preventDefault();
    const serviceNew = {
        nameService: dataService.nameService,
    
    }
    const res = await ApiFunctions.postData(apiService, serviceNew).then(()=>{
        alert("Thêm mới thành công !");
        router.push("/admin/adminService");

    }).catch((err)=>{
         console.error(err);
    });



}
    
    return (
        <section className="formInsertEdit">
        <div className="formInsertEdit__title">
          <h1>THÊM MỚI DỊCH VỤ</h1>
        </div>
        <div className="formInsertEdit__space"></div>
        <div className="formInsertEdit__content">
          <form onSubmit={addService}>
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
              <label className="formInsertEdit__label">Tên dịch vụ</label>
              <br />
              <input
                className="formInsertEdit__input"
                type="text"
                name="nameService"
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
              <Link href="/admin/adminService" className="btn-form">
                Danh sách
              </Link>
            </div>
          </form>
        </div>
      </section>
    );
};
export default FormAddService;