import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { persistor, store } from "./redux/store";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import TimeAgo from "javascript-time-ago";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
// English.
import en from "javascript-time-ago/locale/en";
import { HomeScreen } from "./screens/HomeScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { LocationsScreen } from "./screens/LocationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchLocation } from "./screens/SearchLocation";
TimeAgo.addDefaultLocale(en);

export default function App() {
  const [location, setLocation] = useState("Pune");
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <SafeAreaView style={styles.container}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ headerShown: false }}
                  location={location}
                  setLocation={setLocation}
                />
                <Stack.Screen
                  name="Settings"
                  component={SettingsScreen}
                  location={location}
                  setLocation={setLocation}
                />
                <Stack.Screen
                  name="Locations"
                  component={LocationsScreen}
                  location={location}
                  setLocation={setLocation}
                />
                <Stack.Screen
                  name="SearchLocation"
                  component={SearchLocation}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
