import React, { useState, useEffect, useRef } from "react";
import localUrl from "@/lib/const";
import ApiFunctions from "@/lib/api";
import UserCurrent from "@/lib/currentUser";
import { useRouter } from 'next/navigation'; // Use next/navigation

const PaymemtWallet: React.FC = ({ onCodeChange, onCodeVerify, errorVerify, onResendCode }: any) => {
    const [amount, setAmount] = useState(0);
    const [checkMoney, setCheckMoney] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [newWallet, setNewWallet] = useState();
    const idCurrent = UserCurrent.GetUserId();
    const router = useRouter();
    const apiWallet: string = `${localUrl}/api/wallet`;

    const formatCurrency = (value: any) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    const handleAmountChange = (e: any) => {
        const value = e.target.value.replace(/\./g, '');
        setAmount(Number(value));
    };

    const incrementAmount = () => {
        setAmount(prevAmount => prevAmount + 100000);
    };

    const decrementAmount = () => {
        setAmount(prevAmount => (prevAmount - 100000 >= 0 ? prevAmount - 100000 : 0));
    };

    useEffect(() => {
        handlePayMent(newWallet, amount);
    }, [newWallet]);

    const handlePayMent = async (numberId: any, moneyNumber: any) => {
        const apiPayment: string = `${localUrl}/api/createPayment`;
        const dataPayment: any = {
            id: numberId,
            money: moneyNumber
        }

        try {
            const res = await ApiFunctions.postData(apiPayment, dataPayment);
            await addQrLink(newWallet, res.paymentLinkData.checkoutUrl, res.paymentLinkData.paymentLinkId);
            await router.push(res.paymentLinkData.checkoutUrl);
        } catch (error) {
            setIsLoading(false);
            console.error("Payment failed:", error);
        }
    }

    const addQrLink = async (numberId: any, linkQr: any, linkQrId: any) => {
        const dataWallet: any = {
            id: numberId,
            linkQr: linkQr,
            linkQrId: linkQrId
        }
        try {
            const res = await ApiFunctions.putData(apiWallet, dataWallet);
        } catch (error) {
            console.error("Payment failed:", error);
        }
    }

    const handleSendWallet = (numberId: any, status: any, moneyNumber: any) => {
        if (isLoading) return;
        setIsLoading(true);
        const dataWallet: any = {
            id: numberId,
            status: status,
            moneyNumber: moneyNumber
        }
        ApiFunctions.postData(apiWallet, dataWallet)
            .then((res) => {
                setNewWallet(res.data.insertId);
            });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        try {
            if (amount >= 1000) {
                setCheckMoney(false)
                handleSendWallet(idCurrent, 2, amount);
            } else {
                setCheckMoney(true)
            }
        } catch (error) {
            console.error('API call failed:', error);
        }
    };

    const handleCancel = (e: any) => {
        e.preventDefault();
        if (confirm("Bạn có muốn hủy việc nạp tiền?")) {
            onCodeChange(false);
        }
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
                        type="button"
                        className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
                        onClick={handleCancel}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-600">Xác nhận nạp tiền</h2>
                    <div className="mb-6">
                        <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">Nhập số tiền muốn nạp</label>
                        <div className="flex items-center">
                            <button type="button" onClick={decrementAmount} className="px-4 py-2 bg-gray-300 rounded-l-full">-</button>
                            <input
                                type="text"
                                value={formatCurrency(amount)}
                                onChange={handleAmountChange}
                                className="shadow appearance-none border-t border-b w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                            />
                            <button type="button" onClick={incrementAmount} className="px-4 py-2 bg-gray-300 rounded-r-full">+</button>
                        </div>
                        {checkMoney && (
                            <div className="text-red-700 mt-2">Nạp tối thiểu 1.000 vnđ.</div>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-btnColorGreen hover:bg-btnColorGreen-hover text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                        >
                            Xác nhận
                        </button>
                    </div>
                </form>
            </div>
        </>


    );
}
export default PaymemtWallet;