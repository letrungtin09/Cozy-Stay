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

const RenderAdminComment = () => {
  const apiComment = `${localUrl}/api/comment`;
  const apiUser = `${localUrl}/api/user`;
  const apiPlaces = `${localUrl}/api/places`;
  const [dataPlace, setDataPlace] = useState<any[]>([]);
  const [dataUser, setDataUser] = useState<any[]>([]);
  const [dataComment, setDataComment] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiPlaces);
        const dataRes = res.places;
        setDataPlace(dataRes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiPlaces]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiUser);
        setDataUser(res.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiUser]);

  useEffect(() => {
    fetchData();
  }, [apiComment]);

  const fetchData = async () => {
    try {
      const res = await ApiFunctions.getData(apiComment);
      const dataRes = res.comment;
      setDataComment(dataRes);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (id: any) => {
    const apiComment = `${localUrl}/api/comment?id=${id}`;
    try {
      const res = await ApiFunctions.deleteData(apiComment).then(() => {
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
        <h2>Quản lý bình luận</h2>
      </div>
      <div className="content-adminBottom">
        <table>
          <thead>
            <th>id</th>
            <th>nội dung</th>
            <th>ngày bình luận</th>
            <th>Chỗ ở</th>
            <th>Người bình luận</th>
            <th>thao tác</th>
          </thead>
          <tbody className="infoCate">
            {dataComment.map((cmt) => (
              <tr key={cmt.id}>
                <td>{cmt.id}</td>
                <td>{cmt.content}</td>
                <td>{cmt.date}</td>
                <td>
                  {dataPlace.map((place) =>
                    cmt.idPlace == place.id ? <>{place.title}</> : <></>
                  )}
                </td>
                <td>
                  {dataUser.map((user) =>
                    cmt.idUser == user.id ? <>{user.userName}</> : <></>
                  )}
                </td>
                <td>
                  <div className="btn-action">
                    <button className="btn--operation btn--delete">
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        onClick={() => deleteComment(cmt.id)}
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

export default RenderAdminComment;
