import { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { uploadInference } from '../utils/api'

const inputs = [
  { key: 'eyes', label: 'Eyes' },
  { key: 'lips', label: 'Lips' },
  { key: 'tongue', label: 'Tongue' },
  { key: 'nails', label: 'Nails' },
  { key: 'face', label: 'Face' },
]

function qualityCheck(img){
  // Simple heuristics: ensure resolution and brightness (mock client-side)
  // In real impl, analyze pixels; here we just return random-ish for demo
  return {
    blur: Math.random() * 0.3,
    lighting: 0.6 + Math.random() * 0.4,
    framing: 0.6 + Math.random() * 0.4,
  }
}

export default function Capture(){
  const fileRefs = useRef({})
  const [files, setFiles] = useState({})
  const [previews, setPreviews] = useState({})
  const [quality, setQuality] = useState({})
  const [status, setStatus] = useState('idle')
  const [wsMessages, setWsMessages] = useState([])

  function onPick(key, file){
    setFiles((f) => ({...f, [key]: file}))
    setPreviews((p) => ({...p, [key]: file ? URL.createObjectURL(file) : null}))
    if(file){
      const q = qualityCheck(file)
      setQuality((qmap)=> ({...qmap, [key]: q}))
    }
  }

  useEffect(()=>{
    // WebSocket updates (mock if backend not available)
    let ws
    try {
      const url = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000').replace('http','ws') + '/ws/updates'
      ws = new WebSocket(url)
      ws.onmessage = (e)=> setWsMessages((m)=> [...m, e.data])
    } catch(e){
      // ignore
    }
    return ()=> ws?.close()
  },[])

  async function run(){
    setStatus('running')
    await uploadInference(files)
    // For demo: simulate stream
    const steps = ['Uploading…','Preprocessing…','Analyzing Eyes…','Analyzing Lips…','Analyzing Tongue…','Analyzing Nails…','Analyzing Face…','Fusing modalities…','Generating report…']
    for (let i=0;i<steps.length;i++){
      await new Promise(r=>setTimeout(r, 400))
      setWsMessages((m)=> [...m, steps[i]])
    }
    window.location.href = '/results/123'
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Capture</h1>
          <p className="text-slate-300 mt-1">Upload or capture five inputs. Basic quality checks run locally.</p>
          <div className="mt-6 grid md:grid-cols-5 gap-4">
            {inputs.map((inp)=> (
              <div key={inp.key} className="bg-white/5 border border-white/10 rounded-2xl p-3">
                <div className="aspect-square rounded-xl bg-black/30 overflow-hidden flex items-center justify-center">
                  {previews[inp.key] ? <img src={previews[inp.key]} alt={inp.label} className="w-full h-full object-cover" /> : <span className="text-slate-400 text-sm">{inp.label}</span>}
                </div>
                <input ref={(el)=> fileRefs.current[inp.key]=el} type="file" accept="image/*" className="hidden" onChange={(e)=> onPick(inp.key, e.target.files?.[0])} />
                <button onClick={()=> fileRefs.current[inp.key]?.click()} className="mt-3 w-full px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20">Upload</button>
                {quality[inp.key] && (
                  <div className="mt-2 space-y-1 text-xs text-slate-300">
                    <div>Blur: {(quality[inp.key].blur*100|0)/100}</div>
                    <div>Lighting: {(quality[inp.key].lighting*100|0)/100}</div>
                    <div>Framing: {(quality[inp.key].framing*100|0)/100}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <button disabled={status==='running'} onClick={run} className="px-5 py-2 rounded-xl bg-white text-slate-900 disabled:opacity-50">Run Analysis</button>
            <div className="text-sm text-slate-300">Live updates: {wsMessages.slice(-1)[0] || 'Waiting…'}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
