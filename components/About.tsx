import Image from "next/image";
import { site } from "@/lib/site";
import { SectionHeading } from "./Services";
import { CheckIcon } from "./icons";

const reasons = [
  { title: "Made to your design", text: "Bring a photo or an idea — we draw it, size it and build it to fit your space." },
  { title: "Quality steel & finish", text: "Proper sections, clean welds and primer + paint or powder coating that lasts." },
  { title: "Workshop to site", text: "Fabricated in our Nadiad workshop and installed on site by our own team." },
  { title: "Honest pricing", text: "Clear quotes up front and on-time delivery for homes, shops and factories." },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-steel-100">
            <Image
              src="/work/pergola-07.jpg"
              alt="Black steel rooftop pergola fabricated by Shayona Steel"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 rounded-lg bg-steel-900 px-5 py-4 text-white shadow-xl sm:-right-6 sm:left-auto">
            <p className="font-display text-2xl font-bold tracking-wide text-spark-500 uppercase">{site.owner}</p>
            <p className="text-sm text-steel-300">Proprietor</p>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="About us" title="Steel work you can rely on">
            {site.name} is a Nadiad-based fabrication workshop run by {site.owner}. We build gates, grills,
            pergolas, laser-cut jali, railings, sheds and custom steel furniture for homes, shops, farms and
            factories across Kheda district and nearby.
          </SectionHeading>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r.title} className="flex gap-3">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-spark-500/15 text-spark-600">
                  <CheckIcon className="size-4" />
                </span>
                <div>
                  <h3 className="font-semibold text-steel-900">{r.title}</h3>
                  <p className="mt-1 text-sm text-steel-700">{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
