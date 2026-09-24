// import { headers } from "next/headers";
// import Link from "next/link";
// import { redirect } from "next/navigation";

// import { LatestPost } from "@/app/_components/post";
// import { auth } from "@/server/better-auth";
import { getSession } from "@/server/better-auth/server";
import { api, HydrateClient } from "@/trpc/server";
import Navbar from "./_components/navbar";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, ShieldCheck, Mosque } from "lucide-react";

export default async function Home() {
  const session = await getSession();

  if (session) {
    void api.post.getLatest.prefetch();
  }

  const highlights = [
    { label: "Akreditasi A BAN-S/M", icon: <ShieldCheck className="size-4"/>},
    { label: "Kemenag Terdaftar", icon: <Mosque className="size-4"/>},
    { label: "Kurikulum Merdeka + Ma'had", icon: <GraduationCap className="size-4"/>}
  ]

  return (
    <HydrateClient>
      <Navbar />

      <section className="flex max-md:flex-col gap-10 px-20 max-md:px-7 max-md:py-30 py-40 items-center justify-center min-h-screen">
        <div className="flex flex-6 flex-col gap-7 max-md:gap-6 ">
          <span className="font-medium text-dark-orange rounded-[999] border-dark-orange border px-3 py-1.5 w-fit">
            PPDB 2027/2028 Telah Dibuka
          </span>
          <h1 className="font-bricolage font-bold text-7xl max-md:text-6xl text-dark-greenblue">
            Fathul Baari <br/> Islamic School
          </h1>
          <p className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="flex gap-6 max-md:gap-2 max-md:flex-col w-fit">
            <Link href={"#"}
            className="flex gap-3 shadow-md font-bricolage bg-dark-greenblue text-lg max-md:text-sm items-center text-white px-8 py-2.5 rounded-[999] 
            inset-shadow-red-100 cursor-pointer hover:bg-greenblue duration-200 transition-all">
              <GraduationCap />
              Daftar Sekarang
            </Link>

            <Link href={"#"}
            className="flex gap-3 shadow-md font-bricolage hover:bg-dark-greenblue text-lg max-md:text-sm items-center text-white px-8 py-2.5 rounded-[999] 
            inset-shadow-red-100 cursor-pointer bg-greenblue duration-200 transition-all">
              <GraduationCap />
              Daftar Sekarang
            </Link>
          </div>

          <div className="flex max-md:flex-col gap-4">
            {highlights.map((item) => (
              <span key={item.label} className="flex text-xs gap-1.5 items-center">
                {item.icon}
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-6">
          <Image 
            src="/hero.png"
            width={800}
            height={800}
            alt=""
            className="rounded-3xl"/>
        </div>
      </section>

    </HydrateClient>
  );
}
