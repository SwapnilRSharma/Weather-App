import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";
import { FAB } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteLocation, updateLocation } from "../redux/slices/dataSlice";
import { MaterialIcons } from "@expo/vector-icons";

export const LocationsScreen = ({ navigation }) => {
  const locations = useSelector((state) => state.weather.locations);
  const selectedLocation = useSelector(
    (state) => state.weather.selectedLocation
  );
  const dispatch = useDispatch();
  const handleLocationClick = (location) => {
    dispatch(updateLocation(location));
    navigation.navigate("Home");
  };

  const handleDeleteLocation = (location) => {
    if (selectedLocation == location) dispatch(updateLocation(locations[0]));
    dispatch(deleteLocation(location));
  };

  return (
    <>
      {locations.map((location) => (
        <TouchableOpacity
          onPress={() => handleLocationClick(location)}
          key={location}
        >
          <>
            <View
              style={{
                height: 60,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#FFF",
              }}
            >
              <Text style={{ fontSize: 18, marginLeft: 10 }}>{location}</Text>
              {locations.length != 1 && (
                <MaterialIcons
                  name="delete-outline"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                  onPress={() => handleDeleteLocation(location)}
                />
              )}
            </View>
            <Divider />
          </>
        </TouchableOpacity>
      ))}
      <FAB
        icon="plus"
        style={{
          position: "absolute",
          margin: 16,
          right: 0,
          bottom: 0,
        }}
        onPress={() => navigation.navigate("SearchLocation")}
      />
    </>
  );
};
