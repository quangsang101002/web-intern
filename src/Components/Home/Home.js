import React, { useState } from "react";
import { SlideBanner } from "../img/img";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import Products from "../Products/Products";
import "./Home.scss";
const Home = () => {
  const [current, setCurrent] = useState(0);
  const lengtSide = SlideBanner.length;
  console.log("lenght", lengtSide);
  const prevSide = () => {
    // setCurrent(current === lengtSide - 1 ? 0 : 0);
    setCurrent(current === 0 ? lengtSide - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === lengtSide - 1 ? 0 : current + 1);
  };
  // setTimeout(prevSide, 4000);
  return (
    <>
      <section className="slide-wrapper">
        <AiOutlineLeft className="left-arrow" onClick={prevSide} />
        <AiOutlineRight className="right-arrow" onClick={nextSlide} />
        {SlideBanner.map((slide, index) => {
          return (
            <>
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {current === index && <img src={slide.image} alt="banner1" />}
              </div>
            </>
          );
        })}
      </section>
      <Products />
    </>
  );
};

export default Home;
