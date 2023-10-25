import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";

export default function Location(props) {
  const { data, location, setLoaction } = props;

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
        <h3 className="card-title">The weather in {city.city} is,</h3>
        <h5 className="card-text">{city.temperature} C</h5>
        <h5 className="card-text">{city.forecast} day</h5>
      </div>
    </div>
  );
}
