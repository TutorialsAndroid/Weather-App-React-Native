# Weather App 🌤️

A simple and user-friendly React Native weather application that fetches real-time weather data using the **OpenWeatherMap API**. The app includes search functionality with real-time suggestions and detailed weather information.

## 🚀 Features
- 🌍 Search for any city worldwide
- 🔍 Real-time city name suggestions while typing
- 📍 Displays **city, state, and country** for better accuracy
- 🌡️ Shows detailed weather data (temperature, humidity, wind speed, etc.)
- 🎨 Clean and responsive UI using **React Native Paper**

## 🛠️ Tech Stack
- **React Native** (for mobile app development)
- **Axios** (for API requests)
- **React Native Paper** (for UI components)
- **OpenWeatherMap API** (for weather data)

## 📷 Screenshots
(Include app screenshots here)

## 🔧 Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/TutorialsAndroid/Weather-App-React-Native.git
   cd weather-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Get an API key from [OpenWeatherMap](https://openweathermap.org/api) and update the `API_KEY` in `WeatherApp.js`:
   ```js
   const API_KEY = "YOUR_API_KEY";
   ```

4. Run the app:
   ```sh
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS
   ```

## 🏗️ File Structure
```
/your-project
├── App.tsx
├── components/
│   ├── WeatherApp.js
├── package.json
├── node_modules/
```

## 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License
This project is licensed under the **MIT License**.

## 🌟 Show Some Love
If you liked this project, give it a ⭐ on [GitHub](https://github.com/yourusername/weather-app)! 😊