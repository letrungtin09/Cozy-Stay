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

const RenderAdminService = () => {
  const apiService = `${localUrl}/api/service`;
  const [dataService, setDataService] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiService);
        setDataService(res.service);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiService]);

  const deleteService = async (id: any) => {
    const apiService2 = `${localUrl}/api/service?id=${id}`;
    try {
      const res = await ApiFunctions.deleteData(apiService2).then(() => {
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
        <h2>Quản lý dịch vụ</h2>
        <div className="admin-btnAdd">
          <Link className="btn--add" href="/admin/adminService/formAddService">
            <FontAwesomeIcon icon={faPlus} /> <div>Thêm mới</div>
          </Link>
        </div>
      </div>
      <div className="content-adminBottom">
        <table>
          <thead>
            <th>id</th>
            <th>Tên dịch vụ</th>
            <th>thao tác</th>
          </thead>
          <tbody className="infoCate">
            {dataService.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.nameService}</td>

                <td>
                  <div className="btn-action">
                    <a className="btn--operation btn--edit" href="#">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      Sửa
                    </a>
                    <button className="btn--operation btn--delete">
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        onClick={() => deleteService(service.id)}
                      />
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

export default RenderAdminService;
