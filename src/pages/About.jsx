import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">About</h1>
          <p className="text-slate-300 mt-2">Our mission is to make preventive nutrition screening accessible and delightful.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">Founded by engineers and clinicians passionate about AI for health.</div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">Backed by peer-reviewed research and rigorous validations.</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}