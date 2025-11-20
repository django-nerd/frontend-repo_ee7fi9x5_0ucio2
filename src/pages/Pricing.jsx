import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const tiers = [
  { name: 'Starter', price: '$0', desc: 'Explore with limited runs', features: ['3 demo scans/day', 'Basic explanations', 'Community support'], cta: 'Get started' },
  { name: 'Pro', price: '$29', desc: 'For personal monitoring', features: ['100 scans/month', 'PDF reports', 'Priority support', 'Chat nutrition coach'], cta: 'Start Pro' },
  { name: 'Team', price: '$99', desc: 'Clinics & researchers', features: ['1000 scans/month', 'Team workspace', 'Custom models', 'SLA support'], cta: 'Contact sales' }
]

export default function Pricing(){
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" id="pricing">
          <h1 className="text-3xl font-bold text-center">Pricing</h1>
          <p className="text-slate-300 text-center mt-2">Simple plans that scale with you.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-4xl font-bold mt-2">{t.price}<span className="text-base text-slate-400 font-normal">/mo</span></p>
                <p className="text-slate-300 mt-2">{t.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {t.features.map((f)=> <li key={f}>• {f}</li>)}
                </ul>
                <button className="mt-6 w-full px-4 py-2 rounded-xl bg-white text-slate-900">{t.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}