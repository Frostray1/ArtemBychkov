import { Carousel } from "antd";
import React from "react";
import { SmileOutlined } from "@ant-design/icons";

const LandingCard = () => {
  return (
    <Carousel className="carousel">
      <div className="carouselBlock">
        <img src={require("../img/landing1.png")} alt="" />
      </div>
      <div className="carouselBlock">
        <img src={require("../img/whiteSite.png")} alt="" />
      </div>
      <div className="carouselBlock">
        <SmileOutlined className="smiledIcon" />
        <h3>Скоро появится обновление!</h3>
      </div>
    </Carousel>
  );
};

export default LandingCard;
