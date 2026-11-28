import Link from "next/link";
import {
  Newspaper,
  ArrowUpRight,
  Calendar
} from "lucide-react";

import Image from "next/image";

interface SchoolInfoItems {
  id: string;
  coverImage: string;
  title: string;
  teaser: string;
  createdAt: Date;
}

interface NewsSectionProps {
  news: SchoolInfoItems[];
}

export default function NewsSection({
  news
}: NewsSectionProps) {
  return (
    <section
      id="news"
      className="flex min-h-[50vh] flex-col gap-4 px-18 py-40 max-md:px-7 max-md:py-30"
    >
      <div className="flex h-full w-full items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <div className="flex flex-col gap-4">
          <span className="font-outfit text-dark-orange flex items-center gap-2 font-semibold">
            <Newspaper />
            BERITA & KEGIATAN SEKOLAH
          </span>

          <h2 className="font-bricolage text-dark-greenblue text-4xl font-bold">
            Kabar Terbaru Fathul Baari
          </h2>

          <p className="text-text font-outfit font-normal">
            Prestasi, kegiatan, dan pengumuman terkini dari santri dan keluarga besar FABIS.
          </p>
        </div>

        <div className="flex">
          <div className="flex h-fit w-fit gap-3 max-md:flex-col max-md:gap-2">
            <Link
              href='/news'
              className="font-bricolage bg-dark-greenblue hover:bg-greenblue flex cursor-pointer items-center gap-3 rounded-xl px-8 py-2.5 text-lg text-white shadow-white/60 shadow-inner transition-all duration-200 max-md:text-sm"
            >
              Lihat Semua Berita
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 grid gap-4 w-full mt-2">
        {news.map((item) => (
          <Link href={`/news/${item.id}`}
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
                {item.createdAt.toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
      
    </section>
  );
}
