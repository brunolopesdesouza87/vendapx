import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Tag, ChevronRight } from 'lucide-react';
import { getArticleBySlug, getRecentArticles, articles } from './articles';
import { CATEGORY_LABELS, CATEGORY_COLORS } from './types';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useEffect(() => {
    if (!article) {
      navigate('/blog', { replace: true });
      return;
    }
    window.scrollTo(0, 0);

    document.title = `${article.title} | Blog VendaPX`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', article.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://vendapx.com.br/blog/${article.slug}`);
  }, [article, navigate]);

  if (!article) return null;

  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'VendaPX',
      url: 'https://vendapx.com.br',
    },
    publisher: {
      '@type': 'Organization',
      name: 'VendaPX',
      url: 'https://vendapx.com.br',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://vendapx.com.br/blog/${article.slug}`,
    },
    keywords: article.keywords.join(', '),
    timeRequired: `PT${article.readTime}M`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-1 text-xs text-slate-400">
            <Link to="/" className="hover:text-indigo-600">Início</Link>
            <ChevronRight size={12} />
            <Link to="/blog" className="hover:text-indigo-600">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-slate-600 truncate max-w-[200px]">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <header className="pt-12 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${CATEGORY_COLORS[article.category]}`}>
              {CATEGORY_LABELS[article.category]}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            {article.title}
          </h1>
          <p className="text-lg text-slate-500 mb-6">
            {article.description}
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar size={16} />
              <span>{new Date(article.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={16} />
              <span>{article.readTime} min de leitura</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <div
          className="prose prose-slate prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-slate-900
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-li:text-slate-600
            prose-strong:text-slate-800
            prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-50 prose-blockquote:rounded-r-xl prose-blockquote:py-1 prose-blockquote:px-6
            prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
            prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-table:border prose-table:border-slate-200 prose-th:bg-slate-50"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag size={16} className="text-slate-400" />
            {article.keywords.map((kw) => (
              <Link
                key={kw}
                to={`/blog?q=${encodeURIComponent(kw)}`}
                className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              >
                {kw}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Pronto para organizar seu negócio?</h3>
          <p className="text-indigo-200 mb-6">
            Acesse o ecossistema VendaPX: Estoque, Financeiro e PDV integrados por apenas R$ 20/mês.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://pay.cakto.com.br/y8mkzes_790947"
              className="bg-white text-indigo-700 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors"
            >
              Começar Agora
            </a>
            <a
              href="https://wa.me/5547996361402"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-600 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Artigos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((ra) => (
                <Link
                  key={ra.slug}
                  to={`/blog/${ra.slug}`}
                  className="group bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-all"
                >
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[ra.category]}`}>
                    {CATEGORY_LABELS[ra.category]}
                  </span>
                  <h3 className="text-base font-bold mt-3 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {ra.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2">{ra.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
