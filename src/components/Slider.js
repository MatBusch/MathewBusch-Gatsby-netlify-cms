/* eslint-disable */
import React, { Component } from "react";
import Slider from "react-slick";

export default class Fade extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: false,
            nextArrow: false,

        };
        return (
            <div className="homeSlider">
                <div className="overlay">
                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                    <style>{cssstyle}</style>
                    <Slider {...settings}>
                        <div>
                            <img src="../img/image01.jpg" />
                        </div>
                        <div>
                            <img src="../img/image02.jpg" alt="My Awesome Image" />
                        </div>
                        <div>
                            <img src="../img/image03.jpg" alt="wow" />
                        </div>
                        <div>
                            <img src="../img/image04.jpg" alt="skkrt" />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

const cssstyle = `
.homeSlider{
position: relative; 
overflow: hidden; 
height: 100%;
}
.overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #26292e;
    opacity: 0.7;
    z-index: 0;
}
`