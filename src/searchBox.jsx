import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./index.css";
import { useState } from "react";

function SearchBox({ updateInfo }) {
  let [City, setCity] = useState("");
  let [Error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "5fea7cde99cff0329acf34002a07386e";

  let getWeatherInfo = async () => {
    try {
      let Response = await fetch(
        `${API_URL}?q=${City}&units=metric&appid=${API_KEY}`
      );

      let data = await Response.json();

      let result = {
        city: City,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleValue = (evt) => {
    setCity(evt.target.value);
    setError(false);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(City);
      setCity("");
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);
    } catch (err) {
      setError(true);
      //   setError(false);
    }
  };

  return (
    <div className="SearchBox">
      {/* <h3>Search for the Weather.</h3> */}
      {Error && (
        <h3 style={{ color: "maroon", }}>
          No Such Place Exists or an Error Occurred!
        </h3>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="City Name"
          variant="standard"
          value={City}
          onChange={handleValue}
          required
        />

        <Button
          variant="contained"
          size="medium"
          endIcon={<SendIcon />}
          type="Submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;
