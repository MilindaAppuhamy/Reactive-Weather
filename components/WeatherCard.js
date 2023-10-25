import React from "react";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";

function WeatherCard(props) {
  console.log(props.data);
  let image;
  if (props.data.forecast === "Sunny") {
    image = sunny;
  } else if (props.data.forecast === "Rainy") {
    image = rainy;
  } else if (props.data.forecast === "Partly cloudy") {
    image = partlyCloudy;
  } else {
    image = cloudy;
  }

  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={image}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">The weather in {props.data.city} is,</h3>
        <h5 className="card-text">{props.data.temperature} C</h5>
        <h5 className="card-text">{props.data.forecast} day</h5>
      </div>
    </div>
  );
}

module.exports = WeatherCard;
