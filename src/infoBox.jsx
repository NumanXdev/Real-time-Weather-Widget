import Card from "@mui/material/Card";
import "./infoBox.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  //   let info = {
  //     city: "Delhi",
  //     feelsLike: 10.82,
  //     humidity: 100,
  //     temp: 11.05,
  //     tempMax: 11.05,
  //     tempMin: 11.05,
  //     weather: "mist",
  //   };

  let COLD_URL =
    "https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let HOT_URL =
    "https://images.pexels.com/photos/946290/pexels-photo-946290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let RAIN_URL =
    "https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="infoBox">
      {/* <h3>Weather info-{info.weather}</h3> */} <br />
      <div className="card_container">
        <Card sx={{ maxWidth: 345 }} className="card-info">
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temperature: {info.temp}&deg;C</div>
              <div>Humidity: {info.humidity}</div>

              <div>Max Temp: {info.tempMax}&deg;C</div>
              <div>Min_Temp: {info.tempMin}&deg;C</div>
              <div>
                The weather can be described as {info.weather} and feels like{" "}
                {info.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
