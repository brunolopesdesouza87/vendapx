import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Clock, ChevronRight, ChevronLeft, Search, Tag } from 'lucide-react';
import { articles } from './articles';
import { CATEGORY_LABELS, CATEGORY_COLORS, BlogCategory } from './types';

const ITEMS_PER_PAGE = 12;

const ALL_CATEGORIES: (BlogCategory | 'todos')[] = [
  'todos',
  'estoque',
  'financeiro',
  'pdv',
  'integracao',
  'negocios',
  'tecnologia',
  'cases',
  'financas-pessoais',
];

export default function BlogList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const currentCategory = (searchParams.get('cat') || 'todos') as BlogCategory | 'todos';
  const searchQuery = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(searchQuery);

  const filteredArticles = useMemo(() => {
    let result = [...articles];
    if (currentCategory !== 'todos') {
      result = result.filter((a) => a.category === currentCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }
    return result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [currentCategory, searchQuery]);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  function updateParams(key: string, value: string) {
    const params = new URLSearchParams(searchParams);
    if (value && value !== 'todos' && key !== 'q') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    if (key !== 'page') params.delete('page');
    setSearchParams(params);
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    updateParams('q', searchInput);
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Blog VendaPX</h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto mb-8">
            Artigos sobre gestão de estoque, finanças, PDV e dicas para seu negócio crescer.
          </p>
          <form onSubmit={handleSearch} className="max-w-lg mx-auto relative">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Buscar artigos..."
              className="w-full py-3 pl-12 pr-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-300" />
          </form>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-slate-100 bg-white sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => updateParams('cat', cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'todos' ? 'Todos' : CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results info */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-2">
        <p className="text-sm text-slate-500">
          {filteredArticles.length} artigo{filteredArticles.length !== 1 ? 's' : ''} encontrado{filteredArticles.length !== 1 ? 's' : ''}
          {currentCategory !== 'todos' && (
            <span> em <strong>{CATEGORY_LABELS[currentCategory]}</strong></span>
          )}
          {searchQuery && (
            <span> para "<strong>{searchQuery}</strong>"</span>
          )}
        </p>
      </div>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        {paginatedArticles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">Nenhum artigo encontrado.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[article.category]}`}>
                      {CATEGORY_LABELS[article.category]}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{article.readTime} min de leitura</span>
                    </div>
                    <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
                <div className="px-6 pb-4">
                  <span className="text-sm font-semibold text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ler artigo <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              disabled={currentPage <= 1}
              onClick={() => updateParams('page', String(currentPage - 1))}
              className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2)
              .map((p, idx, arr) => (
                <React.Fragment key={p}>
                  {idx > 0 && arr[idx - 1] !== p - 1 && (
                    <span className="text-slate-300">...</span>
                  )}
                  <button
                    onClick={() => updateParams('page', String(p))}
                    className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                      p === currentPage
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {p}
                  </button>
                </React.Fragment>
              ))}
            <button
              disabled={currentPage >= totalPages}
              onClick={() => updateParams('page', String(currentPage + 1))}
              className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
