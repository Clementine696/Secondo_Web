import * as React from "react";
import "./index.css";
import Carousel from 'react-bootstrap/Carousel';
// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import CCarousel from '@coreui/react/src/components/carousel/CCarousel'
// import '@coreui/coreui/dist/css/coreui.min.css'

// function BannerSlide() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 2
//     }
//     return (
//         <Carousel>
//             <Slider {...settings}>
//                 <div>
//                     <img src="https://png.pngtree.com/background/20230619/original/pngtree-lebanese-e-commerce-visualized-in-3d-for-online-platforms-and-social-picture-image_3761208.jpg" />
//                 </div>
//                 <div>
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmWblTTk07WNyWkNcgojpIiMKwMoMSqZ-aw&usqp=CAU" />
//                 </div>
//                 <div>
//                     <img src="https://png.pngtree.com/background/20230619/original/pngtree-lebanese-e-commerce-visualized-in-3d-for-online-platforms-and-social-picture-image_3761208.jpg" />
//                 </div>
//                 <div>
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmWblTTk07WNyWkNcgojpIiMKwMoMSqZ-aw&usqp=CAU" />
//                 </div>
//                 <div>
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmWblTTk07WNyWkNcgojpIiMKwMoMSqZ-aw&usqp=CAU" />
//                 </div>
//             </Slider>
//         </Carousel>
//     );
// }

// function BannerSlide() {
//     return (
//         <CCarousel controls indicators>
//             <CCarouselItem>
//                 <CImage className="d-block w-100" src="https://png.pngtree.com/background/20230619/original/pngtree-lebanese-e-commerce-visualized-in-3d-for-online-platforms-and-social-picture-image_3761208.jpg" alt="slide 1" />
//             </CCarouselItem>
//             <CCarouselItem>
//                 <CImage className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmWblTTk07WNyWkNcgojpIiMKwMoMSqZ-aw&usqp=CAU" alt="slide 2" />
//             </CCarouselItem>
//             <CCarouselItem>
//                 <CImage className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmWblTTk07WNyWkNcgojpIiMKwMoMSqZ-aw&usqp=CAU" alt="slide 3" />
//             </CCarouselItem>
//         </CCarousel>
//     );
// }

function BannerSlide() {
    return (
        <Carousel className="custom-carousel">
            <Carousel.Item>
                <img
                    className="img-slide-banner"
                    src="https://png.pngtree.com/background/20230619/original/pngtree-lebanese-e-commerce-visualized-in-3d-for-online-platforms-and-social-picture-image_3761208.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-slide-banner"
                    src="https://newsismybusiness.com/wp-content/uploads/2021/07/e-commerce.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-slide-banner"
                    src="https://img.pikbest.com/backgrounds/20220119/e-commerce-carnival-shopping-colorful-gradient-e-commerce-event-poster-background_6243918.jpg!bw700"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerSlide;