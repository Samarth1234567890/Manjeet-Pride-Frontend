import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { formatDate } from "@/lib/content";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  date: string;
  readTime: string;
}

interface ArticleCardProps {
  article: Article;
  hrefBase: string;
  index?: number;
  large?: boolean;
}

export function ArticleCard({
  article,
  hrefBase,
  index = 0,
  large = false,
}: ArticleCardProps) {
  return (
    <Reveal delay={index * 0.08}>
      <Link
        href={`${hrefBase}/${article.slug}`}
        className="group block overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <img
            src={article.cover}
            alt={article.title}
            className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              large ? "h-[420px]" : "h-64"
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1 text-xs uppercase tracking-widest text-primary-foreground">
            {article.category}
          </span>
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span>{formatDate(article.date)}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <h3 className="font-serif text-2xl font-medium transition-colors group-hover:text-primary">
            {article.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-muted-foreground">
            {article.excerpt}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
            Read More
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}