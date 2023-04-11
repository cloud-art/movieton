import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div style={{backgroundColor: `green`}}>
            <h3>1</h3>
          </div>
          <div style={{backgroundColor: `green`}}>
            <h3>2</h3>
          </div>
          <div style={{backgroundColor: `green`}}>
            <h3>3</h3>
          </div>
          <div style={{backgroundColor: `green`}}>
            <h3>4</h3>
          </div>
          <div style={{backgroundColor: `green`}}>
            <h3>5</h3>
          </div>
          <div style={{backgroundColor: `green`}}>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
