import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./SliderMenu.module.css";
import recommendedImage from "./../../images/Recommended.png";
import Rice from "../../images/Rice.jpeg";
import Noodles from "../../images/Noodles.png";
import Soup from "../../images/Soup.jpeg";
import Starter from "../../images/Starters.png";

const ImageSlider = ({ images, onMenuItemClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: images.length,
    slidesToScroll: 1,
  };

  const handleItemClick = (itemName) => {
    onMenuItemClick(itemName);
  };

  return (
    <div className={classes.sliderContainer}>
      <h2 style={{ marginTop: "49px" }}>What's on Your Mind Today?</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={classes.sliderItem}>
            <a
              onClick={() =>
                handleItemClick(image.split("/").pop().split(".")[0])
              }
            >
              <div className={classes.imageContainer}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
              <br />
              <label>{image.split("/").pop().split(".")[0]}</label>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const ScrollMenu = ({ onMenuItemClick }) => {
  const images = [recommendedImage, Rice, Noodles, Soup, Starter];

  return (
    <div>
      <ImageSlider images={images} onMenuItemClick={onMenuItemClick} />
    </div>
  );
};

export default ScrollMenu;
