export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  date: string;
  readTime: number;
  keywords: string[];
  content: string;
}

export type BlogCategory =
  | "estoque"
  | "financeiro"
  | "pdv"
  | "integracao"
  | "negocios"
  | "tecnologia"
  | "cases"
  | "financas-pessoais";

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  estoque: "Controle de Estoque",
  financeiro: "Gestão Financeira",
  pdv: "PDV e Vendas",
  integracao: "Integração de Sistemas",
  negocios: "Dicas para Negócios",
  tecnologia: "Tecnologia e Inovação",
  cases: "Casos de Sucesso",
  "financas-pessoais": "Finanças para Empresários",
};

export const CATEGORY_COLORS: Record<BlogCategory, string> = {
  estoque: "bg-blue-100 text-blue-700",
  financeiro: "bg-emerald-100 text-emerald-700",
  pdv: "bg-orange-100 text-orange-700",
  integracao: "bg-purple-100 text-purple-700",
  negocios: "bg-amber-100 text-amber-700",
  tecnologia: "bg-cyan-100 text-cyan-700",
  cases: "bg-rose-100 text-rose-700",
  "financas-pessoais": "bg-indigo-100 text-indigo-700",
};
