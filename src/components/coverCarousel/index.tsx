import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AsNavFor: React.FC = () => {
    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);
    const [prevElement, setprevElement] = useState<number | null>(null);
    const sliderRef1 = useRef<Slider>(null);
    const sliderRef2 = useRef<Slider>(null);
    let numberPrev = useRef<number>(0);
    const elementRef0 = useRef<HTMLDivElement>(null);
    const elementRef1 = useRef<HTMLDivElement>(null);
    const elementRef2 = useRef<HTMLDivElement>(null);
    const elementRef3 = useRef<HTMLDivElement>(null);
    const currentElementRefs: React.RefObject<HTMLDivElement>[] = [
        elementRef0,
        elementRef1,
        elementRef2,
        elementRef3
    ];
    const imageCover = [
        "/images/iconImage/img/bestPlace-HaNoi.jpg",
        "/images/iconImage/img/bg-2.jpg",
        "/images/iconImage/img/bg-1.jpg",
        "/images/iconImage/img/bestPlace-SaiGon.jpg"
    ];

    const removeAnimation = (index: number | null) => {
        if (index != null) {
            const prevElementRef = currentElementRefs[index];
            prevElementRef.current?.querySelector('.title')?.classList.remove('animate-wiggle-1s');
            prevElementRef.current?.querySelector('.topic')?.classList.remove('animate-wiggle-1.2s');
            prevElementRef.current?.querySelector('.description')?.classList.remove('animate-wiggle-1.4s');
            prevElementRef.current?.querySelector('.buttons')?.classList.remove('animate-wiggle-1.6s');
        }
    }
    const renderAnimation = (index: number | null) => {
        if (index != null) {
            const currentElementRef = currentElementRefs[index];
            currentElementRef.current?.querySelector('.title')?.classList.add('animate-wiggle-1s');
            currentElementRef.current?.querySelector('.topic')?.classList.add('animate-wiggle-1.2s');
            currentElementRef.current?.querySelector('.description')?.classList.add('animate-wiggle-1.4s');
            currentElementRef.current?.querySelector('.buttons')?.classList.add('animate-wiggle-1.6s');
        }
    }
    const renderImage = (currentSlide: number) => {
        const imageCarouselElements = document.querySelector(`.imageCarousel-${currentSlide}`);
        const imageCarouselFace = document.querySelector(`.faceImageCarousel-${currentSlide}`);
        imageCarouselElements?.classList.add('animate-wiggle-0.6s');
        imageCarouselFace?.classList.add('z-10');
    }
    const blurImage = (currentSlide: number | null) => {
        const imageCarouselElements = document.querySelector(`.imageCarousel-${currentSlide}`);
        const imageCarouselFace = document.querySelector(`.faceImageCarousel-${currentSlide}`);
        imageCarouselElements?.classList.remove('animate-wiggle-0.6s');
        imageCarouselFace?.classList.remove('z-10');

    }
    useEffect(() => {
        if (sliderRef1.current && sliderRef2.current) {
            setNav1(sliderRef1.current);
            setNav2(sliderRef2.current);
        }
        renderAnimation(0);
        renderImage(0);
    }, []);

    useEffect(() => {
        removeAnimation(prevElement);
        blurImage(prevElement);
    }, [prevElement])

    return (
        <div className="slider-container h-full relative">
            <Slider
                dots={true}
                asNavFor={nav2 || undefined}
                ref={sliderRef1}
                arrows={false}
                fade={true}
                autoplay={true}
                speed={1000}
                autoplaySpeed={5000}
                afterChange={(currentSlide) => {
                    setprevElement(numberPrev.current);
                    numberPrev.current = currentSlide;
                    renderAnimation(currentSlide);
                    renderImage(currentSlide);
                }}
                appendDots={dots => (
                    <div
                        style={{
                            padding: "10px",
                            bottom: "586px",
                            left: "330px"
                        }}
                    >
                        <ul style={{ margin: "0px" }}>
                            {dots.map((dot, index) => (
                                <span key={index} className="mr-[80px]">
                                    {dot}
                                </span>
                            ))} </ul>
                    </div>
                )}
                customPaging={i => (
                    <div
                        className={`faceImageCarousel-${i} w-[150px] h-[220px] flex-shrink-0 relative`}
                    >
                        <Image
                            src={imageCover[i]}
                            alt="best-Hanoi"
                            width={500}
                            height={500}
                            priority={true}
                            className={`imageCarousel-${i} w-full h-full object-cover rounded-[20px] blur-[6px]`}
                            data-img={i} />
                    </div>
                )
                }
            >
                <div>
                    <div className="item relative w-full h-full">
                        <div className="overlay-cv w-full h-full bg-[#0000004d] absolute "></div>
                        <Image
                            src="/images/iconImage/img/bestPlace-HaNoi.jpg"
                            alt="best-Hanoi"
                            width={2000}
                            height={2000}
                            priority={true}
                            className="object-cover h-full w-full object-[0_-180px]"
                        />
                        <div
                            ref={elementRef0}
                            className="content absolute top-[34%] w-[1140px] max-w-[70%] left-[44%] transform translate-x-[-50%] pr-[30%] box-border text-[#fff] drop-shadow-[0_5px_10px_#00004]">
                            <div className="title text-[3rem] font-bold transform -translate-y-[-50px] blur-[20px]">CĂN HỘ CAO CẤP</div>
                            <div className="topic text-[1rem] font-bold leading-[1.3rem] text-main-color transform -translate-y-[-50px] blur-[20px]">TẠI <span>HÀ NỘI</span>
                            </div>
                            <div className="description transform -translate-y-[-60px] blur-[20px]">
                                Chỗ của chúng tôi cung cấp hầu hết nhu cầu của bạn để có một thời
                                gian lưu trú thoải mái. Căn hộ của chúng tôi nằm ngay trung tâm An
                                Thượng. Tuy nhiên, là một con đường yên tĩnh và bạn là trung tâm
                                của mọi thứ.
                            </div>
                            <div className="buttons grid grid-cols-2-130px mt-[20px] grid-rows-[40px] gap-[5px] transform -translate-y-[-60px] blur-[20px]">
                                <button className="bor border-0 bg-[#eee] tracking-[3px] font-[FontBanner] font-[500] text-[#000000]">Xem
                                    Thêm
                                </button>
                                <button
                                    className="border-[1px] border-[#fff] text-[#eee] tracking-[3px] font-[FontBanner] font-[500] bg-transparent ">Đặt
                                    Ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="item relative">
                        <div className="overlay-cv w-full h-full bg-[#0000004d] absolute "></div>
                        <Image
                            src="/images/iconImage/img/bg-2.jpg"
                            alt="best-Hanoi"
                            width={2000}
                            height={2000}
                            priority={true}
                            className="w-full h-full object-cover object-[0_-180px]" />
                        <div
                            ref={elementRef1}
                            className="content absolute top-[34%] w-[1140px] max-w-[70%] left-[44%] transform translate-x-[-50%] pr-[30%] box-border text-[#fff] drop-shadow-[0_5px_10px_#00004]">
                            <div className="title text-[3rem] font-bold transform -translate-y-[-50px] blur-[20px]">CĂN HỘ CAO CẤP</div>
                            <div className="topic text-[1rem] font-bold leading-[1.3rem] text-main-color transform -translate-y-[-50px] blur-[20px]">TẠI <span>NHA TRANG</span>
                            </div>
                            <div className="description transform -translate-y-[-60px] blur-[20px]">
                                Chỗ lưu trú của chúng tôi tọa lạc ngay tại trung tâm thành phố Nha Trang, mang đến một không gian yên tĩnh và riêng tư cho du khách, trong khi vẫn có lợi thế tiện lợi và dễ dàng tiếp cận các hoạt động và tiện ích của khu vực.
                            </div>
                            <div className="buttons grid grid-cols-2-130px mt-[20px] grid-rows-[40px] gap-[5px] transform -translate-y-[-60px] blur-[20px]">
                                <button className="bor border-0 bg-[#eee] tracking-[3px] font-[FontBanner] font-[500] text-[#000000]">
                                    Xem Thêm
                                </button>
                                <button
                                    className="border-[1px] border-[#fff] text-[#eee] tracking-[3px] font-[FontBanner] font-[500] bg-transparent ">
                                    Đặt Ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="item relative">
                        <div className="overlay-cv w-full h-full bg-[#0000004d] absolute "></div>
                        <Image
                            src="/images/iconImage/img/bg-1.jpg"
                            alt="best-Hanoi"
                            width={2000}
                            height={2000}
                            priority={true}
                            className="w-full h-full object-cover object-[0_-180px]" />
                        <div
                            ref={elementRef2}
                            className="content absolute top-[34%] w-[1140px] max-w-[70%] left-[44%] transform translate-x-[-50%] pr-[30%] box-border text-[#fff] drop-shadow-[0_5px_10px_#00004]">
                            <div className="title text-[3rem] font-bold transform -translate-y-[-50px] blur-[20px]">CĂN HỘ CAO CẤP</div>
                            <div className="topic text-[1rem] font-bold leading-[1.3rem] text-main-color transform -translate-y-[-50px] blur-[20px]">TẠI <span>HÀ NỘI</span>
                            </div>
                            <div className="description transform -translate-y-[-60px] blur-[20px]">
                                Chỗ của chúng tôi cung cấp hầu hết nhu cầu của bạn để có một thời
                                gian lưu trú thoải mái. Căn hộ của chúng tôi nằm ngay trung tâm An
                                Thượng. Tuy nhiên, là một con đường yên tĩnh và bạn là trung tâm
                                của mọi thứ.
                            </div>
                            <div className="buttons grid grid-cols-2-130px mt-[20px] grid-rows-[40px] gap-[5px] transform -translate-y-[-60px] blur-[20px]">
                                <button className="bor border-0 bg-[#eee] tracking-[3px] font-[FontBanner] font-[500] text-[#000000]">Xem
                                    Thêm
                                </button>
                                <button
                                    className="border-[1px] border-[#fff] text-[#eee] tracking-[3px] font-[FontBanner] font-[500] bg-transparent ">Đặt
                                    Ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="item relative">
                        <div className="overlay-cv w-full h-full bg-[#0000004d] absolute "></div>
                        <Image
                            src="/images/iconImage/img/bestPlace-SaiGon.jpg"
                            alt="best-Hanoi"
                            width={2000}
                            height={2000}
                            priority={true}
                            className="w-full h-full object-cover object-[0_-42px]" />
                        <div
                            ref={elementRef3}
                            className="content absolute top-[34%] w-[1140px] max-w-[70%] left-[44%] transform translate-x-[-50%] pr-[30%] box-border text-[#fff] drop-shadow-[0_5px_10px_#00004]">
                            <div className="title text-[3rem] font-bold transform -translate-y-[-50px] blur-[20px]">CĂN HỘ CAO CẤP</div>
                            <div className="topic text-[1rem] font-bold leading-[1.3rem] text-main-color transform -translate-y-[-50px] blur-[20px]">TẠI <span>HÀ NỘI</span>
                            </div>
                            <div className="description transform -translate-y-[-60px] blur-[20px]">
                                Chỗ của chúng tôi cung cấp hầu hết nhu cầu của bạn để có một thời
                                gian lưu trú thoải mái. Căn hộ của chúng tôi nằm ngay trung tâm An
                                Thượng. Tuy nhiên, là một con đường yên tĩnh và bạn là trung tâm
                                của mọi thứ.
                            </div>
                            <div className="buttons grid grid-cols-2-130px mt-[20px] grid-rows-[40px] gap-[5px] transform -translate-y-[-60px] blur-[20px]">
                                <button className="bor border-0 bg-[#eee] tracking-[3px] font-[FontBanner] font-[500] text-[#000000]">Xem
                                    Thêm
                                </button>
                                <button
                                    className="border-[1px] border-[#fff] text-[#eee] tracking-[3px] font-[FontBanner] font-[500] bg-transparent ">Đặt
                                    Ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider >

        </div >
    );
};

export default AsNavFor;
