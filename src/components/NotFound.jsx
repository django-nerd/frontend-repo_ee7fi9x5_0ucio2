export default function NotFound(){
  return (
    <div className="min-h-screen grid place-items-center bg-slate-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-slate-300 mt-2">Page not found</p>
        <a href="/" className="mt-4 inline-block px-4 py-2 rounded-xl bg-white text-slate-900">Go home</a>
      </div>
    </div>
  )
}
