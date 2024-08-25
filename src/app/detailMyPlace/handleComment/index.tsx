import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import moment from 'moment';
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import UserCurrent from "@/lib/currentUser";

interface DetailCommentProps {
    idPlace: number;
}

interface Comment {
    id: number; // Thêm thuộc tính id
    content: string;
    date: string;
}

interface ApiResponse {
    comment: Comment[];
}

const HandleComment: React.FC<DetailCommentProps> = ({ idPlace }) => {
    const [avatar, setAvatar] = useState<string | null>(null);
    const [commentData, setCommentData] = useState<ApiResponse | null>(null);
    const [showCmtInput, setShowCmtInput] = useState<boolean>(false);
    const [commentInput, setCommentInput] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const idUser = UserCurrent.GetUserId();
    const apiSendComment = `${localUrl}/api/comment`;

    const formatDate = (dateString: string) => moment(dateString).format('DD-MM-YYYY');
    const formatTime = (dateString: string) => moment(dateString).format('HH:mm:ss');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Lấy avatar
                const apiUser = `${localUrl}/api/user?id=${idUser}`;
                const resUser = await ApiFunctions.getData(apiUser);
                if (resUser?.user?.[0]?.avatar) {
                    setAvatar(resUser.user[0].avatar);
                }

                // Lấy bình luận
                const apiComment = `${localUrl}/api/comment?idPlaceAndIdUser=${idPlace}&idUser=${idUser}`;
                const resComment = await ApiFunctions.getData(apiComment);
                if (resComment?.comment?.length > 0) {
                    setCommentData(resComment);
                    setCommentInput(resComment.comment[0].content); // Cập nhật giá trị của commentInput
                }
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
        };

        fetchData();
    }, [idPlace, idUser]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommentInput(event.target.value); // Cập nhật giá trị của commentInput
    };

    const sendComment = async (event: React.FormEvent) => {
        event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

        if (commentInput.trim() === '') {
            return; // Nếu không có bình luận, không gửi gì
        }

        try {
            const isCommentExist = commentData?.comment.some(c => c.content === commentInput);

            if (isCommentExist) {
                console.log("Bình luận đã tồn tại!");
                return; // Nếu bình luận đã tồn tại, không gửi bình luận mới
            }
            if (commentData) {
                // Cập nhật bình luận hiện tại
                const response = await ApiFunctions.putData(apiSendComment, {
                    id: commentData.comment[0].id,
                    content: commentInput
                });

                if (response.success) {
                    // Cập nhật bình luận trong trạng thái
                    setCommentData(prevState => {
                        if (prevState) {
                            return {
                                ...prevState,
                                comment: prevState.comment.map(comment =>
                                    comment.id === commentData.comment[0].id
                                        ? { ...comment, content: commentInput }
                                        : comment
                                )
                            };
                        }
                        return prevState; // Trả về prevState nếu là null
                    });
                    setShowCmtInput(false); // Ẩn trường nhập liệu sau khi gửi
                }
            } else {
                // Tạo bình luận mới
                const response = await ApiFunctions.postData(apiSendComment, {
                    idPlace,
                    idUser,
                    content: commentInput
                });

                if (response.success) {
                    // Thêm bình luận mới vào trạng thái
                    setCommentData(prevState => ({
                        ...prevState,
                        comment: [
                            ...(prevState?.comment || []), // Sử dụng giá trị mặc định nếu prevState.comment là null
                            {
                                id: response.newCommentId, // Giả sử API trả về ID của bình luận mới
                                content: commentInput,
                                date: new Date().toISOString() // Thay thế bằng ngày hiện tại
                            }
                        ]
                    }));
                    setShowCmtInput(false); // Ẩn trường nhập liệu sau khi gửi
                }
            }
        } catch (error) {
            console.error('Lỗi khi gửi bình luận:', error);
        }
    };

    const handleDeleteComment = async () => {
        if (commentData && commentData.comment.length > 0) {
            try {
                const apiDelComment = `${localUrl}/api/comment?id=${commentData.comment[0].id}`;
                const resDelCmt = await ApiFunctions.deleteData(apiDelComment);
                setCommentData(prevState => {
                    if (prevState) {
                        return {
                            ...prevState,
                            comment: prevState.comment.filter(comment => comment.id !== commentData.comment[0].id)
                        };
                    }
                    return prevState;
                });
                setCommentData(null);
                setCommentInput(''); // Xóa input nếu cần
                setShowCmtInput(false); // Ẩn trường nhập liệu sau khi xóa
            } catch (error) {
                console.error('Lỗi khi xóa bình luận:', error);
            }
        }
    };

    const toggleCmtInput = () => {
        console.log(commentInput)
        setShowCmtInput(true);
    };

    return (
        <div className="detailInfo__comment w-[70%]">
            <div className="info-title">
                <h3>Cảm nghĩ của bạn về nơi này</h3>
            </div>
            {(commentData) && (
                <div className="comment-show">
                    <div className="comment-avatar">
                        <Image
                            src={`/images/${avatar || 'default-avatar.png'}`}
                            alt="icon-user"
                            width={2000}
                            height={2000}
                            priority={true}
                            className="account-icon icon-header"
                        />
                    </div>
                    <div className="comment-content min-w-[90%]">
                        <div className="comment-text">
                            <div className="comment-name">Bạn</div>
                            {commentData?.comment?.[0]?.content || "Không có bình luận nào"}
                        </div>
                        <div className="comment-action">
                            <div className="comment-date">
                                {commentData ? `${formatDate(commentData.comment[0]?.date)} ${formatTime(commentData.comment[0]?.date)}` : "Không có ngày"}
                            </div>
                            <div className="comment-btn">
                                <button className="btn-editCmt" onClick={toggleCmtInput}>Chỉnh sửa</button>
                                <button className="btn-deleteCmt" onClick={handleDeleteComment}>Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {(showCmtInput || !commentData) && (
                <div className="comment-form">
                    <form onSubmit={sendComment}>
                        <input
                            ref={inputRef} // Gán tham chiếu cho input
                            value={commentInput}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Viết bình luận..."
                        />
                        <button type="submit">Gửi bình luận</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default HandleComment;
