import { useState } from 'react'
import NavBar from '../components/NavBar'

function Input({label, type='text', value, onChange, placeholder, error}){
  return (
    <div>
      <label className="block text-sm text-slate-300 mb-1">{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} className={`w-full px-3 py-2 rounded-lg bg-white/10 border ${error? 'border-red-400':'border-white/10'} text-white outline-none focus:ring-2 focus:ring-indigo-400`} />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  )
}

export function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  function validate(){
    const e = {}
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) e.email = 'Enter a valid email'
    if(password.length < 6) e.password = 'Minimum 6 characters'
    setErrors(e)
    return Object.keys(e).length===0
  }

  function submit(e){
    e.preventDefault()
    if(!validate()) return
    localStorage.setItem('demo_auth', 'true')
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-md mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Log in</h1>
          <form onSubmit={submit} className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
            <Input label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" error={errors.email} />
            <Input label="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="••••••••" error={errors.password} />
            <button className="w-full px-4 py-2 rounded-xl bg-white text-slate-900">Continue</button>
            <div className="text-center text-sm text-slate-300">or</div>
            <button type="button" onClick={()=>{localStorage.setItem('demo_auth','true'); window.location.href='/dashboard'}} className="w-full px-4 py-2 rounded-xl bg-white/10 text-white border border-white/10">Continue with Google</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export function Signup(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  function validate(){
    const e = {}
    if(name.trim().length < 2) e.name = 'Enter your name'
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) e.email = 'Enter a valid email'
    if(password.length < 6) e.password = 'Minimum 6 characters'
    setErrors(e)
    return Object.keys(e).length===0
  }

  function submit(e){
    e.preventDefault()
    if(!validate()) return
    localStorage.setItem('demo_auth', 'true')
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-md mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Create account</h1>
          <form onSubmit={submit} className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
            <Input label="Name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Jane Doe" error={errors.name} />
            <Input label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" error={errors.email} />
            <Input label="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="••••••••" error={errors.password} />
            <button className="w-full px-4 py-2 rounded-xl bg-white text-slate-900">Create account</button>
            <div className="text-center text-sm text-slate-300">or</div>
            <button type="button" onClick={()=>{localStorage.setItem('demo_auth','true'); window.location.href='/dashboard'}} className="w-full px-4 py-2 rounded-xl bg-white/10 text-white border border-white/10">Continue with Google</button>
          </form>
        </div>
      </main>
    </div>
  )
}
