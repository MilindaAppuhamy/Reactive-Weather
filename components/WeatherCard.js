import React from "react";

function WeatherCard(props) {
  const { data } = props;

  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={data?.current?.condition.icon}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{data?.location?.name},</h3>
        <h3 className="card-title">{data?.location?.region},</h3>
        <h4 className="card-title">{data?.location?.country}.</h4>
        <h5
          className="card-text"
          style={{
            paddingTop: "20px",
          }}
        >
          {data?.current?.feelslike_c} C
        </h5>
        <h5 className="card-text">{data?.current?.condition.text}</h5>
      </div>
    </div>
  );
}

module.exports = WeatherCard;
