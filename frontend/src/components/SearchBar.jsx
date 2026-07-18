// import { useState } from 'react'

// function SearchBar({ onSearch }) {
//   const [city, setCity] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (city.trim() === '') return
//     onSearch(city.trim())
//   }

//   return (
//     <form onSubmit={handleSubmit} className="flex gap-2 w-full">
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city name..."
//         className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//       />
//       <button
//         type="submit"
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//       >
//         Search
//       </button>
//     </form>
//   )
// }

// export default SearchBar



import { useState } from 'react'

function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState('')
  const [touched, setTouched] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched(true)

    const trimmed = city.trim()
    if (trimmed === '') return

    onSearch(trimmed)
  }

  const handleClear = () => {
    setCity('')
    setTouched(false)
  }

  const showEmptyWarning = touched && city.trim() === ''

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            aria-label="City name"
            disabled={loading}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          {city && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
         className="px-4 py-2 bg-blue-500 text-white rounded-lg
          hover:bg-blue-600 transition  disabled:cursor-not-allowed"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {showEmptyWarning && (
        <p className="text-red-200 text-sm mt-1">Please enter a city name.</p>
      )}
    </form>
  )
}

export default SearchBar