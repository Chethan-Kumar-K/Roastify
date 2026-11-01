import { useEffect, useState } from 'react'
import { checkBackend } from './services/api.ts'

function App() {
  const [status, setStatus] = useState('Connecting...')
  const [error, setError] = useState('')

  useEffect(() => {
    checkBackend()
      .then((data) => {
        setStatus(`${data.application} is ${data.status}`)
      })
      .catch(() => {
        setError('Unable to connect to backend')
      })
  }, [])

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold text-green-500">
        ROASTIFY 💀
      </h1>

      <p className="mt-6 text-lg">
        {error || status}
      </p>
    </main>
  )
}

export default App