import type { Metadata } from "next";
import { GlassPill } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col overflow-hidden bg-white">
      <div className="flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
        <p className="mb-1 text-lg leading-snug text-black/70 sm:mb-2 sm:text-2xl md:text-4xl">
          This page seems to have
        </p>
        <p className="mb-8 text-lg leading-snug text-black/70 sm:mb-12 sm:text-2xl md:text-4xl">
          slipped beyond our reach :/
        </p>
        <h1 className="mb-8 select-none text-[26vw] font-black leading-none text-black sm:mb-12 md:text-[240px]">
          404
        </h1>
        <GlassPill href="/">Return to Main Page</GlassPill>
      </div>
    </section>
  );
}
