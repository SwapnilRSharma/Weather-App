import React, { useState } from "react";
import { Divider, Searchbar } from "react-native-paper";
import { getSearchQuery } from "../services/api/weather";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addLocation, updateLocation } from "../redux/slices/dataSlice";

export const SearchLocation = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const fetchData = async (query) => {
    const { data, error } = await getSearchQuery(query);
    if (error) {
      //show error message
    } else {
      setData(data);
    }
  };

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    fetchData(query);
  };

  const handleLocationClick = (locationName) => {
    dispatch(updateLocation(locationName));
    dispatch(addLocation(locationName));
    navigation.goBack();
  };

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {data.map((location) => {
        return (
          <TouchableOpacity onPress={() => handleLocationClick(location.name)}>
            <>
              <View
                style={{
                  height: 60,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 18, marginLeft: 10 }}>
                  {location.name}
                </Text>
              </View>
              <Divider />
            </>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
