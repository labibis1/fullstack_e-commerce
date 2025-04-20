import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          padding: "0px",
          position: "absolute",
          bottom: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          borderRadius: "5px",
          color: "black",
          border: "1px black solid",
          background: "white",
        }}
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                padding: "0px",
                position: "absolute",
                bottom: "10px",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={{
                width: "20px",
                height: "20px",
                fontSize: "12px",
                // borderRadius: "5px",
                color: "black",
                border: "1px black solid",
                background: "white",
              }}
            >
              {i + 1}
            </div>
          ),
        },
      },
//..................mobile device ..................................//
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            appendDots: (dots) => (
              <div
                style={{
                  padding: "0px",
                  position: "absolute",
                  bottom: "2px",
                }}
              >
                <ul style={{ margin: "0px" }}> {dots} </ul>
              </div>
            ),
            customPaging: (i) => (
              <div
                style={{
                  width: "12px",
                  height: "14px",
                  fontSize: "8px",
                  // borderRadius: "5px",
                  color: "black",
                  border: "1px black solid",
                  background: "white",
                }}
              >
                {i + 1}
              </div>
            ),
          },
      }
    ],
  };
  return (
    <section>
      <div className="container">
        <Slider {...settings}>
          <img
            src="https://img.lazcdn.com/us/domino/2168d84d-2b1f-40e4-96ac-5602a609a925_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt=""
          />
          <img
            src="https://img.lazcdn.com/us/domino/939b1f56-bccc-4b70-8dd3-3733f25247c5_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt=""
          />
          <img
            src="https://img.lazcdn.com/us/domino/99fe98a6-17f7-4170-89a1-41c16fc2b994_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt=""
          />
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
