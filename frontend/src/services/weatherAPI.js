// import axios from 'axios'

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   timeout: 5000,
// })

// export const getWeatherByCity = async (city) => {
//   const response = await api.get('/weather/', {
//     params: { city },
//   })
//   return response.data
// }


import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
})

export class WeatherAPIError extends Error {
  constructor(type, message) {
    super(message)
    this.type = type // 'NOT_FOUND' | 'NETWORK' | 'TIMEOUT' | 'SERVER' | 'UNKNOWN'
  }
}

export const getWeatherByCity = async (city) => {
  try {
    const response = await api.get('/weather/', {
      params: { city },
    })
    return response.data
  } catch (err) {
    if (!navigator.onLine) {
      throw new WeatherAPIError('NETWORK', 'You appear to be offline. Please check your internet connection.')
    }

    if (err.code === 'ECONNABORTED') {
      throw new WeatherAPIError('TIMEOUT', 'The request took too long. Please try again.')
    }

    if (!err.response) {
      throw new WeatherAPIError('NETWORK', 'Unable to reach the server. Please check your connection.')
    }

    if (err.response.status === 404) {
      throw new WeatherAPIError('NOT_FOUND', 'City not found. Please enter a valid city.')
    }

    if (err.response.status >= 500) {
      throw new WeatherAPIError('SERVER', 'Something went wrong on our end. Please try again shortly.')
    }

    throw new WeatherAPIError('UNKNOWN', 'Something went wrong. Please try again.')
  }
}