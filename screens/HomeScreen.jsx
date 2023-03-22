import React from "react";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import { getCurrentWeather } from "../services/api/weather";
import { useDispatch, useSelector } from "react-redux";
import TimeAgo from "javascript-time-ago";
import Lottie from "lottie-react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TodayForecast } from "../components/TodayForecast";
import { WeeklyForecast } from "../components/WeeklyForecast";
import { Stats } from "../components/Stats";

// English.
import en from "javascript-time-ago/locale/en";
import { updateFetchedTime, updateLocation } from "../redux/slices/dataSlice";
import { getWeatherIllus } from "../utils/utils";

TimeAgo.addDefaultLocale(en);

export const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const location = useSelector((state) => state.weather.selectedLocation);
  const dispatch = useDispatch();
  const fetchedTime = useSelector((state) => state.weather.fetchedTime);

  const onRefresh = useCallback(() => {
    fetchWeatherData();
  }, [location]);

  const timeAgo = new TimeAgo(["en-US"]);

  const fetchWeatherData = async () => {
    try {
      setRefreshing(true);
      const { data, error } = await getCurrentWeather(location);
      if (error) {
        //show toast message
        console.log(error);
      } else {
        dispatch(updateFetchedTime(new Date()));
        setData(data);
        setRefreshing(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [location]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          flex: 1,
          elevation: 40,
          shadowColor: "black",
          backgroundColor: "white",
          paddingBottom: 8,
        }}
      >
        <SimpleLineIcons
          name="drawer"
          size={24}
          color="black"
          style={{ marginLeft: 14, marginTop: 14 }}
          onPress={() => navigation.navigate("Locations")}
        />
        <View style={styles.locationText}>
          <Text style={styles.locationText} onPress={() => fetchWeatherData()}>
            {location}
          </Text>
          <Text>
            Updated {timeAgo.format(new Date(fetchedTime ?? null)) ?? ""}
          </Text>
        </View>
        <Feather
          name="settings"
          size={24}
          color="black"
          style={{ marginRight: 14, marginTop: 14 }}
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View style={styles.statusLogoView}>
          <Lottie
            source={getWeatherIllus(
              Boolean(Number(data?.current?.is_day)),
              data?.current?.condition?.text
            )}
            autoPlay
            loop
            style={styles.statusLogo}
          />
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Text style={styles.temperatureText}>
              {data?.current?.temp_c ?? "--"}
            </Text>
            <Text style={styles.temperatureUnit}>°C</Text>
          </View>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            {data?.current?.condition?.text ?? ""}
          </Text>
        </View>
      </View>
      <Stats
        windSpeed={data?.current?.wind_kph}
        humidity={data?.current?.humidity}
        preception={data?.current?.precip_in}
      />
      <TodayForecast data={data?.forecast?.forecastday[0]} />
      <WeeklyForecast data={data?.forecast?.forecastday} />
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  locationText: {
    marginTop: 20,
    fontSize: 28,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  temperatureText: {
    fontSize: 60,
    fontFamily: "sans-serif",
  },
  temperatureUnit: {
    fontSize: 30,
    color: "grey",
  },
  statusLogo: {
    height: 220,
    width: 220,
  },
  statusLogoView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
