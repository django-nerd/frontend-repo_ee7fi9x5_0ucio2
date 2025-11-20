import { Navigate, Outlet } from 'react-router-dom'

function isAuthed(){
  // Simple demo auth: check local flag; integrate real auth with backend later
  return !!localStorage.getItem('demo_auth')
}

export default function PrivateRoutes(){
  return isAuthed() ? <Outlet /> : <Navigate to="/login" replace />
}
