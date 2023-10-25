import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";
import WeatherCard from "./WeatherCard";

export default function Location(props) {
  const { data, location } = props;

  const city = data.find((elem) => elem.city === location);

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

  return city ? <WeatherCard data={city} /> : <div>Location not found</div>;
}
