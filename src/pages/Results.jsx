import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const mock = {
  predictions: [
    { label: 'Vitamin A', confidence: 0.82 },
    { label: 'Vitamin B12', confidence: 0.41 },
    { label: 'Vitamin D', confidence: 0.64 }
  ]
}

export default function Results(){
  const items = mock.predictions
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Results</h1>
          <p className="text-slate-300 mt-1">Predictions with confidence and explanations</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Confidence</h3>
              <div className="space-y-3">
                {items.map((it)=> (
                  <div key={it.label}>
                    <div className="flex justify-between text-sm"><span>{it.label}</span><span>{Math.round(it.confidence*100)}%</span></div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-400 via-purple-400 to-orange-300" style={{ width: `${it.confidence*100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={()=>window.print()} className="mt-6 px-4 py-2 rounded-xl bg-white text-slate-900">Export PDF</button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Original vs Heatmaps</h3>
              <div className="grid grid-cols-2 gap-3">
                {Array.from({length:5}).map((_,i)=> (
                  <div key={i} className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-orange-400/20 border border-white/10" />
                ))}
              </div>
              <p className="text-slate-300 text-sm mt-4">Heatmaps highlight regions contributing to predictions. Use these visuals to understand focus areas.</p>
            </div>
          </div>

          <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold">Diet Coach</h3>
            <Chatbot />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { useEffect, useState } from 'react'
function Chatbot(){
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hi! I can suggest diet tips based on your results. Ask me anything.' }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)

  function send(e){
    e.preventDefault()
    if(!input.trim()) return
    const userMsg = { role:'user', content: input.trim() }
    setMessages((m)=> [...m, userMsg])
    setInput('')
    setTyping(true)
    // mock streaming reply
    const reply = 'Consider adding leafy greens, eggs, and fortified dairy to improve vitamin A and D levels.'
    let i=0
    const id = setInterval(()=>{
      i++
      setMessages((m)=> {
        const base = m.filter(x=>x._stream!=true)
        return [...base, { role: 'assistant', content: reply.slice(0,i), _stream:true }]
      })
      if(i>=reply.length){ clearInterval(id); setTyping(false) }
    }, 25)
  }

  return (
    <div>
      <div className="h-56 overflow-auto bg-black/20 rounded-xl p-4 space-y-2">
        {messages.map((m, idx)=> (
          <div key={idx} className={m.role==='user' ? 'text-right' : 'text-left'}>
            <span className={`inline-block px-3 py-2 rounded-xl ${m.role==='user' ? 'bg-white text-slate-900' : 'bg-white/10 text-white border border-white/10'}`}>{m.content}</span>
          </div>
        ))}
        {typing && <div className="text-slate-400 text-sm">Assistant is typing…</div>}
      </div>
      <form onSubmit={send} className="mt-3 flex gap-2">
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Ask for diet tips…" className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white outline-none" />
        <button className="px-4 py-2 rounded-lg bg-white text-slate-900">Send</button>
      </form>
    </div>
  )
}
