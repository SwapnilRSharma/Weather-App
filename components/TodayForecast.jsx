import React, { useState } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import convert from "convert-time";

export const TodayForecast = ({ data }) => {
  return (
    <View style={{ padding: 10, backgroundColor: "white" }}>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>Hourly Forecast</Text>
      <View
        style={{
          height: 120,
          backgroundColor: "#fff",
        }}
      >
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
              overflow: "scroll",
            }}
          >
            {data?.hour
              // .filter(
              //   (item) =>
              //     new Date(item.time) > new Date() ||
              //     new Date(item.time) == new Date()
              // )
              .map((item, index) => (
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                  key={index}
                >
                  <Text style={{}}>{convert(item.time, "hh a")}</Text>
                  <Image
                    style={{ height: 50, width: 50 }}
                    source={{ uri: `https:${item.condition.icon}` }}
                  />
                  <Text>{item.temp_c} °C</Text>
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
