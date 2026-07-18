// function ErrorMessage({ message }) {
//   return (
//     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg w-full">
//       {message}
//     </div>
//   )
// }

// export default ErrorMessage


function ErrorMessage({ message, type, onRetry }) {
  const isRetryable = type === 'NETWORK' || type === 'TIMEOUT' || type === 'SERVER'

  const iconMap = {
    NOT_FOUND: '🔍',
    NETWORK: '📡',
    TIMEOUT: '⏱️',
    SERVER: '⚠️',
    UNKNOWN: '⚠️',
  }

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg w-full">
      <div className="flex items-center gap-2">
        <span>{iconMap[type] || '⚠️'}</span>
        <span>{message}</span>
      </div>

      {isRetryable && onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 text-sm underline text-red-800 hover:text-red-900"
        >
          Try again
        </button>
      )}
    </div>
  )
}

export default ErrorMessage