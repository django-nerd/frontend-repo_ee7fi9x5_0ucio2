import { useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { uploadInference } from '../utils/api'

export default function Demo(){
  const fileRef = useRef(null)
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [status, setStatus] = useState('idle')
  const [result, setResult] = useState(null)

  async function runDemo(){
    if(!image) return
    setStatus('running')
    const data = await uploadInference({ face: image })
    // Mock result UI for demo
    setTimeout(()=>{
      setResult({ vitaminA: 0.82, vitaminB12: 0.41, vitaminD: 0.64 })
      setStatus('done')
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Try a quick demo</h1>
          <p className="text-slate-300 mt-2">Upload one face image to see a sample prediction.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="aspect-video rounded-xl bg-black/30 flex items-center justify-center overflow-hidden">
                {preview ? (
                  <img src={preview} alt="preview" className="w-full h-full object-cover" />
                ) : (
                  <p className="text-slate-400">No image selected</p>
                )}
              </div>
              <div className="mt-4 flex gap-3">
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e)=>{
                  const f = e.target.files?.[0]
                  setImage(f || null)
                  setPreview(f ? URL.createObjectURL(f) : null)
                }} />
                <button onClick={()=>fileRef.current?.click()} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20">Choose image</button>
                <button disabled={!image || status==='running'} onClick={runDemo} className="px-4 py-2 rounded-lg bg-white text-slate-900 disabled:opacity-50">Run</button>
              </div>
            </motion.div>

            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Prediction</h3>
              {!result && <p className="text-slate-400">{status==='running' ? 'Processing…' : 'No result yet'}</p>}
              {result && (
                <div className="space-y-3">
                  {Object.entries(result).map(([k,v])=> (
                    <div key={k}>
                      <div className="flex justify-between text-sm"><span className="capitalize">{k}</span><span>{Math.round(v*100)}%</span></div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-400 via-purple-400 to-orange-300" style={{ width: `${v*100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}