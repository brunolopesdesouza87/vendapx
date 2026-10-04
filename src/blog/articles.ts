import { BlogPost } from './types';
import { articles1 } from './articles-part1';
import { articles2 } from './articles-part2';
import { articles3 } from './articles-part3';
import { articles4 } from './articles-part4';

export const articles: BlogPost[] = [
  ...articles1,
  ...articles2,
  ...articles3,
  ...articles4,
];

export function getArticleBySlug(slug: string): BlogPost | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): BlogPost[] {
  return articles.filter((a) => a.category === category);
}

export function getRecentArticles(count: number): BlogPost[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function searchArticles(query: string): BlogPost[] {
  const lower = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(lower) ||
      a.description.toLowerCase().includes(lower) ||
      a.keywords.some((k) => k.toLowerCase().includes(lower))
  );
}
