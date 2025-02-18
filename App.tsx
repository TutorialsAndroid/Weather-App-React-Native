import React from "react";
import { SafeAreaView } from "react-native";
import WeatherApp from "./components/WeatherApp"; // Adjust path if needed

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WeatherApp />
    </SafeAreaView>
  );
};

export default App;
