import Image from "next/image";

const services = [
  {
    title: "Pergolas & Canopies",
    text: "Louvred, slatted and laser-cut pergolas for terraces, gardens, car parks and entrances.",
    img: "/work/pergola-02.jpg",
  },
  {
    title: "Gates & Boundary Grills",
    text: "Main gates, sliding gates and compound grills — modern slats or decorative CNC panels.",
    img: "/work/gate-04.jpg",
  },
  {
    title: "Laser-cut Jali & Facades",
    text: "CNC-cut decorative panels for elevations, partitions, doors and ceilings in MS or SS.",
    img: "/work/jali-04.jpg",
  },
  {
    title: "Railings & Staircases",
    text: "Staircase, balcony and terrace railings built strong and finished to match your home.",
    img: "/work/railing-01.jpg",
  },
  {
    title: "Sheds & Industrial Structures",
    text: "Factory sheds, warehouses, cattle sheds and roofing structures with colour-coated sheets.",
    img: "/work/shed-01.jpg",
  },
  {
    title: "Steel Furniture & Décor",
    text: "Table frames, console tables, racks, garden arches and made-to-order steel furniture.",
    img: "/work/furniture-05.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-steel-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="What we make" title="Fabrication Services">
          From a single gate to a full industrial shed — every job is measured, fabricated in our workshop and
          installed on site.
        </SectionHeading>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-xl border border-steel-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-steel-100">
                <Image
                  src={s.img}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t-4 border-spark-500 p-6">
                <h3 className="font-display text-xl font-semibold tracking-wide uppercase">{s.title}</h3>
                <p className="mt-2 text-steel-700">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold tracking-[0.2em] text-spark-500 uppercase">{eyebrow}</p>
      <h2
        className={`mt-2 font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl ${
          dark ? "text-white" : "text-steel-900"
        }`}
      >
        {title}
      </h2>
      {children && <p className={`mt-4 text-lg ${dark ? "text-steel-300" : "text-steel-700"}`}>{children}</p>}
    </div>
  );
}
