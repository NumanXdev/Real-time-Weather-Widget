import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function InfoBox() {
  let info = {
    feelsLike: 10.82,
    humidity: 100,
    temp: 11.05,
    tempMax: 11.05,
    tempMin: 11.05,
    weather: "mist",
  };
  return (
    <div>
      <h3>Weather info-{info.weather}</h3>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/dusty.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
       
      </Card>
    </div>
  );
}
