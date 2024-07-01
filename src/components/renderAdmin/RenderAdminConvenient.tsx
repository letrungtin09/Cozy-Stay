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

const RenderAdminConvenient = () => {
  const apiConvenient = `${localUrl}/api/convenient`;
  const [dataConvenient, setDataConvenient] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiConvenient);
        const dataRes = res.convenient;
        const sortData = dataRes.sort(function (a: any, b: any) {
          return b.id - a.id;
        });
        setDataConvenient(sortData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiConvenient]);

  const deleteConvenient = async (id: any) => {
    const apiConvenient2 = `${localUrl}/api/convenient?id=${id}`;
    try {
      const res = await ApiFunctions.deleteData(apiConvenient2).then(() => {
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
        <h2>Quản lý tiện nghi</h2>
        <div className="admin-btnAdd">
          <Link
            className="btn--add"
            href="/admin/adminConvenient/formAddConvenient"
          >
            <FontAwesomeIcon icon={faPlus} /> <div>Thêm mới</div>
          </Link>
        </div>
      </div>
      <div className="content-adminBottom">
        <table>
          <thead>
            <th>id</th>
            <th>Tên tiện nghi</th>
            <th>Biểu tượng tiện nghi</th>
            <th>thao tác</th>
          </thead>
          <tbody className="infoCate">
            {dataConvenient.map((convenient) => (
              <tr key={convenient.id}>
                <td>{convenient.id}</td>
                <td>{convenient.nameConvenient}</td>
                <td className="d-flex justify-center">
                  <img
                    className="w-24"
                    src={`images/iconSvg/iconConvenient/${convenient.icon}`}
                    alt=""
                  />
                </td>
                <td>
                  <div className="btn-action">
                    <Link
                      className="btn--operation btn--edit"
                      href={{
                        pathname: "/admin/adminConvenient/formUpdateConvenient",
                        query: { id: convenient.id },
                      }}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                      Sửa
                    </Link>
                    <button className="btn--operation btn--delete">
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        onClick={() => deleteConvenient(convenient.id)}
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

export default RenderAdminConvenient;
