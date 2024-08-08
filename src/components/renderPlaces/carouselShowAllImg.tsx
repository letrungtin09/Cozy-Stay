import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import Slider from "react-slick";
import React, { useEffect, useRef } from "react";

const CarouselShowFullImg: React.FC = ({ onChangeOverLAy, dataLishImg, indexImg }: any) => {
    const sliderRef = useRef<Slider | null>(null);

    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} !h-full !w-[50px] arrow-after`}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} !h-full arrow-before`}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(indexImg);
        }
    }, []);
    const handleContentClick = (e: any) => {
        e.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
    };
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div
            className="w-full h-full fixed top-0 bg-color-black-2/50 z-[100000] flex justify-center items-center"
            onClick={onChangeOverLAy}
        >

            <div
                className="slider-container max-w-[66%]"
                onClick={handleContentClick}
            >
                <Slider {...settings} ref={sliderRef}>
                    {dataLishImg.map((image: any, index: number) => (
                        <div
                            key={index}
                            className="h-[90vh] rounded-[6px] flex justify-center" >
                            <Image
                                key={index}
                                src={`/images/places/${image}`}
                                alt="imagePlaces"
                                width={10000}
                                height={10000}
                                priority={true}
                                className="relative rounded-[6px] h-full w-auto object-contain m-auto"
                            />

                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
export default CarouselShowFullImg;