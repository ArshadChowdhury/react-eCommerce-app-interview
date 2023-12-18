import { useNavigate } from "react-router-dom";
import shoppingData from "./shoppingData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slidecard = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redirect the user to the desired page
    navigate("/all-products"); // Replace '/collections' with the actual path
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // appendDots: (dots) => {
    //   return <ul style={{ margin: "0px" }}>{dots}</ul>;
    // },
  };
  return (
    <>
      <Slider {...settings}>
        {shoppingData.map((value, index) => {
          return (
            <div className="box d_flex top" key={index}>
              <div className="left">
                <h1>{value.title}</h1>
                <p>{value.desc}</p>
                <button
                  onClick={handleButtonClick}
                  className="btn-primary"
                  aria-hidden="false"
                >
                  Visit Collections
                </button>
              </div>
              <div className="right">
                <img
                  src={value.cover}
                  alt="slider-image"
                  fetchpriority="high"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Slidecard;
