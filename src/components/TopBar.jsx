import { Menu, Settings } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="w-full flex items-center justify-between px-4 py-3 bg-[#0B0F12]/80 backdrop-blur-xl border-b border-white/10">
      <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#E6EEF6]" aria-label="Menu">
        <Menu className="w-5 h-5 mx-auto" />
      </button>
      <div className="text-[#E6EEF6] text-[20px] font-semibold tracking-tight">RoadSight AI</div>
      <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#E6EEF6]" aria-label="Settings">
        <Settings className="w-5 h-5 mx-auto" />
      </button>
    </div>
  )
}
