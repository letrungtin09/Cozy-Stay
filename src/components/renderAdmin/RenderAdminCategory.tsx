import ApiFunctions from '@/lib/api';
import localUrl from '@/lib/const';
import { faCircleXmark, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const RenderAdminCategory = () => {
    const apiCategory = `${localUrl}/api/category`;
    const [dataCategory, setDataCategory] = useState<any[]>([]);

    useEffect(() => {
        // ApiFunctions.getData(apiPlaces).then((res) => {
        //   setDataPlace(res.places);
        // });
        fetchData();
      
      }, [apiCategory]);


      const fetchData = async () => {
        try {
          const res = await ApiFunctions.getData(apiCategory);
          setDataCategory(res.cate);
        } catch (error) {
          console.log(error);
        }
      };

      const deleteCategory = async () => {
        
      }

    return (
        <div className="content-admin">
        <div className="content-adminTop">
          <h2>Quản lý danh mục</h2>
          <div className="admin-btnAdd">
            <Link className="btn--add" href="/admin/adminCategory/formAddCategory">
              <FontAwesomeIcon icon={faPlus} /> <div>Thêm mới</div>
            </Link>
          </div>
        </div>
        <div className="content-adminBottom">
          <table>
            <thead>
              <th>id</th>
              <th>tên danh mục</th>
              <th>mô tả danh mục</th>
              <th>thao tác</th>
            </thead>
            <tbody className="infoCate">
              {dataCategory.map((category) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.nameCategory}</td>
                  <td>{category.description}</td>
                  
                 
                  <td>
                    <div className="btn-action">
                      <Link className="btn--operation btn--edit"  
                      href={{
                        pathname: "/admin/adminCategory/formUpdateCategory",
                        query: { id: category.id },
                      }}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                        Sửa
                      </Link>
                      <button className="btn--operation btn--delete" >
                        <FontAwesomeIcon icon={faCircleXmark}  />
                        Xóa
                      </button>
                      {/* <a className="btn--operation btn--detail" href="#">
                      <FontAwesomeIcon icon={faCircleInfo} />
                      Chi tiết
                    </a> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default RenderAdminCategory;