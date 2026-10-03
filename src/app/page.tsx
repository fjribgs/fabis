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
  Mail,
  Megaphone,
  Download,
  SquareText,
  ListCheck,
  CircleCheckBig
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

  const ppdb = [
    { id: "01", 
      title: "Registrasi Online", 
      description:"Mengisi formulir biodata santri dan wali secara online serta mengunggah berkas syarat administratif.",
      color: "bg-[#006384]/15"
    },
    { id: "02", 
      title: "Tes Observasi & Al-Qur'an", 
      description:"Uji kelayakan membaca Al-Qur'an (Tahsin/Tahfidz), wawancara komitmen wali santri, dan psikotes pemetaan minat bakat.",
      color: "bg-[#8C4B00]/15"
    },
    { id: "03", 
      title: "Pengumuman Kelulusan", 
      description:"Hasil seleksi diumumkan melalui website resmi dan notifikasi WhatsApp langsung ke nomor wali santri.",
      color: "bg-[#006384]/15"
    },
    { id: "04", 
      title: "Daftar Ulang & Seragam  ", 
      description:"Penyelesaian administrasi masuk, pengukuran seragam resmi, dan orientasi walisantri & mahasantri baru.",
      color: "bg-[#8C4B00]/15"
    }
  ]

  const persyaratanSantri = [
    "Fotokopi Akta Kelahiran dan Kartu Keluarga (KK) 2 rangkap",
    "Pas foto formal santri berpakaian rapih ukuran 3x4 (4 lembar, latar biru)",
    "Fotokopi Rapor 2 semester terakhir yang telah dilegalisir",
    "Surat Keterangan Sehat & Bebas Hepatitis/TBC dari dokter resmi",
    "Komitmen bersedia tinggal di asrama dan menaati tata tertib Ma'had"
  ]

  return (
    <HydrateClient>
      <Navbar />

      <section className="flex max-md:flex-col gap-10 px-18 max-md:px-7 max-md:py-30 py-40 items-center justify-center min-h-screen">
        <div className="flex flex-6 flex-col gap-7 max-md:gap-6 ">
          <span className="font-medium text-dark-orange rounded-full border-dark-orange border px-3 py-1.5 w-fit">
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

      <section id="ppdb" 
        className="flex flex-col gap-4 px-18 max-md:px-7 max-md:py-30 py-40 min-h-screen">
        <div className="flex w-full max-lg:flex-col gap-10 h-full justify-between items-end max-lg:items-start">
          <div className="flex flex-col gap-4">
            <span className="flex gap-2 font-outfit font-semibold text-dark-orange items-center">
              <Megaphone />
              PENERIMAAN PESERTA DIDIK BARU TA 2027/2028
            </span>

            <h2 className="font-bold text-4xl font-bricolage text-dark-greenblue">Informasi & Pendaftaran Siswa Baru</h2>

            <p className="text-text font-normal font-outfit">
              Proses seleksi transparan dan berbasis pembinaan potensi santri.
              Pilih jenjang pendidikan SMP IT  Fathul Baari.
            </p>
          </div>

          <div className="flex">
            <div className="flex gap-3 max-md:gap-2 max-md:flex-col h-fit w-fit">
              <Link href={"#"}
              className="flex gap-3 shadow-md font-bricolage bg-dark-greenblue text-lg max-md:text-sm items-center text-white px-8 py-2.5 
              rounded-xl  inset-shadow-red-100 cursor-pointer hover:bg-greenblue duration-200 transition-all">
                <Download />
                Unduh Pamflet
              </Link>

              <Link href={"#"}
              className="flex gap-3 shadow-md font-bricolage hover:bg-dark-greenblue text-lg max-md:text-sm items-center text-white px-8 
              py-2.5 rounded-xl inset-shadow-red-100 cursor-pointer bg-greenblue duration-200 transition-all">
                <SquareText />
                Isi Formulir Online
              </Link>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-3 w-full max-sm:flex-col mt-4">
            {ppdb.map((item) => (
              <div key={item.id}
              className="flex flex-col w-full gap-8 bg-white px-6 py-6 rounded-xl shadow-sm">
                <div className={`${item.color} w-fit py-3 px-4 rounded-sm font-bold font-bricolage`}>
                  {item.id}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bricolage font-medium text-xl">
                    {item.title}
                  </h4>
                  <p className="text-text text-md">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className="flex flex-col gap-2 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex gap-3.5 items-center">
            <span className="bg-[#006384]/15 p-3 rounded-md h-fit">
              <ListCheck />
            </span>
            <div className="flex flex-col">
              <h4 className="font-bricolage text-2xl font-bold text-dark-greenblue">Persyaratan Calon Santri</h4>
              <p className="text-text">Dokumen fisik & digital yang wajib dipersiapkan</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mt-3">
            {persyaratanSantri.map((item, index) => (
              <div className="flex gap-2 items-center text-text" key={index}>
                <CircleCheckBig className="text-dark-greenblue size-4"/>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" 
        className="flex flex-col gap-4 px-18 max-md:px-7 max-md:py-30 py-40 min-h-screen">
        <span className="flex gap-2 font-outfit font-semibold text-dark-orange items-center">
          <MapPinned />
          AYO KUNJUNGI KAMI DI FATHUL BAARI ISLAMIC SCHOOL
        </span>

        <h2 className="font-bold text-4xl font-bricolage text-dark-greenblue">Lokasi Sekolah FABIS</h2>

        <p className="text-text font-normal font-outfit">
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
