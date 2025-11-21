import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onStart, mode, setMode }) {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] overflow-hidden bg-[#0B0F12]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for neon vibe */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_90%,rgba(0,209,193,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_200px_at_10%_10%,rgba(0,168,255,0.2),transparent)]" />

      {/* Content constrained to central 60% for CTAs */}
      <div className="relative z-10 flex items-end md:items-center justify-center min-h-[60vh] md:min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[60%] md:max-w-[60%] px-6 md:px-0"
        >
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 shadow-[0_0_40px_rgba(0,168,255,0.15)]">
            <h1 className="text-[28px] md:text-[32px] leading-tight font-semibold text-[#E6EEF6] tracking-tight mb-1">RoadSight · Monitoring</h1>
            <p className="text-[14px] md:text-[16px] text-[#AABBCD]">Futuristic, glassmorphic HUD for safer streets. Teal–cyan accents, high contrast, voice-first.
            </p>

            <div className="mt-4 flex flex-col md:flex-row md:items-center gap-3">
              <button
                onClick={onStart}
                className="h-[56px] px-6 rounded-xl bg-gradient-to-r from-[#00D1C1] to-[#00A8FF] text-[#0B0F12] font-semibold text-[16px] shadow-[0_8px_30px_rgba(0,168,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8FF]"
              >
                Start Live View
              </button>

              <div className="flex items-center gap-2 ml-0 md:ml-2 bg-white/5 border border-white/10 rounded-xl p-1">
                {['A','B','C'].map(v => (
                  <button
                    key={v}
                    onClick={() => setMode(v)}
                    className={`min-w-[52px] h-[44px] rounded-lg text-[14px] font-medium transition-colors ${mode===v ? 'bg-white/20 text-[#E6EEF6]' : 'text-[#AABBCD] hover:text-[#E6EEF6]'}`}
                    aria-pressed={mode===v}
                    aria-label={`Switch to variant ${v}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-2 text-[12px] text-[#AABBCD]">A — Minimal HUD • B — Enhanced • C — Fleet mode</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
