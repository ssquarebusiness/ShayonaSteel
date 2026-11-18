import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-steel-800 bg-steel-950 py-10 text-sm text-steel-500">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-base font-semibold tracking-wide text-steel-100 uppercase">{site.name}</p>
          <p className="mt-1">
            {site.address.line1}, {site.address.line2}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-spark-400">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        © {site.name}, Nadiad. All rights reserved.
      </p>
    </footer>
  );
}
