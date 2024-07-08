import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
const FillterCarousel: React.FC = () => {

    return (
        <>
            <div className="line"></div>
            <Slider
                className={"center"}
                infinite={true}
                centerPadding={"60px"}
                slidesToShow={5}
                swipeToSlide={true}
                afterChange={function (index) {
                    console.log(
                        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                    );
                }}
                prevArrow={<button className="prev-arrow">Previous</button>}
                nextArrow={<button className="next-arrow text-red-500"><h1>sdsd</h1></button>}
            >
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
                <div>
                    <h3>9</h3>
                </div>
            </Slider>
            {/* <div className="filter__container section-padding">
                <div className="filter__slider">
                    <div className="filter__list">
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item active">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__icon"><i className="fa fa-home"></i></div>
                            <div className="filter__text">Nhà ở Boutique</div>
                        </div>
                    </div>

                    <div className="filter__btnNextPrev">
                        <div className="prev-container">
                            <button id="prev-filter" className="btn-prev"><i className="fa fa-angle-left"></i></button>
                        </div>
                        <div className="next-container">
                            <button id="next-filter" className="btn-next"><i className="fa fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="filter__btnFilter">
                    <button className="btn-filter"><i className="fa fa-filter"></i> Bộ lọc</button>
                </div>
            </div> */}
        </>
    )
}
export default FillterCarousel;