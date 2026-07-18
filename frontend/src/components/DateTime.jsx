import { useState, useEffect } from 'react'

function DateTime() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' }

  return (
    <div className="text-white text-center">
      <p className="text-sm opacity-90">
        {now.toLocaleDateString(undefined, dateOptions)}
      </p>
      <p className="text-lg font-semibold">
        {now.toLocaleTimeString(undefined, timeOptions)}
      </p>
    </div>
  )
}

export default DateTime