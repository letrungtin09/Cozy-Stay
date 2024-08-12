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

const RenderAdminAccount = () => {
  const apiUser = `${localUrl}/api/user?all`;
  const [dataUser, setDataUser] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, [apiUser]);

  const fetchData = async () => {
    try {
      const res = await ApiFunctions.getData(apiUser);
      const dataRes = res.user;
      const sortData = dataRes.sort(function (a: any, b: any) {
        return b.id - a.id;
      });
      setDataUser(sortData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAccount = async (id: any) => {
    const apiUser2 = `${localUrl}/api/user?id=${id}`;
    try {
      const res = await ApiFunctions.deleteData(apiUser2).then(() => {
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
        <h2>Quản lý tài khoản</h2>
      </div>
      <div className="content-adminBottom">
        <table>
          <thead>
            <th>id</th>
            <th>tên người dùng</th>
            <th>Ảnh đại diện</th>
            <th>email</th>
            <th>số điện thoại</th>
            <th>thao tác</th>
          </thead>
          <tbody className="infoCate">
            {dataUser.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td className="d-flex justify-center">
                  <img
                    className="w-[50px]"
                    src={`images/${user.avatar}`}
                    alt=""
                  />
                </td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>

                <td>
                  <div className="btn-action">
                    <button className="btn--operation btn--delete">
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        onClick={() => deleteAccount(user.id)}
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

export default RenderAdminAccount;
