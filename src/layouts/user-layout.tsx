import type React from "react";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";

export default function UserLayout({
  children
}: {children: React.ReactNode}) {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="w-full pt-20 min-h-[calc(100vh-12rem)]">
        <div className="px-18 max-md:px-7 max-md:py-30 py-40">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
