import Image from "next/image";
import { Carousel } from "@material-tailwind/react";

const CarouselRenderPlaces: React.FC = ({ imageAr, onChangeData }: any) => {
    const showFullImage = (image: any, index: number) => {
        onChangeData(image, index);
    }

    return (
        <Carousel
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            {imageAr.map((image: any, index: number) => (
                <Image
                    key={index}
                    src={`/images/places/${image}`}
                    alt="imagePlaces"
                    width={2000}
                    height={2000}
                    priority={true}
                    className="w-full transition-transform duration-300 hover:brightness-75 hover:cursor-custom"
                    onClick={() => showFullImage(imageAr, index)}
                />
            ))}
        </Carousel>
    );
}
export default CarouselRenderPlaces;