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

const RenderAdminRules = () => {
  const apiRules = `${localUrl}/api/rules`;
  const [dataRules, setDataRules] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, [apiRules]);

  const fetchData = async () => {
    try {
      const res = await ApiFunctions.getData(apiRules);
      const dataRes = res.rules;
      const sortData = dataRes.sort(function (a: any, b: any) {
        return b.id - a.id;
      });
      setDataRules(sortData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRules = async (id: any) => {
    const apiRules2 = `${localUrl}/api/rules?id=${id}`;
    try {
      const res = await ApiFunctions.deleteData(apiRules2).then(() => {
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
        <h2>Quản lý nội quy nhà</h2>
        <div className="admin-btnAdd">
          <Link className="btn--add" href="/admin/adminRules/formAddRules">
            <FontAwesomeIcon icon={faPlus} /> <div>Thêm mới</div>
          </Link>
        </div>
      </div>
      <div className="content-adminBottom">
        <table>
          <thead>
            <th>id</th>
            <th>tên nội quy</th>
            <th>biểu tượng nội quy</th>
            <th>thao tác</th>
          </thead>
          <tbody className="infoCate">
            {dataRules.map((rules) => (
              <tr key={rules.id}>
                <td>{rules.id}</td>
                <td>{rules.nameRules}</td>
                <td className="d-flex justify-center">
                  <img
                    className="w-24"
                    src={`images/iconSvg/iconRules/${rules.icon}`}
                    alt=""
                  />
                </td>

                <td>
                  <div className="btn-action">
                    <Link
                      className="btn--operation btn--edit"
                      href={{
                        pathname: "/admin/adminRules/formUpdateRules",
                        query: { id: rules.id },
                      }}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                      Sửa
                    </Link>
                    <button className="btn--operation btn--delete">
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        onClick={() => deleteRules(rules.id)}
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

export default RenderAdminRules;
