// import { useState, useEffect } from 'react'
// import { getWeatherByCity } from '../services/weatherAPI'

// function Home() {
//   const [weather, setWeather] = useState(null)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const data = await getWeatherByCity('London')
//         setWeather(data)
//       } catch (err) {
//         setError('Failed to fetch weather data.')
//         console.error(err)
//       }
//     }

//     fetchWeather()
//   }, [])

//   return (
//     <div className="min-h-screen bg-blue-500 flex items-center justify-center p-8">
//       <div className="bg-white rounded-lg p-6 max-w-md w-full">
//         <h1 className="text-2xl font-bold mb-4">WeatherNow — Debug View</h1>

//         {error && <p className="text-red-500">{error}</p>}

//         {weather && (
//           <pre className="text-sm bg-gray-100 p-4 rounded overflow-auto">
//             {JSON.stringify(weather, null, 2)}
//           </pre>
//         )}

//         {!weather && !error && <p>Loading...</p>}
//       </div>
//     </div>
//   )
// }

// export default Home



// import { useState, useEffect } from 'react'
// import { getWeatherByCity } from '../services/weatherAPI'
// import SearchBar from '../components/SearchBar'
// import WeatherCard from '../components/WeatherCard'
// import Loader from '../components/Loader'
// import ErrorMessage from '../components/ErrorMessage'

// function Home() {
//   const [weather, setWeather] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   const fetchWeather = async (city) => {
//     setLoading(true)
//     setError(null)
//     try {
//       const data = await getWeatherByCity(city)
//       setWeather(data)
//     } catch (err) {
//       setError('City not found. Please enter a valid city.')
//       setWeather(null)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchWeather('London')
//   }, [])

//   return (
//     <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center p-4 gap-4">
//       <h1 className="text-3xl font-bold text-white mb-2">WeatherNow</h1>

//       <div className="w-full max-w-md">
//         <SearchBar onSearch={fetchWeather} />
//       </div>

//       <div className="w-full max-w-md">
//         {loading && <Loader />}
//         {!loading && error && <ErrorMessage message={error} />}
//         {!loading && !error && weather && <WeatherCard weather={weather} />}
//       </div>
//     </div>
//   )
// }

// export default Home




// import { useState, useEffect } from 'react'
// import { getWeatherByCity } from '../services/weatherAPI'
// import SearchBar from '../components/SearchBar'
// import WeatherCard from '../components/WeatherCard'
// import Loader from '../components/Loader'
// import ErrorMessage from '../components/ErrorMessage'
// import DateTime from '../components/DateTime'

// function Home() {
//   const [weather, setWeather] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   const fetchWeather = async (city) => {
//     setLoading(true)
//     setError(null)
//     try {
//       const data = await getWeatherByCity(city)
//       setWeather(data)
//     } catch (err) {
//       setError('City not found. Please enter a valid city.')
//       setWeather(null)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchWeather('London')
//   }, [])

//   return (
//     <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center p-4 gap-4">
//       <h1 className="text-3xl font-bold text-white mb-1">WeatherNow</h1>

//       <DateTime />

//       <div className="w-full max-w-md">
//   <SearchBar onSearch={fetchWeather} loading={loading} />
// </div>

//       <div className="w-full max-w-md">
//         {loading && <Loader />}
//         {!loading && error && <ErrorMessage message={error} />}
//         {!loading && !error && weather && <WeatherCard weather={weather} />}
//       </div>
//     </div>
//   )
// }

// export default Home



// import { useState, useEffect } from 'react'
// import { getWeatherByCity } from '../services/weatherAPI'
// import SearchBar from '../components/SearchBar'
// import WeatherCard from '../components/WeatherCard'
// import WeatherCardSkeleton from '../components/WeatherCardSkeleton'
// import ErrorMessage from '../components/ErrorMessage'
// import DateTime from '../components/DateTime'

// function Home() {
//   const [weather, setWeather] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   const fetchWeather = async (city) => {
//     setLoading(true)
//     setError(null)
//     try {
//       // await new Promise(r => setTimeout(r, 1500))
//       const data = await getWeatherByCity(city)
//       setWeather(data)
//     } catch (err) {
//       setError('City not found. Please enter a valid city.')
//       setWeather(null)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchWeather('London')
//   }, [])

//   return (
//     <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center p-4 gap-4">
//       <h1 className="text-3xl font-bold text-white mb-1">WeatherNow</h1>

//       <DateTime />

//       <div className="w-full max-w-md">
//         <SearchBar onSearch={fetchWeather} loading={loading} />
//       </div>

//       <div className="w-full max-w-md">
//         {loading && <WeatherCardSkeleton />}
//         {!loading && error && <ErrorMessage message={error} />}
//         {!loading && !error && weather && <WeatherCard weather={weather} />}
//       </div>
//     </div>
//   )
// }

// export default Home

// import { useState, useEffect } from 'react'
// import { getWeatherByCity } from '../services/weatherAPI'
// import SearchBar from '../components/SearchBar'
// import WeatherCard from '../components/WeatherCard'
// import WeatherCardSkeleton from '../components/WeatherCardSkeleton'
// import ErrorMessage from '../components/ErrorMessage'
// import DateTime from '../components/DateTime'

// function Home() {
//   const [weather, setWeather] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const [lastSearchedCity, setLastSearchedCity] = useState('London')

//   const fetchWeather = async (city) => {
//     setLoading(true)
//     setError(null)
//     setLastSearchedCity(city)
//     try {
//       const data = await getWeatherByCity(city)
//       setWeather(data)
//     } catch (err) {
//       setError({ message: err.message, type: err.type })
//       setWeather(null)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleRetry = () => {
//     fetchWeather(lastSearchedCity)
//   }

//   useEffect(() => {
//     fetchWeather('London')
//   }, [])

//   return (
//     <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center p-4 gap-4">
//       <h1 className="text-3xl font-bold text-white mb-1">WeatherNow</h1>

//       <DateTime />

//       <div className="w-full max-w-md">
//         <SearchBar onSearch={fetchWeather} loading={loading} />
//       </div>

//       <div className="w-full max-w-md">
//         {loading && <WeatherCardSkeleton />}
//         {!loading && error && (
//           <ErrorMessage message={error.message} type={error.type} onRetry={handleRetry} />
//         )}
//         {!loading && !error && weather && <WeatherCard weather={weather} />}
//       </div>
//     </div>
//   )
// }

// export default Home


// import { useState, useEffect } from 'react'
// import { getWeatherByCity } from '../services/weatherAPI'
// import SearchBar from '../components/SearchBar'
// import WeatherCard from '../components/WeatherCard'
// import WeatherCardSkeleton from '../components/WeatherCardSkeleton'
// import ErrorMessage from '../components/ErrorMessage'
// import DateTime from '../components/DateTime'

// function Home() {
//   const [weather, setWeather] = useState(null)           
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const [lastSearchedCity, setLastSearchedCity] = useState('London')

//   const fetchWeather = async (city) => {
//     setLoading(true)
//     setError(null)
//     setLastSearchedCity(city)
//     try {
//       const data = await getWeatherByCity(city)
//       setWeather(data)
//     } catch (err) {
//       setError({ message: err.message, type: err.type })
//       setWeather(null)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleRetry = () => fetchWeather(lastSearchedCity)

//   useEffect(() => {
//     fetchWeather('London')
//   }, [])

//   return (
//     <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center p-4 sm:p-6 gap-3 sm:gap-4">
//       <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 text-center">
//         WeatherNow
//       </h1>

//       <DateTime />

//       <div className="w-full max-w-sm sm:max-w-md">
//         <SearchBar onSearch={fetchWeather} loading={loading} />
//       </div>

//       <div className="w-full max-w-sm sm:max-w-md">
//         {loading && <WeatherCardSkeleton />}
//         {!loading && error && (
//           <ErrorMessage message={error.message} type={error.type} onRetry={handleRetry} />
//         )}
//         {!loading && !error && weather && <WeatherCard weather={weather} />}
//       </div>
//     </div>
//   )
// }

// export default Home


// import { useState, useEffect } from 'react'
// import { getWeatherByCity } from '../services/weatherAPI'
// import { useSearchHistory } from '../hooks/useSearchHistory'
// import SearchBar from '../components/SearchBar'
// import SearchHistory from '../components/SearchHistory'
// import WeatherCard from '../components/WeatherCard'
// import WeatherCardSkeleton from '../components/WeatherCardSkeleton'
// import ErrorMessage from '../components/ErrorMessage'
// import DateTime from '../components/DateTime'

// function Home() {
//   const [weather, setWeather] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const [lastSearchedCity, setLastSearchedCity] = useState('London')

//   const { history, addToHistory, clearHistory } = useSearchHistory()

//   const fetchWeather = async (city) => {
//     setLoading(true)
//     setError(null)
//     setLastSearchedCity(city)
//     try {
//       const data = await getWeatherByCity(city)
//       setWeather(data)
//       addToHistory(data.city) // use the API's normalized city name, not raw user input
//     } catch (err) {
//       setError({ message: err.message, type: err.type })
//       setWeather(null)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleRetry = () => fetchWeather(lastSearchedCity)

//   useEffect(() => {
//     fetchWeather('London')
//   }, [])

//   return (
//     <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center p-4 sm:p-6 gap-3 sm:gap-4">
//       <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 text-center">
//         WeatherNow
//       </h1>

//       <DateTime />

//       <div className="w-full max-w-sm sm:max-w-md">
//         <SearchBar onSearch={fetchWeather} loading={loading} />
//       </div>

//       <div className="w-full max-w-sm sm:max-w-md">
//         <SearchHistory history={history} onSelect={fetchWeather} onClear={clearHistory} />
//       </div>

//       <div className="w-full max-w-sm sm:max-w-md">
//         {loading && <WeatherCardSkeleton />}
//         {!loading && error && (
//           <ErrorMessage message={error.message} type={error.type} onRetry={handleRetry} />
//         )}
//         {!loading && !error && weather && <WeatherCard weather={weather} />}
//       </div>
//     </div>
//   )
// }

// export default Home

import { useState, useEffect } from 'react'
import { getWeatherByCity } from '../services/weatherAPI'
import { useSearchHistory } from '../hooks/useSearchHistory'
import { getBackgroundClass } from '../utils/weatherTheme'
import SearchBar from '../components/SearchBar'
import SearchHistory from '../components/SearchHistory'
import WeatherCard from '../components/WeatherCard'
import WeatherCardSkeleton from '../components/WeatherCardSkeleton'
import ErrorMessage from '../components/ErrorMessage'
import DateTime from '../components/DateTime'

function Home() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [lastSearchedCity, setLastSearchedCity] = useState('London')

  const { history, addToHistory, clearHistory } = useSearchHistory()

  const fetchWeather = async (city) => {
    setLoading(true)
    setError(null)
    setLastSearchedCity(city)
    try {
      const data = await getWeatherByCity(city)
      setWeather(data)
      addToHistory(data.city)
    } catch (err) {
      setError({ message: err.message, type: err.type })
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  const handleRetry = () => fetchWeather(lastSearchedCity)

  useEffect(() => {
    fetchWeather('London')
  }, [])

  const backgroundClass = getBackgroundClass(weather)

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${backgroundClass} flex flex-col items-center justify-center p-4 sm:p-6 gap-3 sm:gap-4 transition-colors duration-700`}
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 text-center">
        WeatherNow
      </h1>

      <DateTime />

      <div className="w-full max-w-sm sm:max-w-md">
        <SearchBar onSearch={fetchWeather} loading={loading} />
      </div>

      <div className="w-full max-w-sm sm:max-w-md">
        <SearchHistory history={history} onSelect={fetchWeather} onClear={clearHistory} />
      </div>

      <div className="w-full max-w-sm sm:max-w-md">
        {loading && <WeatherCardSkeleton />}
        {!loading && error && (
          <ErrorMessage message={error.message} type={error.type} onRetry={handleRetry} />
        )}
        {!loading && !error && weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  )
}

export default Home