function WeatherCardSkeleton() {
  return (
    <div className="bg-white rounded-lg p-6 w-full shadow-lg animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="space-y-2">
          <div className="h-6 w-32 bg-gray-200 rounded"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>
        <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
      </div>

      <div className="h-12 w-24 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 w-40 bg-gray-200 rounded mb-4"></div>

      <div className="grid grid-cols-2 gap-4 border-t pt-4">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}

export default WeatherCardSkeleton
