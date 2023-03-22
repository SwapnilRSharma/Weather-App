import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Divider } from "react-native-paper";

export const Stats = ({ windSpeed, humidity, preception }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "white",
        height: 120,
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Feather name="wind" size={40} color="blue" />
          <Text style={{ marginLeft: 4 }}>{windSpeed}</Text>
        </View>
        <Text style={{ marginTop: 4 }}>Wind speed</Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 2,
          }}
        >
          <MaterialIcons name="waves" size={38} color="blue" />
          <Text style={{ marginLeft: 4 }}>{humidity}</Text>
        </View>
        <Text style={{ marginTop: 4 }}>Humidity</Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            pacdding: 2,
          }}
        >
          <Entypo name="drop" size={38} color="blue" />
          <Text style={{ marginLeft: 4 }}>{preception}</Text>
        </View>
        <Text style={{ marginTop: 4 }}>Preception</Text>
      </View>
    </View>
  );
};
