"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ArticleCard } from "./ArticleCard";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  date: string;
  readTime: string;
}

interface MediaExplorerProps {
  articles: Article[];
}

export function MediaExplorer({ articles }: MediaExplorerProps) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const q = search.toLowerCase();

      return (
        article.title.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q)
      );
    });
  }, [articles, search]);

  return (
    <div>
      <div className="relative mb-10">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-12 w-full rounded-lg border border-border bg-background pl-12 pr-4 outline-none transition focus:border-primary"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-dashed py-16 text-center text-muted-foreground">
          No articles found.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, index) => (
            <div
              key={article.slug}
              className="overflow-hidden rounded-lg border border-border bg-card"
            >
              <ArticleCard
                article={article}
                hrefBase="/media"
                index={index}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}