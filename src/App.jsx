import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Demo from './pages/Demo'
import Pricing from './pages/Pricing'
import Research from './pages/Research'
import About from './pages/About'
import { Login, Signup } from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Capture from './pages/Capture'
import Results from './pages/Results'
import PrivateRoutes from './pages/PrivateRoutes'
import NotFound from './components/NotFound'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/research" element={<Research />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/capture" element={<Capture />} />
        <Route path="/results/:id" element={<Results />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
