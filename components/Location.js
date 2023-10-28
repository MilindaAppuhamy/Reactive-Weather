import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";
import WeatherCard from "./WeatherCard";
import "dotenv/config";
import { useEffect, useState } from "react";

export default function Location(props) {
  const { location } = props;
  const [city, setCity] = useState({});

  async function getWeather() {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=no`
    );
    const data = await res.json();
    setCity(data);
  }

  useEffect(() => {
    getWeather();
  }, [location]);

  return city ? <WeatherCard data={city} /> : <div>Location not found</div>;
}
