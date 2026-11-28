"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface NewsItem {
  id: string;
  coverImage: string;
  title: string;
  teaser: string;
  createdAt: Date;
}

export default function NewsList({ news }: { news: NewsItem[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updatePerPage = () => {
      setPerPage(mediaQuery.matches ? 6 : 8);
    };

    updatePerPage();
    mediaQuery.addEventListener("change", updatePerPage);
    return () => mediaQuery.removeEventListener("change", updatePerPage);
  }, []);

  const totalPages = Math.max(1, Math.ceil(news.length / perPage));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * perPage;
  const paginatedNews = news.slice(startIndex, startIndex + perPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-10 mt-8 mb-18">
      <div className="grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 grid gap-4 w-full">
        {paginatedNews.map((item) => (
          <Link
            href={`/news/${item.id}`}
            key={item.id}
            className="group relative overflow-hidden min-w-full justify-end flex flex-col min-h-80 rounded-2xl gap-1 cursor-pointer shadow-[inset_0_0_15px_rgba(255,255,255,0.8)] shadow-white/60"
          >
            <Image
              src={item.coverImage}
              fill
              alt={item.title}
              className="object-cover -z-10 transition-transform duration-300 group-hover:scale-105"
            />

            <div className="bg-greenblue p-4 flex h-44 flex-col justify-between gap-2 group-hover:bg-dark-greenblue duration-200 transition-all shadow-[inset_0_0_15px_rgba(255,255,255,0.8)] shadow-white/50">
              <div className="flex flex-col gap-1.5">
                <h4 className="text-md font-semibold text-white font-bricolage line-clamp-2">
                  {item.title}
                </h4>
                <span className="text-sm text-white font-light line-clamp-2">
                  {item.teaser}
                </span>
              </div>
              <span className="text-xs flex items-center justify-end gap-1 text-white font-light w-full text-end">
                <Calendar className="size-4" />
                {new Date(item.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3">
          {safePage > 1 && (
            <button
              type="button"
              onClick={() => handlePageChange(safePage - 1)}
              aria-label="Halaman sebelumnya"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white text-greenblue shadow-sm transition-all hover:bg-greenblue/10"
            >
              <ChevronLeft className="size-4" />
            </button>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            const isActive = page === safePage;
            return (
              <button
                type="button"
                key={page}
                onClick={() => handlePageChange(page)}
                className={`font-outfit flex size-10 cursor-pointer items-center justify-center rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-greenblue text-white shadow-md shadow-greenblue/40"
                    : "bg-white text-greenblue shadow-sm hover:bg-greenblue/10"
                }`}
              >
                {page}
              </button>
            );
          })}

          {safePage < totalPages && (
            <button
              type="button"
              onClick={() => handlePageChange(safePage + 1)}
              aria-label="Halaman berikutnya"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white text-greenblue shadow-sm transition-all hover:bg-greenblue/10"
            >
              <ChevronRight className="size-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
