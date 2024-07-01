import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import {
  faCircleXmark,
  faPenToSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RenderAdminCategory = () => {
  const apiCategory = `${localUrl}/api/category`;
  const [dataCategory, setDataCategory] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, [apiCategory]);

  const fetchData = async () => {
    try {
      const res = await ApiFunctions.getData(apiCategory);
      const dataRes = res.cate;
      const sortData = dataRes.sort(function (a: any, b: any) {
        return b.id - a.id;
      });
      setDataCategory(sortData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCate = async (id: any) => {
    const apiCategory2 = `${localUrl}/api/category?id=${id}`;
    try {
      const res = await ApiFunctions.deleteData(apiCategory2).then(() => {
        alert("Xóa thành công !");
        location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content-admin">
      <div className="content-adminTop">
        <h2>Quản lý danh mục</h2>
        <div className="admin-btnAdd">
          <Link
            className="btn--add"
            href="/admin/adminCategory/formAddCategory"
          >
            <FontAwesomeIcon icon={faPlus} /> <div>Thêm mới</div>
          </Link>
        </div>
      </div>
      <div className="content-adminBottom">
        <table>
          <thead>
            <th>id</th>
            <th>tên danh mục</th>
            <th>biểu tượng danh mục</th>
            <th>thao tác</th>
          </thead>
          <tbody className="infoCate">
            {dataCategory.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.nameCategory}</td>
                <td className="d-flex justify-center">
                  <img src={category.icon} alt="" />
                </td>

                <td>
                  <div className="btn-action">
                    <Link
                      className="btn--operation btn--edit"
                      href={{
                        pathname: "/admin/adminCategory/formUpdateCategory",
                        query: { id: category.id },
                      }}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                      Sửa
                    </Link>
                    <button className="btn--operation btn--delete">
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        onClick={() => deleteCate(category.id)}
                      />
                      Xóa
                    </button>
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
