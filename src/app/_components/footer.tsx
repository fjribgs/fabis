import Image from "next/image"
import Link from "next/link"

const footItems = [
  { label: "Beranda", href: "/"},
  { label: "Tentang Kami", href: "#"},
  { label: "PPDB", href:"#ppdb"},
  { label: "Lokasi", href:"#location"}
]

const socmed = [
  { src: "/instagram.svg", href: "#" },
  { src: "/facebook.svg", href: "#" },
]

export default function Footer() {
  return (
    <footer className="min-h-[30vh] flex max-md:flex-col justify-between gap-20 max-md:gap-10 max-lg:px-10 px-20 py-16 rounded-t-[50px] inset-shadow-sm inset-shadow-indigo-200 bg-dark-greenblue">
      <div className="flex flex-col gap-7 flex-3">
        <Image 
          src="/footer-logo.png"
          width={350}
          height={350}
          alt="logo"
          className="rounded-3xl"/>

        <p className="text-white/60">
          Fathul Baari Islamic School (FABIS) adalah lembaga pendidikan jenjang SMP di bawah naungan Yayasan Fathul Baari Ishlahul Ummah, yang berkomitmen mencetak generasi muda bertakwa, berakhlak mulia, dan unggul dalam akademik.
        </p>

        <p className="text-white/90 max-md:hidden mt-14">
          © 2025 - FAATHUL BAARI ISLAMIC SCHOOL
        </p>
      </div>

      <div className="flex-2 flex gap-3">
        <div className="flex flex-col gap-3">
          <span className="font-bricolage text-2xl font-normal text-white">
            Tautan Cepat
          </span>
          {footItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-light text-white hover:font-bold duration-200 transition-all">
                {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-2 justify-between items-center">
        <p className="text-white/90 hidden max-md:block text-sm">
          © 2025 - FAATHUL BAARI ISLAMIC SCHOOL
        </p>

        <div className="flex gap-3 justify-end items-end h-full">
            {socmed.map((item) => (
              <Link
                key={item.src}
                href={item.href}
                className="font-light text-white hover:font-bold duration-200 transition-all">
                  <Image 
                    src={item.src}
                    width={25}
                    height={25}
                    alt="logo"
                    className=""/>
              </Link>
            ))}
        </div>
      </div>
    </footer>
  )
}