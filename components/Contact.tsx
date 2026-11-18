import { mapsHref, site, whatsappHref } from "@/lib/site";
import { SectionHeading } from "./Services";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";

export default function Contact() {
  const cards = [
    { icon: PhoneIcon, label: "Call", value: site.phoneDisplay, href: site.phoneHref },
    { icon: WhatsAppIcon, label: "WhatsApp", value: site.phoneDisplay, href: whatsappHref(), external: true },
    { icon: MailIcon, label: "Email", value: site.email, href: `mailto:${site.email}` },
    {
      icon: PinIcon,
      label: "Workshop",
      value: `${site.address.line1}, ${site.address.line2}`,
      href: mapsHref,
      external: true,
    },
  ];

  return (
    <section id="contact" className="bg-steel-900 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Get in touch" title="Request a free quote" dark>
          Send us a photo or sketch of what you need on WhatsApp, or call {site.owner} directly. Site visits for
          measurement across Nadiad and nearby.
        </SectionHeading>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {cards.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-start gap-4 rounded-xl border border-steel-700 bg-steel-800 p-6 transition hover:border-spark-500"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-spark-500 text-white">
                <Icon className="size-6" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold tracking-widest text-steel-300 uppercase">{label}</span>
                <span className="mt-1 block text-lg break-words text-white group-hover:text-spark-400">{value}</span>
              </span>
            </a>
          ))}
        </div>

        <p className="mt-6 flex items-center gap-2 text-steel-300">
          <ClockIcon className="size-5 text-spark-500" /> {site.hours}
        </p>
      </div>
    </section>
  );
}
