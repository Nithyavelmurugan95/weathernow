export function getBackgroundClass(weather) {
  if (!weather) return 'from-blue-400 to-blue-600'

  const condition = weather.condition.toLowerCase()
  const isNight = weather.icon.endsWith('n') // OpenWeatherMap icon codes end in 'd' (day) or 'n' (night)

  if (isNight) {
    return 'from-slate-800 to-slate-950'
  }

  switch (condition) {
    case 'clear':
      return 'from-sky-400 to-blue-500'
    case 'clouds':
      return 'from-slate-400 to-slate-600'
    case 'rain':
    case 'drizzle':
      return 'from-slate-500 to-slate-700'
    case 'thunderstorm':
      return 'from-gray-700 to-gray-900'
    case 'snow':
      return 'from-slate-200 to-blue-300'
    case 'mist':
    case 'fog':
    case 'haze':
      return 'from-gray-300 to-gray-500'
    default:
      return 'from-blue-400 to-blue-600'
  }
}