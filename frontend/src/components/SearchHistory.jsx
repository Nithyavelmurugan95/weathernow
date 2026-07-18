function SearchHistory({ history, onSelect, onClear }) {
  if (history.length === 0) return null

  return (
    <div className="w-full text-white">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm opacity-90">Recent searches</p>
        <button
          onClick={onClear}
          className="text-xs underline opacity-75 hover:opacity-100"
        >
          Clear
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {history.map((city) => (
          <button
            key={city}
            onClick={() => onSelect(city)}
            className="px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full transition"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchHistory
