'use client';
import Image from 'next/image';
export default function HeaderComponent() {
    return (
        <header className="fixed top-0 bg-white-color w-full z-50">
            <div className="container-hd w-90% my-0 mx-5% flex justify-between">
                <div className="col w-10% py-15 px-0 text-center">
                    <Image
                        src="/images/iconImage/img/CozyStay.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className='cursor-pointer w-90%'
                        priority={true}
                    />
                </div>
                <div className="col w-50% flex items-center">
                    <ul className="menu-hd w-full flex justify-around m-0 items-center">
                        <li className="font-banner tracking-1px list-none text-15px">
                            <a className="uppercase text-black-color text no-underline font-bold" href="#">Đặt chổ</a>
                        </li>
                        <li className="font-banner tracking-1px list-none text-15px">
                            <a className="uppercase text-black-color text no-underline font-bold" href="#">Chổ ở tốt nhất</a>
                        </li>
                        <li className="font-banner tracking-1px list-none text-15px">
                            <a className="uppercase text-black-color text no-underline font-bold" href="#">Bài viết</a>
                        </li>
                        <li className="font-banner tracking-1px list-none text-15px">
                            <span className="uppercase text-black-color font-bold cursor-pointer">Ngôn ngữ </span>
                        </li>
                        <li className="font-banner tracking-1px list-none text-15px">
                            <div id="btn-menu" className="w-85px rounded-90px border-2px border-black-color flex justify-evenly">
                                <span className="btn-menu-item-1">
                                    <Image
                                        src="/images/iconImage/img/icon-user.png"
                                        alt="logo"
                                        width={100}
                                        height={100}
                                        className='cursor-pointer w-20px my-8px mx-4px'
                                        priority={true}
                                    />
                                </span>
                                <span className="btn-menu-item-2">
                                    <Image
                                        src="/images/iconImage/img/icon-menu.png"
                                        alt="logo"
                                        width={100}
                                        height={100}
                                        className='cursor-pointer w-20px my-8px mx-4px'
                                        priority={true}
                                    />
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    );
}