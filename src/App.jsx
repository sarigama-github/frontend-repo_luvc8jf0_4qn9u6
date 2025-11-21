import { useState } from 'react'
import Hero from './components/Hero'
import TopBar from './components/TopBar'
import Dashboard from './components/Dashboard'

function App() {
  const [started, setStarted] = useState(false)
  const [mode, setMode] = useState('A')

  return (
    <div className="min-h-screen w-full bg-[#0B0F12] text-[#E6EEF6]">
      <TopBar />
      {!started ? (
        <Hero onStart={() => setStarted(true)} mode={mode} setMode={setMode} />
      ) : (
        <Dashboard mode={mode} />
      )}
    </div>
  )
}

export default App
