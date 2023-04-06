import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideBanner } from "../img/img";
import Products from "../Products/Products";
import "./Home.scss";

export default class Home extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: false,
    };

    return (
      <>
        <section>
          <Slider {...settings}>
            {SlideBanner.map((slide, index) => {
              return (
                <>
                  <div className="slide-banner">
                    <div className="slide-image">
                      <img src={slide.image} alt="" />
                    </div>
                    <div className="slide-image">
                      <img src={slide.image1} alt="" />
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
          <Products />
        </section>
      </>
    );
  }
}
