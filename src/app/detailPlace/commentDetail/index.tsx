import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from 'moment';
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";

interface Comment {
    id: number;
    date: string;
    content: string;
    idUser: number;
}

interface User {
    id: number;
    userName: string;
    avatar: string;
}

interface DetailCommentProps {
    idPlace: number;
}

const DetailComment: React.FC<DetailCommentProps> = ({ idPlace }) => {
    const [commentData, setCommentData] = useState<Comment[]>([]);
    const [userData, setUserData] = useState<Record<number, User>>({});
    const [visibleComments, setVisibleComments] = useState(4);

    const formatDate = (dateString: string) => {
        return moment(dateString).format('DD-MM-YYYY');
    };

    const formatTime = (dateString: string) => {
        return moment(dateString).format('HH:mm:ss');
    };

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const urlComment: string = `${localUrl}/api/comment?idPlace=${idPlace}`;
                const res = await ApiFunctions.getData(urlComment);

                if (res.places && res.places.length > 0) {
                    // Set comments data
                    setCommentData(res.places);

                    // Fetch user details for each comment
                    const userPromises = res.places.map((comment: Comment) =>
                        ApiFunctions.getData(`${localUrl}/api/user?id=${comment.idUser}`)
                            .then(res => ({
                                id: comment.idUser,
                                userName: res.user[0]?.userName || 'Unknown',
                                avatar: res.user[0]?.avatar || '/images/default-avatar.jpg'
                            }))
                    );

                    const users = await Promise.all(userPromises);

                    // Map users to userMap
                    const userMap = users.reduce((acc: Record<number, User>, user) => {
                        acc[user.id] = user;
                        return acc;
                    }, {});

                    // Set user data
                    setUserData(userMap);
                } else {
                    // No comments available
                    setCommentData([]);
                    setUserData({});
                }
            } catch (error) {
                // Handle error
                console.error("Lỗi khi gọi API:", error);
                // Optionally, you could set empty state or show error message
                setCommentData([]);
                setUserData({});
            }
        };

        fetchComments();

        // Optional cleanup function if needed
        return () => {
            // Clean up logic if needed
        };
    }, [idPlace]);

    // Hàm xử lý khi nhấn nút "Xem thêm"
    const handleLoadMore = () => {
        setVisibleComments((prev) => prev + 4);
    };
    return (
        <section className="detailComment py-[30px]">
            <div className="info-title">
                <h3>Bình luận từ khách hàng</h3>
            </div>
            <div className="detailComment__allCmt">
                {commentData.slice(0, visibleComments).map((data: Comment) => (
                    <div className="detailComment__item" key={data.id}>
                        <div className="detailComment__user">
                            <div className="detailComment__avatar">
                                <Image
                                    src={`/images/${userData[data.idUser]?.avatar}` || "/images/user.jpg"}
                                    alt="avatar"
                                    width={100}
                                    height={100}
                                    priority={true}
                                />
                            </div>
                            <div className="detailComment__intro">
                                <div className="detailComment__name">
                                    {userData[data.idUser]?.userName || "Đang tải..."}
                                </div>
                                <div className="detailComment__date">
                                    {formatTime(data.date)} {formatDate(data.date)}
                                </div>
                            </div>
                        </div>
                        <div className="detailComment__content">
                            {data.content}
                        </div>
                    </div>
                ))}
            </div>
            {visibleComments < commentData.length && (
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handleLoadMore}
                        className="px-6 py-2 rounded-lg"
                    >
                        Xem thêm
                    </button>
                </div>
            )}
        </section>
    );
};

export default DetailComment;
