import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {

  const [data, setData] = useState("")

  const fetchWeatcherData = async () => {
    const result  = await axios.get("https://api.weatherapi.com/v1/current.json?key=ec461047d8ff4ab6b1450343231403&q=London&aqi=yes")
    console.log(result.data)
  }

  useEffect(() => {
    fetchWeatcherData()
  }, [])
  

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
