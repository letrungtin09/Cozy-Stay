import React, { useState, useEffect, useRef } from "react";

const VerifyEmailCode: React.FC = ({ onCodeChange, onCodeVerify, errorVerify, onResendCode, onHandleButton, isActive, setIsActive }: any) => {
    const [code, setCode] = useState('');
    const [countdown, setCountdown] = useState(0); // State để lưu bộ đếm
    const [counting, setCounting] = useState(false);

    const startCountdown = () => {
        setCounting(true);
        setCountdown(50); // Đặt bộ đếm là 50
    };

    useEffect(() => {
        let timer: any;
        if (counting) {
            timer = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1); // Giảm bộ đếm đi 1 mỗi giây
                if (countdown === 0) {
                    clearInterval(timer);
                    setCounting(false);
                }
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [counting, countdown]);

    const handleSubmit = (e: any) => {
        if (isActive) return;
        setIsActive(true)

        e.preventDefault();
        // Xử lý mã xác minh ở đây
        onCodeVerify(code)
    };

    const handleCancel = (e: any) => {
        e.preventDefault();
        if (confirm("Bạn có muốn hủy việc nhập mã xác nhận?")) {
            onCodeChange(false);
        }
        onHandleButton(false);
    };

    const handleResendCode = (e: any) => {
        onResendCode();
        startCountdown();
    };
    return (
        <>
            <div className="fixed z-[1000] w-full h-full top-0 w-screen h-screen bg-color-gray-0 opacity-[0.95] blur-md" onClick={handleCancel}></div>
            <div className="flex z-[2000] items-center justify-center absolute top-[40%] left-[50%] transform translate-x-[-30%] translate-y-[-30%] blur-[20px] animate-checkCode-1s">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white opacity-[1] w-[500px] blur-none p-8 rounded-3xl shadow-lg transition-transform transform hover:scale-105 relative"
                >
                    <button
                        type="button" // Set type as button to prevent form submission
                        className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
                        onClick={handleCancel} // Implement handleCancel function to handle the close action
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-600">Xác nhận email</h2>
                    <div className="mb-6">
                        <label htmlFor="code" className="block text-gray-700 font-medium mb-2">Nhập mã xác nhận</label>
                        <input
                            type="text"
                            id="code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                        />
                        {errorVerify && (
                            <div className="text-red-700 mt-2">Sai mã xác nhận. Vui lòng thử lại.</div>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={isActive}
                            className="bg-btnColorGreen hover:bg-btnColorGreen-hover text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                        >
                            Xác nhận
                        </button>
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-700 font-medium focus:outline-none"
                            onClick={handleResendCode}
                            disabled={counting}
                        >
                            {counting ? `Gửi lại sau ${countdown}s` : 'Gửi lại mã xác nhận'}
                        </button>
                    </div>
                </form>
            </div>


        </>

    );
}
export default VerifyEmailCode;