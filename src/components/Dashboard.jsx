import { useState } from 'react'
import { motion } from 'framer-motion'
import { Dot, MapPin, Settings, Camera, ShieldCheck, Wrench, Menu, EllipsisVertical } from 'lucide-react'

const StateBadge = ({ state='Off' }) => {
  const colors = {
    Off: 'border-white/10 text-[#AABBCD]',
    Monitoring: 'border-cyan-400/40 text-cyan-300',
    Live: 'border-cyan-400 text-cyan-200 shadow-[0_0_0_3px_rgba(0,168,255,0.15)]',
  }
  return (
    <div className={`relative rounded-2xl p-4 border ${colors[state]} bg-white/5 backdrop-blur-md`}>
      <div className={`absolute -inset-px rounded-2xl ${state==='Live' ? 'animate-pulse ring-2 ring-cyan-400/50' : ''}`} />
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-[12px] text-[#AABBCD]">RoadSight tile</p>
          <h2 className="text-[20px] md:text-[24px] text-[#E6EEF6] font-semibold">{state}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#E6EEF6]" aria-label="Open">
            Open
          </button>
          <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#E6EEF6]" aria-label="More">
            <EllipsisVertical className="w-5 h-5 mx-auto" />
          </button>
        </div>
      </div>
    </div>
  )
}

const QuickToggle = () => {
  return (
    <div className="rounded-2xl p-4 bg-white/5 backdrop-blur-md border border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-emerald-400" aria-hidden />
          <div>
            <p className="text-[12px] text-[#AABBCD]">Status</p>
            <p className="text-[14px] text-[#E6EEF6]">Last report 2m ago</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 h-12 rounded-xl bg-gradient-to-r from-[#00D1C1] to-[#00A8FF] text-[#0B0F12] font-semibold">Open</button>
          <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#E6EEF6]" aria-label="More">
            <EllipsisVertical className="w-5 h-5 mx-auto" />
          </button>
        </div>
      </div>
      {/* Mini hotspot graph placeholder */}
      <div className="mt-3 h-10 bg-gradient-to-r from-[#00D1C1]/20 to-[#00A8FF]/20 rounded-lg" />
    </div>
  )
}

const DetectionToast = () => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.15 }}
    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl"
  >
    <div className="flex items-center gap-3 p-3 md:p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15">
      <div className="w-14 h-10 rounded-lg bg-[#0B0F12] border border-white/10" />
      <div className="flex-1">
        <p className="text-[14px] md:text-[16px] text-[#E6EEF6]">Pothole detected • Confidence 82% • 120 m</p>
      </div>
      <div className="flex gap-2">
        <button className="h-10 px-4 rounded-lg bg-white/10 text-[#E6EEF6]">Dismiss</button>
        <button className="h-10 px-4 rounded-lg bg-gradient-to-r from-[#00D1C1] to-[#00A8FF] text-[#0B0F12] font-semibold">View</button>
      </div>
    </div>
  </motion.div>
)

export default function Dashboard() {
  const [state, setState] = useState('Monitoring')
  const [showToast, setShowToast] = useState(true)

  return (
    <div className="w-full min-h-[480px] max-w-[1280px] mx-auto p-4 md:p-6 bg-[#0B0F12] text-[#E6EEF6]">
      {/* Grid responsive to car dash 1280x480 and mobile 480x800 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <StateBadge state={state} />
          <QuickToggle />
          {/* Expanded Panel (condensed demo) */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <p className="text-[14px] md:text-[16px] text-[#AABBCD]">Monitoring · Edge AI active</p>
              <div className="flex items-center gap-2">
                <button className="h-10 px-3 rounded-lg bg-white/10 text-[#E6EEF6]">Manual Report</button>
                <button className="h-10 px-3 rounded-lg bg-white/10 text-[#E6EEF6]">Queue</button>
                <button className="h-10 px-3 rounded-lg bg-white/10 text-[#E6EEF6]">Settings</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-2 h-56 bg-[linear-gradient(180deg,rgba(0,209,193,0.08),transparent)] relative">
                {/* Map placeholder with heat pulses */}
                <div className="absolute inset-0 animate-pulse bg-[radial-gradient(200px_120px_at_60%_40%,rgba(0,168,255,0.25),transparent)]" />
              </div>
              <div className="p-3 space-y-2">
                {[1,2,3].map(i => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[12px] text-[#AABBCD]">Real-time feed</p>
                    <p className="text-[14px] text-[#E6EEF6]">Pothole • 8{i}% • {100+i*5} m</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-4 py-3 border-t border-white/10 flex items-center justify-between">
              <p className="text-[12px] text-[#AABBCD]">AutoShare</p>
              <button className="w-12 h-7 rounded-full bg-gradient-to-r from-[#00D1C1] to-[#00A8FF]" aria-label="AutoShare toggle" />
            </div>
          </div>
        </div>

        {/* Right rail actions */}
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-[12px] text-[#AABBCD]">Local Queue</p>
            <div className="mt-2 space-y-2">
              {[1,2].map(i => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <p className="text-[14px]">Upload pending</p>
                  <div className="flex gap-2">
                    <button className="h-9 px-3 rounded-lg bg-white/10">Retry</button>
                    <button className="h-9 px-3 rounded-lg bg-white/10">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-[12px] text-[#AABBCD]">Reports History</p>
            <div className="mt-2 space-y-3">
              {['Ticket created','Repair scheduled — ETA 18 hrs','Fixed — thank you for reporting'].map((t,i)=> (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[14px]">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showToast && <DetectionToast />}
    </div>
  )
}
