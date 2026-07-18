// function Loader() {
//   return (
//     <div className="flex justify-center items-center py-8">
//       <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//     </div>
//   )
// }

// export default Loader


function Loader({ size = 'md', message }) {
  const sizeMap = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-4',
    lg: 'w-14 h-14 border-4',
  }

  return (
    <div className="flex flex-col justify-center items-center py-8 gap-3">
      <div
        className={`${sizeMap[size]} border-white border-t-transparent rounded-full animate-spin`}
      ></div>
      {message && <p className="text-white text-sm opacity-90">{message}</p>}
    </div>
  )
}

export default Loader
