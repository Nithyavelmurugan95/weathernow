// // function WeatherCard({ weather }) {
// //   const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`

// //   return (
// //     <div className="bg-white rounded-lg p-6 w-full">
// //       <div className="flex items-center justify-between mb-4">
// //         <div>
// //           <h2 className="text-2xl font-bold">{weather.city}</h2>
// //           <p className="text-gray-500">{weather.country}</p>
// //         </div>
// //         <img src={iconUrl} alt={weather.description} className="w-16 h-16" />
// //       </div>

// //       <div className="text-5xl font-bold mb-2">
// //         {Math.round(weather.temperature)}°C
// //       </div>
// //       <p className="text-gray-600 capitalize mb-4">{weather.description}</p>

// //       <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
// //         <div>Feels Like: {Math.round(weather.feels_like)}°C</div>
// //         <div>Humidity: {weather.humidity}%</div>
// //         <div>Wind: {weather.wind_speed} m/s</div>
// //         <div>Pressure: {weather.pressure} hPa</div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default WeatherCard

// function WeatherCard({ weather }) {
//   const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`

//   return (
//     <div className="bg-white rounded-lg p-6 w-full shadow-lg">
//       <div className="flex items-center justify-between mb-4">
//         <div>
//           <h2 className="text-2xl font-bold">{weather.city}</h2>
//           <p className="text-gray-500">{weather.country}</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <img src={iconUrl} alt={weather.description} className="w-16 h-16" />
//         </div>
//       </div>

//       <div className="flex items-baseline gap-2 mb-2">
//         <span className="text-5xl font-bold">{Math.round(weather.temperature)}°C</span>
//         <span className="text-gray-500 text-sm">
//           Feels like {Math.round(weather.feels_like)}°C
//         </span>
//       </div>

//       <p className="text-gray-600 capitalize mb-4">{weather.description}</p>

//       <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 border-t pt-4">
//         <div className="flex items-center gap-2">
//           <span className="text-gray-400">💧</span> Humidity: {weather.humidity}%
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="text-gray-400">💨</span> Wind: {weather.wind_speed} m/s
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="text-gray-400">🌡️</span> Pressure: {weather.pressure} hPa
//         </div>
//       </div>
//     </div>
//   )
// }

// export default WeatherCard


function WeatherCard({ weather }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 w-full shadow-lg">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">{weather.city}</h2>
          <p className="text-gray-500 text-sm sm:text-base">{weather.country}</p>
        </div>
        <img src={iconUrl} alt={weather.description} className="w-12 h-12 sm:w-16 sm:h-16" />
      </div>

      <div className="flex items-baseline gap-2 mb-2 flex-wrap">
        <span className="text-4xl sm:text-5xl font-bold">
          {Math.round(weather.temperature)}°C
        </span>
        <span className="text-gray-500 text-xs sm:text-sm">
          Feels like {Math.round(weather.feels_like)}°C
        </span>
      </div>

      <p className="text-gray-600 capitalize mb-4 text-sm sm:text-base">
        {weather.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm text-gray-700 border-t pt-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">💧</span> Humidity: {weather.humidity}%
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">💨</span> Wind: {weather.wind_speed} m/s
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">🌡️</span> Pressure: {weather.pressure} hPa
        </div>
      </div>
    </div>
  )
}

export default WeatherCard