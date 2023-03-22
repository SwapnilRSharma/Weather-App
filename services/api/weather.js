import axios from "axios";
import { WEATHER_API_KEY } from "@env";

export const getCurrentWeather = async (city) => {
  let data;
  let error;

  try {
    const result = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&aqi=yes&days=7`,
      {
        headers: {
          "cache-control": "public, max-age=0",
        },
      }
    );
    if (result.status !== 200) return { data, error: "Failed to load data." };

    return { data: result.data, error };
  } catch (e) {
    console.log(e);
    return { data, error: "Failed to load data." };
  }
};

export const getSearchQuery = async (query) => {
  let data;
  let error;

  try {
    const result = await axios.get(
      `https://api.weatherapi.com/v1/search.json?key=${WEATHER_API_KEY}&q=${query}`,
      {
        headers: {
          "cache-control": "public, max-age=0",
        },
      }
    );
    if (result.status !== 200) return { data, error: "Failed to load data." };

    return { data: result.data, error };
  } catch (e) {
    console.log(e);
    return { data, error: "Failed to load data." };
  }
};
