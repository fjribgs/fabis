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
import { 
  GraduationCap, 
  ShieldCheck, 
  Mosque, 
  MapPinned, 
  Clock,
  Phone,
  Mail
} from "lucide-react";

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

  const schoolInfo = [
    { icon: <Clock className="size-4.5"/>, label: "Jam Operasional", desc:"Senin - Sabtu", desc2: "07.30 - 16.00 WIB"},
    { icon: <Phone className="size-4.5"/>, label: "Telepon Kantor", desc:"(021) 8899-2345", desc2: "0812-3456-7890 (WA)"},
    { icon: <Mail className="size-4.5"/>, label: "Surel Resmi", desc:"info@fabis.sch.id", desc2: "ppdb@fabis.sch.id"},
  ]

  return (
    <HydrateClient>
      <Navbar />

      <section className="flex max-md:flex-col gap-10 px-18 max-md:px-7 max-md:py-30 py-40 items-center justify-center min-h-screen">
        <div className="flex flex-6 flex-col gap-7 max-md:gap-6 ">
          <span className="font-medium text-dark-orange rounded-[999] border-dark-orange border px-3 py-1.5 w-fit">
            PPDB 2027/2028 Telah Dibuka
          </span>
          <h1 className="font-bricolage font-bold text-7xl max-md:text-6xl text-dark-greenblue">
            Fathul Baari <br/> Islamic School
          </h1>
          <p className="text-md text-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="flex gap-6 max-md:gap-2 max-md:flex-col w-fit">
            <Link href={"#"}
            className="flex gap-3 shadow-md font-bricolage bg-dark-greenblue text-lg max-md:text-sm items-center text-white px-8 py-2.5 
            rounded-[999]  inset-shadow-red-100 cursor-pointer hover:bg-greenblue duration-200 transition-all">
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
              <span key={item.label} className="flex text-text text-xs gap-1.5 items-center">
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

      <section className="flex flex-col gap-4 px-18 max-md:px-7 max-md:py-30 py-40 min-h-screen">
        <span className="flex gap-2 font-outfit font-semibold text-dark-orange items-center">
          <MapPinned />
          AYO KUNJUNGI KAMI DI FATHUL BAARI ISLAMIC SCHOOL
        </span>

        <h2 className="font-bold text-4xl font-bricolage text-dark-greenblue">Lokasi Sekolah FABIS</h2>

        <p className="text-text font-normal font-outfit ">
          Kami menyambut kehadiran Ayah/Bunda untuk melihat langsung suasana pembelajaran, sarana mahad,
          dan berdiskusi dengan tim akademik kami.
        </p>

        <div className="flex gap-3 w-full max-sm:flex-col">
            {schoolInfo.map((item) => (
              <div key={item.label}
              className="flex flex-col w-full gap-2 bg-white px-6 py-6 rounded-xl shadow-sm">
                {item.icon}
                <h4 className="font-bricolage font-semibold text-text text-lg">
                  {item.label}
                </h4>
                <div className="flex flex-col">
                  <p className="font-outfit text-text font-normal">
                    {item.desc}
                  </p>
                  <p className="font-outfit text-text font-normal">
                    {item.desc2}
                  </p>
                </div>
                
              </div>
            ))}
        </div>
      </section>

    </HydrateClient>
  );
}
