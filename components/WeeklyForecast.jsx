import React from "react";
import { Image, Text, View } from "react-native";
import { Divider } from "react-native-paper";
import { getDayOfWeek } from "../utils/utils";

export const WeeklyForecast = ({ data }) => {
  return (
    <View
      style={{
        width: "100%",
        padding: 10,
        backgroundColor: "white",
        marginTop: 12,
      }}
    >
      <Text style={{ marginTop: 8, marginBottom: 8, fontSize: 20 }}>
        Daily Forecast
      </Text>
      <View style={{ display: "flex" }}>
        {data?.map((item, index) => (
          <View key={index}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 10,
              }}
            >
              <View style={{ display: "flex", flex: 2 }}>
                <Text style={{ flex: 2, fontSize: 18, fontWeight: 500 }}>
                  {getDayOfWeek(new Date(item?.date).getDay())}
                </Text>
                <Text>{item?.day?.condition?.text}</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <Image
                  style={{ height: 30, width: 30 }}
                  source={{ uri: `https:${item?.day?.condition?.icon}` }}
                />
                <Text>
                  {item?.day?.maxtemp_c} / {item?.day?.mintemp_c}
                </Text>
              </View>
            </View>
            <Divider style={{ marginTop: 6, marginBottom: 6 }} />
          </View>
        ))}
      </View>
    </View>
  );
};
