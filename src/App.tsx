import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  Package, 
  DollarSign, 
  ShoppingCart, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  BarChart3,
  Layers,
  Bike,
  ContactRound,
  Link2,
  Smartphone
} from 'lucide-react';
import { motion } from 'motion/react';
import { BlogLayout, BlogList, BlogPostPage } from './blog';

const CHECKOUT_URL = "https://pay.cakto.com.br/y8mkzes_790947";
const WHATSAPP_URL = "https://wa.me/5547996361402";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.492a.5.5 0 0 0 .613.608l5.757-1.505A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.002-1.367l-.358-.213-3.714.971.993-3.618-.234-.373A9.818 9.818 0 1 1 12 21.818z"/>
  </svg>
);

const SISTEMAS = {
  estoque:    { label: 'Estoque',    url: 'https://estoque.vendapx.com.br/',    color: 'text-emerald-600' },
  financeiro: { label: 'Financeiro', url: 'https://financeiro.vendapx.com.br/', color: 'text-indigo-600'  },
  pdv:        { label: 'PDV',        url: 'https://pdv.vendapx.com.br/',        color: 'text-amber-600'   },
  delivery:   { label: 'Delivery',   url: 'https://delivery.vendapx.com.br/',   color: 'text-rose-600'    },
  crm:        { label: 'CRM',        url: 'https://crm.vendapx.com.br/',        color: 'text-sky-600'     },
  cliques:    { label: 'Cliques',    url: 'https://cliques.vendapx.com.br/',    color: 'text-violet-600'  },
  bio:        { label: 'Bio',        url: 'https://bio.vendapx.com.br/',        color: 'text-fuchsia-600' },
};

const FeatureCard = ({ icon: Icon, title, description, items, link, accentColor = 'bg-indigo-50 text-indigo-600', btnColor = 'bg-indigo-600 hover:bg-indigo-700', cardBg = 'bg-white', cardBorder = 'border-slate-100' }: { icon: any, title: string, description: string, items: string[], link?: string, accentColor?: string, btnColor?: string, cardBg?: string, cardBorder?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`${cardBg} p-8 rounded-2xl shadow-sm border ${cardBorder} hover:shadow-md transition-shadow`}
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${accentColor}`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
    <ul className="space-y-3 mb-8">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
          <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white transition-all ${btnColor}`}
      >
        Acessar Sistema <ArrowRight size={16} />
      </a>
    )}
  </motion.div>
);

function LandingPage() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-bottom border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">V</div>
            <span className="text-2xl font-bold tracking-tight">VendaPX</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#sistemas" className="hover:text-indigo-600 transition-colors">Sistemas</a>
            <a href="#integracao" className="hover:text-indigo-600 transition-colors">Integração</a>
            <a href="#precos" className="hover:text-indigo-600 transition-colors">Preços</a>
            <a href="/blog" className="hover:text-indigo-600 transition-colors">Blog</a>
            <span className="text-slate-200 hidden xl:inline">|</span>
            <span className="hidden xl:flex items-center gap-6">
              <a href={SISTEMAS.estoque.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Estoque</a>
              <a href={SISTEMAS.financeiro.url} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Financeiro</a>
              <a href={SISTEMAS.pdv.url} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">PDV</a>
              <a href={SISTEMAS.delivery.url} target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 transition-colors">Delivery</a>
              <a href={SISTEMAS.crm.url} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 transition-colors">CRM</a>
              <a href={SISTEMAS.cliques.url} target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">Cliques</a>
              <a href={SISTEMAS.bio.url} target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-600 transition-colors">Bio</a>
            </span>
          </nav>
          <a 
            href={CHECKOUT_URL}
            className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            Começar Agora
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Ecossistema Completo de Gestão
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Tudo o que seu negócio precisa <br />
              <span className="text-indigo-600">em um só lugar.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Estoque, financeiro, PDV, delivery, CRM, encurtador de links e bio link integrados nativamente. 
              Aumente sua produtividade e tenha visão total da sua empresa com a VendaPX.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={CHECKOUT_URL}
                className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-200"
              >
                Assinar por R$ 20/mês <ArrowRight size={20} />
              </a>
              <a 
                href="#sistemas"
                className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all"
              >
                Ver Sistemas
              </a>
            </div>
          </motion.div>

          {/* Dashboard Preview Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-20 relative"
          >
            <div className="bg-slate-900 rounded-3xl p-2 shadow-2xl overflow-hidden aspect-video max-w-5xl mx-auto border-4 border-slate-800">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/hg2nZNz_1Sg"
                title="VendaPX - Apresentação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* WhatsApp CTA below video */}
            <div className="mt-8 flex justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200"
              >
                <WhatsAppIcon /> Ficou com dúvidas? Fale comigo no WhatsApp!
              </a>
            </div>
            {/* Floating Badges */}
            <div className="absolute -top-6 -left-6 md:left-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <Zap size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-bold uppercase">Sincronização</p>
                  <p className="text-sm font-bold">Tempo Real</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 md:right-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-bold uppercase">Segurança</p>
                  <p className="text-sm font-bold">Dados Criptografados</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Systems Section */}
      <section id="sistemas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Sete Sistemas, Uma Só Solução</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Desenvolvemos ferramentas poderosas que funcionam de forma independente, mas brilham quando usadas em conjunto.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={Package}
              title="Controle de Estoque"
              description="Gestão completa de entradas, saídas e movimentações com inteligência."
              items={[
                "Gestão de múltiplos depósitos",
                "Alertas de estoque baixo",
                "Curva ABC de produtos",
                "Relatórios de inventário",
                "Entrada via XML de NF-e"
              ]}
              link={SISTEMAS.estoque.url}
              accentColor="bg-blue-100 text-blue-600"
              btnColor="bg-blue-600 hover:bg-blue-700"
              cardBg="bg-blue-50"
              cardBorder="border-blue-100"
            />
            <FeatureCard 
              icon={DollarSign}
              title="Sistema Financeiro"
              description="Controle total do seu fluxo de caixa e saúde financeira da empresa."
              items={[
                "Contas a pagar e receber",
                "Fluxo de caixa projetado",
                "Conciliação bancária",
                "DRE Gerencial automático",
                "Emissão de boletos e notas"
              ]}
              link={SISTEMAS.financeiro.url}
              accentColor="bg-emerald-100 text-emerald-600"
              btnColor="bg-emerald-600 hover:bg-emerald-700"
              cardBg="bg-emerald-50"
              cardBorder="border-emerald-100"
            />
            <FeatureCard 
              icon={ShoppingCart}
              title="Sistema PDV"
              description="Vendas rápidas e intuitivas para o seu balcão ou frente de loja."
              items={[
                "Vendas em poucos cliques",
                "Integração com balanças",
                "Múltiplas formas de pagamento",
                "Fechamento de caixa cego",
                "Funciona offline e online"
              ]}
              link={SISTEMAS.pdv.url}
              accentColor="bg-orange-100 text-orange-500"
              btnColor="bg-orange-500 hover:bg-orange-600"
              cardBg="bg-orange-50"
              cardBorder="border-orange-100"
            />
            <FeatureCard 
              icon={Bike}
              title="SmartDelivery"
              description="Sua loja online no WhatsApp: cardápio, pedidos em tempo real e link próprio da sua marca."
              items={[
                "Loja pública com link próprio",
                "Cardápio montado a partir do estoque",
                "Pedidos no painel e no WhatsApp",
                "Status de novo até entregue",
                "Equipe com acesso por perfil"
              ]}
              link={SISTEMAS.delivery.url}
              accentColor="bg-rose-100 text-rose-600"
              btnColor="bg-rose-600 hover:bg-rose-700"
              cardBg="bg-rose-50"
              cardBorder="border-rose-100"
            />
            <FeatureCard 
              icon={ContactRound}
              title="SmartCRM"
              description="Contatos, funil de vendas e agenda em um só lugar, com integração de WhatsApp."
              items={[
                "Contatos com histórico de mensagens",
                "Funil de vendas por etapas",
                "Agenda de consultas, visitas e reservas",
                "Integração de WhatsApp",
                "Equipe com acesso por perfil"
              ]}
              link={SISTEMAS.crm.url}
              accentColor="bg-sky-100 text-sky-600"
              btnColor="bg-sky-600 hover:bg-sky-700"
              cardBg="bg-sky-50"
              cardBorder="border-sky-100"
            />
            <FeatureCard 
              icon={Link2}
              title="SmartCliques"
              description="Encurte, organize e meça seus links: um endereço curto para cada destino, com cliques e QR Code."
              items={[
                "Endereço curto /c/meucodigo",
                "Contagem de cliques por link",
                "QR Code com download em PNG",
                "Categorias para organizar",
                "Equipe com acesso por perfil"
              ]}
              link={SISTEMAS.cliques.url}
              accentColor="bg-violet-100 text-violet-600"
              btnColor="bg-violet-600 hover:bg-violet-700"
              cardBg="bg-violet-50"
              cardBorder="border-violet-100"
            />
            <FeatureCard 
              icon={Smartphone}
              title="SmartBio"
              description="Uma página bonita com todos os links da sua empresa, pública e fácil de compartilhar."
              items={[
                "Uma página com todos os seus links",
                "Endereço no formato /b/sua-marca",
                "Avatar, cores e descrição da marca",
                "Acesso público, sem cadastro",
                "Equipe com acesso por perfil"
              ]}
              link={SISTEMAS.bio.url}
              accentColor="bg-fuchsia-100 text-fuchsia-600"
              btnColor="bg-fuchsia-600 hover:bg-fuchsia-700"
              cardBg="bg-fuchsia-50"
              cardBorder="border-fuchsia-100"
            />
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 bg-rose-500/15 text-rose-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                SmartDelivery
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                A loja da sua empresa <br />
                <span className="text-rose-400">no WhatsApp.</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Monte o cardápio a partir do seu estoque, compartilhe o link da loja e receba os pedidos
                no painel e no WhatsApp do estabelecimento. Acompanhe cada pedido do <b className="text-white">novo</b> até o <b className="text-white">entregue</b>.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Loja pública com link próprio da sua marca',
                  'Cardápio montado a partir do estoque VendaPX',
                  'Pedidos recebidos no painel e disparados no WhatsApp',
                  'Status em tempo real: novo, confirmado, preparando, a caminho, entregue',
                  'Equipe com acesso por perfil (leitura ou gestão)'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 size={20} className="text-rose-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={SISTEMAS.delivery.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-rose-600 transition-all shadow-xl shadow-rose-500/20"
              >
                Acessar o Delivery <ArrowRight size={18} />
              </a>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white text-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-2">Como acessar</h3>
                <p className="text-slate-500 text-sm mb-8">
                  O Delivery é um sistema separado, com endereço e login próprios.
                </p>
                <ol className="space-y-6">
                  {[
                    { t: 'Abra o endereço do sistema', d: 'delivery.vendapx.com.br' },
                    { t: 'Clique em “Acessar painel”', d: 'A tela inicial mostra a apresentação da loja online.' },
                    { t: 'Entre com e-mail e senha', d: 'Use a conta da sua empresa. Esqueceu a senha? Em “Esqueceu sua senha?” enviamos um link por e-mail.' },
                    { t: 'Configure sua loja', d: 'Na aba “Minha loja” monte o cardápio e copie o link da sua vitrine.' },
                    { t: 'Divulgue a vitrine', d: 'O cliente pede sem login em delivery.vendapx.com.br/s/sua-loja e o pedido chega no painel e no WhatsApp.' }
                  ].map((step, i) => (
                    <li key={step.t} className="flex gap-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-rose-500 text-white text-sm font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span>
                        <b className="block mb-0.5">{step.t}</b>
                        <span className="text-slate-500 text-sm">{step.d}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 pt-6 border-t border-slate-100 text-sm text-slate-500">
                  Dúvidas para liberar um acesso da equipe? Fale com o suporte pelo WhatsApp.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Section */}
      <section id="crm" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 bg-sky-50 text-sky-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                SmartCRM
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
                Contatos, funil de vendas e agenda <br />
                <span className="text-sky-600">em um só lugar.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Pensado para clínicas, consultórios odontológicos, imobiliárias e vendedores: acompanhe cada
                oportunidade do primeiro contato até o fechamento, com agenda e WhatsApp no mesmo painel.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Contatos com histórico de mensagens',
                  'Funil de vendas por etapas, com valor por estágio',
                  'Agenda de consultas, visitas e reservas por profissional',
                  'Integração de WhatsApp direto no atendimento',
                  'Equipe com acesso por perfil (leitura ou gestão)'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={20} className="text-sky-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={SISTEMAS.crm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-sky-700 transition-all shadow-xl shadow-sky-200"
              >
                Acessar o CRM <ArrowRight size={18} />
              </a>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-slate-50 ring-1 ring-slate-200 p-8 md:p-10 rounded-3xl">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Como acessar</h3>
                <p className="text-slate-500 text-sm mb-8">
                  O CRM é um sistema separado, com endereço e login próprios.
                </p>
                <ol className="space-y-6">
                  {[
                    { t: 'Abra o endereço do sistema', d: 'crm.vendapx.com.br' },
                    { t: 'Clique em “Entrar”', d: 'No topo, ao lado do nome SmartCRM.' },
                    { t: 'Entre com e-mail e senha', d: 'Use a conta da sua empresa. Esqueceu a senha? Em “Esqueceu sua senha?” enviamos um link por e-mail.' },
                    { t: 'Escolha o seu segmento', d: 'Imobiliária, vendas, clínica de estética ou odontologia — o funil e a agenda já ficam configurados.' },
                    { t: 'Cadastre seus contatos', d: 'Na aba “Contatos” importe leads e clientes, e acompanhe tudo no funil de vendas.' }
                  ].map((step, i) => (
                    <li key={step.t} className="flex gap-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-sky-600 text-white text-sm font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span>
                        <b className="block mb-0.5 text-slate-900">{step.t}</b>
                        <span className="text-slate-500 text-sm">{step.d}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 pt-6 border-t border-slate-200 text-sm text-slate-500">
                  Dúvidas para liberar um acesso da equipe? Fale com o suporte pelo WhatsApp.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cliques Section */}
      <section id="cliques" className="py-24 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                SmartCliques
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
                Seus links, <br />
                <span className="text-violet-600">seu resumo.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Transforme links longos em endereços curtos de verdade. Personalize o código, acompanhe
                cada clique e compartilhe também em QR Code — tudo no mesmo painel.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Endereço curto próprio, no formato /c/meucodigo',
                  'Contagem de cliques por link e por período',
                  'QR Code gerado para cada link, com download em PNG',
                  'Categorias para separar campanhas e destinos',
                  'Equipe com acesso por perfil (leitura ou gestão)'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={20} className="text-violet-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={SISTEMAS.cliques.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-violet-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-violet-700 transition-all shadow-xl shadow-violet-200"
              >
                Acessar o SmartCliques <ArrowRight size={18} />
              </a>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white ring-1 ring-violet-100 p-8 md:p-10 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Como acessar</h3>
                <p className="text-slate-500 text-sm mb-8">
                  O SmartCliques é um sistema separado, com endereço e login próprios.
                </p>
                <ol className="space-y-6">
                  {[
                    { t: 'Abra o endereço do sistema', d: 'cliques.vendapx.com.br' },
                    { t: 'Clique em “Entrar”', d: 'No topo, ao lado do nome SmartCliques.' },
                    { t: 'Entre com e-mail e senha', d: 'Use a conta da sua empresa e clique em “Acessar painel”. Esqueceu a senha? Em “Esqueceu sua senha?” enviamos um link por e-mail.' },
                    { t: 'Informe o nome da empresa', d: 'No primeiro acesso você configura a organização antes de entrar no painel.' },
                    { t: 'Crie seu primeiro link', d: 'Na aba “Meus links” defina o código, gere o endereço /c/meucodigo e o QR Code para compartilhar.' }
                  ].map((step, i) => (
                    <li key={step.t} className="flex gap-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span>
                        <b className="block mb-0.5 text-slate-900">{step.t}</b>
                        <span className="text-slate-500 text-sm">{step.d}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 pt-6 border-t border-violet-100 text-sm text-slate-500">
                  Dúvidas para liberar um acesso da equipe? Fale com o suporte pelo WhatsApp.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 bg-fuchsia-50 text-fuchsia-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                SmartBio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
                Sua bio na <br />
                <span className="text-fuchsia-600">medida certa.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Reúna todos os links da sua empresa em uma página bonita, pública e fácil de compartilhar —
                WhatsApp, Instagram, site, mapa e catálogo, tudo em um só lugar.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Todos os links reunidos em um só endereço',
                  'Avatar, título, descrição e cores com a sua marca',
                  'Página pública, acessada sem cadastro',
                  'Endereço no formato bio.vendapx.com.br/b/sua-marca',
                  'Equipe com acesso por perfil (leitura ou gestão)'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={20} className="text-fuchsia-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={SISTEMAS.bio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-fuchsia-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-fuchsia-700 transition-all shadow-xl shadow-fuchsia-200"
              >
                Acessar o SmartBio <ArrowRight size={18} />
              </a>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-slate-50 ring-1 ring-slate-200 p-8 md:p-10 rounded-3xl">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Como acessar</h3>
                <p className="text-slate-500 text-sm mb-8">
                  O SmartBio é um sistema separado, com endereço e login próprios.
                </p>
                <ol className="space-y-6">
                  {[
                    { t: 'Abra o endereço do sistema', d: 'bio.vendapx.com.br' },
                    { t: 'Clique em “Entrar”', d: 'No topo, ao lado do nome SmartBio.' },
                    { t: 'Entre com e-mail e senha', d: 'Use a conta da sua empresa e clique em “Acessar painel”. Esqueceu a senha? Em “Esqueceu sua senha?” enviamos um link por e-mail.' },
                    { t: 'Personalize a sua bio', d: 'Na aba “Personalizar” defina avatar, título, descrição e as cores da sua marca.' },
                    { t: 'Adicione os links e publique', d: 'Na aba “Meus links” cadastre WhatsApp, Instagram, site e mapa — o endereço fica bio.vendapx.com.br/b/sua-marca.' }
                  ].map((step, i) => (
                    <li key={step.t} className="flex gap-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-fuchsia-600 text-white text-sm font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span>
                        <b className="block mb-0.5 text-slate-900">{step.t}</b>
                        <span className="text-slate-500 text-sm">{step.d}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 pt-6 border-t border-slate-200 text-sm text-slate-500">
                  Dúvidas para liberar um acesso da equipe? Fale com o suporte pelo WhatsApp.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integracao" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                A mágica acontece na <br />
                <span className="text-indigo-600">integração total.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600">
                    <Layers size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Ecossistema Unificado</h4>
                    <p className="text-slate-600">Ao realizar uma venda no PDV, o estoque é baixado automaticamente e o financeiro é atualizado instantaneamente.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Dados que Conversam</h4>
                    <p className="text-slate-600">Chega de planilhas paralelas. Seus dados financeiros refletem exatamente o que acontece na sua operação de estoque e vendas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
                    <p className="text-2xl font-bold text-indigo-600">100%</p>
                    <p className="text-xs font-bold uppercase text-slate-500">Integrado</p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
                    <p className="text-2xl font-bold text-emerald-600">0</p>
                    <p className="text-xs font-bold uppercase text-slate-500">Retrabalho</p>
                  </div>
                  <div className="col-span-2 p-6 bg-slate-900 rounded-2xl text-white">
                    <p className="text-sm opacity-60 mb-2">Status do Sistema</p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <p className="text-lg font-mono">Sincronização Ativa</p>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-full bg-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Preço Simples e Transparente</h2>
          <p className="text-slate-600 mb-16 text-lg">Sem taxas escondidas, sem limites de usuários. Acesso total.</p>
          
          <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl border-2 border-indigo-600 p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-8 py-2 rounded-bl-2xl text-xs font-bold uppercase tracking-widest">
              Plano Único
            </div>
            <h3 className="text-2xl font-bold mb-4">Acesso Completo VendaPX</h3>
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-2xl font-bold text-slate-400">R$</span>
              <span className="text-7xl font-black text-slate-900">20</span>
              <span className="text-xl font-bold text-slate-400">/mês</span>
            </div>
            
            <ul className="text-left space-y-4 mb-10">
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Controle de Estoque Completo
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Sistema Financeiro Completo
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Sistema PDV Completo
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Delivery e loja online no WhatsApp
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                CRM com funil de vendas e agenda
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Encurtador de links com QR Code
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Bio link personalizável
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Integração Nativa entre Sistemas
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Suporte Especializado
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Atualizações Gratuitas
              </li>
            </ul>
            
            <a 
              href={CHECKOUT_URL}
              className="block w-full bg-indigo-600 text-white py-5 rounded-2xl text-xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
            >
              Assinar Agora
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full bg-emerald-500 text-white py-4 rounded-2xl text-base font-bold hover:bg-emerald-600 transition-all"
            >
              <WhatsAppIcon /> Tirar dúvidas pelo WhatsApp
            </a>
            <p className="mt-6 text-sm text-slate-500">Cancelamento fácil a qualquer momento.</p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Pronto para transformar sua gestão?</h2>
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já utilizam o ecossistema VendaPX para crescer com organização.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={CHECKOUT_URL}
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-12 py-5 rounded-full text-xl font-bold hover:bg-slate-100 transition-all"
            >
              Começar Agora <ArrowRight size={24} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-emerald-600 transition-all"
            >
              <WhatsAppIcon /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">V</div>
            <span className="text-xl font-bold tracking-tight">VendaPX</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} VendaPX - Gestão Inteligente. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-indigo-600">Termos</a>
            <a href="#" className="hover:text-indigo-600">Privacidade</a>
            <a href="https://vendapx.com.br" className="hover:text-indigo-600">vendapx.com.br</a>
          </div>
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl hover:bg-emerald-600 transition-all group"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon />
        <span className="text-sm font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Falar comigo
        </span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogList />} />
        <Route path=":slug" element={<BlogPostPage />} />
      </Route>
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}
