import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";
import { Card } from "react-native-paper";

const API_KEY = ""; //REPLACE WITH YOUR API KEY
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const CITY_SUGGESTIONS_URL = "http://api.openweathermap.org/geo/1.0/direct";

const WeatherApp = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [weather, setWeather] = useState(null);

  // Fetch city suggestions
  const fetchCitySuggestions = async (text) => {
    setQuery(text);
    if (text.length > 2) {
      try {
        const response = await axios.get(CITY_SUGGESTIONS_URL, {
          params: { q: text, limit: 5, appid: API_KEY },
        });
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching city suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  // const fetchCitySuggestions = async (text) => {
  //   setQuery(text);
  //   if (text.length > 2) {
  //     try {
  //       const response = await axios.get(CITY_SUGGESTIONS_URL, {
  //         params: { q: text, limit: 5, appid: API_KEY },
  //       });
  
  //       // Filter for only Indian cities (or another preferred country)
  //       const filteredSuggestions = response.data.filter(city => city.country === "IN");
  
  //       setSuggestions(filteredSuggestions);
  //     } catch (error) {
  //       console.error("Error fetching city suggestions:", error);
  //     }
  //   } else {
  //     setSuggestions([]);
  //   }
  // };

  // const fetchCitySuggestions = async (text) => {
  //   setQuery(text);
  //   if (text.length > 2) {
  //     try {
  //       const response = await axios.get(CITY_SUGGESTIONS_URL, {
  //         params: { q: text, limit: 5, appid: API_KEY },
  //       });
  
  //       // Set suggestions with city, state, and country
  //       const formattedSuggestions = response.data.map(city => ({
  //         name: city.name,
  //         state: city.state || "", // Some cities may not have a state
  //         country: city.country,
  //       }));
  
  //       setSuggestions(formattedSuggestions);
  //     } catch (error) {
  //       console.error("Error fetching city suggestions:", error);
  //     }
  //   } else {
  //     setSuggestions([]);
  //   }
  // };
  
  // Fetch weather data
  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(WEATHER_URL, {
        params: { q: city, units: "metric", appid: API_KEY },
      });
      setWeather(response.data);
      setSuggestions([]);
      setQuery(city);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search city..."
        value={query}
        onChangeText={fetchCitySuggestions}
      />
      {suggestions.length > 0 && (
        <FlatList
        data={suggestions}
        keyExtractor={(item) => `${item.name}-${item.lat}-${item.lon}`}  // Ensures uniqueness
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => fetchWeather(item.name)}>
            <Text style={styles.suggestion}>{item.name}, {item.country}</Text>
          </TouchableOpacity>
        )}
      />
      
      )}
      {weather && (
        <Card style={styles.card}>
          <Text style={styles.city}>{weather.name}, {weather.sys.country}</Text>
          <Text style={styles.temp}>{weather.main.temp}°C</Text>
          <Text>Weather: {weather.weather[0].description}</Text>
          <Text>Humidity: {weather.main.humidity}%</Text>
          <Text>Wind Speed: {weather.wind.speed} m/s</Text>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  input: { height: 50, borderWidth: 1, borderColor: "#ddd", borderRadius: 8, paddingLeft: 10, backgroundColor: "#fff" },
  suggestion: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  card: { padding: 20, marginTop: 20, backgroundColor: "#fff", borderRadius: 10 },
  city: { fontSize: 22, fontWeight: "bold" },
  temp: { fontSize: 40, fontWeight: "bold", color: "#ff5733" },
});

export default WeatherApp;