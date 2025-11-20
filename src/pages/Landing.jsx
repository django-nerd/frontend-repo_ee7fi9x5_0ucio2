import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Landing(){
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <Hero />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Real-time Streaming', desc: 'Get live updates during inference and chat guidance while results load.'},
              { title: 'Multi-Input Fusion', desc: 'Eyes, lips, tongue, nails, and face analyzed together for robust signals.'},
              { title: 'Explainable AI', desc: 'Grad-CAM overlays and human-friendly explanations for every prediction.'}
            ].map((f, i) => (
              <motion.div key={f.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:i*0.05}} viewport={{once:true}} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-300 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}