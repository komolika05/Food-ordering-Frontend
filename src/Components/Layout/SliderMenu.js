import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderMenu.css";
import recommendedImage from "./../../images/Recommended.png";
import Rice from "../../images/Rice.jpeg";
import Noodles from "../../images/Noodles.png";
import Soup from "../../images/Soup.jpeg";
import Starter from "../../images/Starters.png";

const ItemSlider = ({ items, onMenuItemClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: items.length,
    slidesToScroll: 1,
  };

  const handleItemClick = (itemName) => {
    onMenuItemClick(itemName);
  };

  return (
    <div className={"sliderContainer"}>
      <h2 style={{ marginTop: "49px" }}>What's on Your Mind Today?</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            className={"sliderItem"}
            onClick={() => handleItemClick(item.name)}
          >
            <div className={"imageContainer"}>
              <img src={item.image} alt={`Slide ${index}`} />
            </div>
            <br />
            <label>{item.name}</label>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const ScrollMenu = ({ onMenuItemClick, items }) => {
  const images = [recommendedImage, Rice, Noodles, Soup, Starter];

  return (
    <div>
      <ItemSlider
        items={items.map((item, index) => ({
          name: item,
          image: images[index],
        }))}
        onMenuItemClick={onMenuItemClick}
      />
    </div>
  );
};

export default ScrollMenu;
