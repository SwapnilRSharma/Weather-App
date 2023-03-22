const SunnyDay = require("../assets/day-clear-sky.json");
const ClearSkyDay = require("../assets/day-clear-sky.json");
const ClearSkyNight = require("../assets/night-clear-sky.json");
const PartlyCloudyDay = require("../assets/day-few-clouds.json");
const PartlyCloudyNight = require("../assets/night-few-clouds.json");
const ThunderstormDay = require("../assets/day-thunderstorm.json");
const ThunderstormNight = require("../assets/night-thunderstorm.json");
const SnowDay = require("../assets/day-snow.json");
const SnowNight = require("../assets/night-snow.json");
const MistDay = require("../assets/day-mist.json");
const MistNight = require("../assets/night-mist.json");
const ScatteredCloudsDay = require("../assets/day-scattered-clouds.json");
const ScatteredCloudsNight = require("../assets/night-scattered-clouds.json");
const FewCloudsDay = require("../assets/day-few-clouds.json");
const FewCloudsNight = require("../assets/night-few-clouds.json");
const RainNight = require("../assets/night-rain.json");
const RainDay = require("../assets/day-rain.json");

export const getDayOfWeek = (day) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (day > 6 || day < 0) {
    return null;
  } else {
    return days[day];
  }
};

export const getWeatherIllus = (isDay, condition) => {
  console.log(isDay);
  switch (condition) {
    case "Partly cloudy":
      return isDay ? PartlyCloudyDay : PartlyCloudyNight;
    case "Sunny":
      return isDay ? SunnyDay : ClearSkyNight;
    case "Mist":
      return isDay ? MistDay : MistNight;
    case "Thunderstorm":
      return isDay ? ThunderstormDay : ThunderstormNight;
    case "Snow":
      return isDay ? SnowDay : SnowNight;
    case "Clear":
      return isDay ? ClearSkyDay : ClearSkyNight;
    case "Rain":
    case "Patchy rain possible":
      return isDay ? RainDay : RainNight;
    case "Cloudy":
      return isDay ? FewCloudsDay : FewCloudsNight;
    default:
      return ClearSkyDay;
  }
};
