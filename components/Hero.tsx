import Image from "next/image";
import { site, whatsappHref } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

const highlights = ["Custom designs", "Quality MS & SS steel", "On-site installation"];

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-steel-950">
      <Image
        src="/work/pergola-04.jpg"
        alt="White louvred steel pergola over a garden deck, fabricated by Shayona Steel"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-steel-950 via-steel-950/75 to-steel-950/40" />

      <div className="mx-auto w-full max-w-6xl px-4 pt-28 pb-16 sm:px-6 sm:pb-24">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-spark-500/40 bg-spark-500/10 px-3 py-1 text-xs font-semibold tracking-widest text-spark-400 uppercase">
          Nadiad · Gujarat
        </p>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-bold tracking-wide text-white uppercase sm:text-6xl lg:text-7xl">
          Shayona Steel <span className="text-spark-500">Fabrication</span> Works
        </h1>
        <p className="mt-5 max-w-xl text-lg text-steel-100 sm:text-xl">{site.tagline}</p>
        <p className="mt-2 max-w-xl text-steel-300">
          Pergolas, gates, laser-cut jali, railings, sheds and custom steel furniture — designed and installed by{" "}
          {site.owner}&apos;s team.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="flex items-center justify-center gap-2 rounded-md bg-spark-500 px-6 py-3.5 font-semibold text-white transition hover:bg-spark-600"
          >
            <PhoneIcon className="size-5" /> Call {site.phoneDisplay}
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <WhatsAppIcon className="size-5" /> Get a Quote on WhatsApp
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-steel-300">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-spark-500" /> {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
