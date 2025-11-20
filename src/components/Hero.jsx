import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-28 overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
            >
              AI-Powered Multi-Input Deep Learning System
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-orange-300">for Early Detection of Vitamin Deficiencies</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-slate-200 max-w-2xl"
            >
              Non-invasive assessments using signals from eyes, lips, tongue, nails, and face. Real-time streaming analysis, transparent explanations, and actionable nutrition guidance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a href="/demo" className="pointer-events-auto px-6 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20">Try a quick demo</a>
              <a href="#pricing" className="pointer-events-auto px-6 py-3 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/20">View pricing</a>
            </motion.div>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-purple-500/10"
            >
              <div className="grid grid-cols-3 gap-4">
                {['Eyes','Lips','Tongue','Nails','Face','Report'].map((label, idx) => (
                  <div key={label} className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-orange-400/20 border border-white/10"/>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-200">Five-input capture with instant quality checks and live progress updates.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
