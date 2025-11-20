export default function Footer(){
  return (
    <footer className="border-t border-white/10 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300">
        <p className="text-sm">© 2025 AI Vitamin Scan. All rights reserved.</p>
        <nav className="flex gap-6 text-sm">
          <a href="/research" className="hover:text-white">Research</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/pricing" className="hover:text-white">Pricing</a>
        </nav>
      </div>
    </footer>
  )
}