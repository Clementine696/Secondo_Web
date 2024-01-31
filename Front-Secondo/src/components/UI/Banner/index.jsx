import * as React from "react";
import "./index.css";
import { Carousel } from "react-bootstrap";
// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function BannerSlide() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Carousel>
            <Slider {...settings}>
                <div>
                    <img src="https://png.pngtree.com/background/20230619/original/pngtree-lebanese-e-commerce-visualized-in-3d-for-online-platforms-and-social-picture-image_3761208.jpg" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmWblTTk07WNyWkNcgojpIiMKwMoMSqZ-aw&usqp=CAU" />
                </div>
                <div>
                    <img src="https://png.pngtree.com/background/20230619/original/pngtree-lebanese-e-commerce-visualized-in-3d-for-online-platforms-and-social-picture-image_3761208.jpg" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmWblTTk07WNyWkNcgojpIiMKwMoMSqZ-aw&usqp=CAU" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmWblTTk07WNyWkNcgojpIiMKwMoMSqZ-aw&usqp=CAU" />
                </div>
            </Slider>
        </Carousel>
    );
}

export default BannerSlide;