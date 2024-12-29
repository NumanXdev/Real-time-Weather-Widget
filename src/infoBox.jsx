import Card from "@mui/material/Card";
import "./infoBox.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function InfoBox() {
  let info = {
    city: "Delhi",
    feelsLike: 10.82,
    humidity: 100,
    temp: 11.05,
    tempMax: 11.05,
    tempMin: 11.05,
    weather: "mist",
  };
  return (
    <div className="infoBox">
      <h3>Weather info-{info.weather}</h3>
      <div className="card_container">
        <Card sx={{ maxWidth: 345 }} className="card-info">
          <CardMedia
            sx={{ height: 140 }}
            image="/dusty.jpg"
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
                The weather can be described ad {info.weather} and feels like{" "}
                {info.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
