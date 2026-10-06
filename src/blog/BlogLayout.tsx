import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function BlogLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen font-sans bg-white">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">V</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">VendaPX</span>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full ml-1">Blog</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link to="/blog" className="hover:text-indigo-600 transition-colors">Artigos</Link>
            <Link to="/" className="hover:text-indigo-600 transition-colors">Site Principal</Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">V</div>
            <span className="text-xl font-bold">VendaPX</span>
          </div>
          <p className="text-slate-400 text-sm mb-6">
            Ecossistema completo de gestão: Estoque, Financeiro e PDV integrados.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link to="/" className="hover:text-white transition-colors">Site Principal</Link>
            <a href="https://vendapx.com.br" className="hover:text-white transition-colors">vendapx.com.br</a>
          </div>
          <p className="text-slate-500 text-xs mt-8">© {new Date().getFullYear()} VendaPX - Gestão Inteligente. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
