import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const cards = [
  { title: 'Monthly Scans', value: 48 },
  { title: 'Avg Confidence', value: '78%' },
  { title: 'Deficiency Flags', value: 6 },
]

export default function Dashboard(){
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-slate-300 mt-1">Your activity and recent scans</p>

          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {cards.map((c, i)=> (
              <motion.div key={c.title} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:i*0.05}} className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl hover:translate-y-[-2px] hover:bg-white/10 transition-all">
                <div className="text-sm text-slate-300">{c.title}</div>
                <div className="text-3xl font-semibold mt-2">{c.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold">Recent scans</h3>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              {Array.from({length:6}).map((_,i)=> (
                <div key={i} className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-orange-400/20 border border-white/10" />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
