"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { categories, work, type CategoryId } from "@/lib/gallery";
import { SectionHeading } from "./Services";
import { ChevronIcon, CloseIcon } from "./icons";

type Filter = CategoryId | "all";

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(() => (filter === "all" ? work : work.filter((w) => w.category === filter)), [filter]);
  const labelFor = (id: CategoryId) => categories.find((c) => c.id === id)?.label ?? "";

  const chips: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All work", count: work.length },
    ...categories.map((c) => ({ id: c.id, label: c.label, count: work.filter((w) => w.category === c.id).length })),
  ];

  return (
    <section id="work" className="bg-steel-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Portfolio" title="Our Work">
          A selection of pergolas, gates, jali panels, sheds and furniture fabricated by our team. Tap any photo to
          view it larger.
        </SectionHeading>

        <div className="mt-8 -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter work by category">
          {chips.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setFilter(c.id)}
              aria-pressed={filter === c.id}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
                filter === c.id
                  ? "border-steel-900 bg-steel-900 text-white"
                  : "border-steel-300 bg-white text-steel-700 hover:border-steel-900"
              }`}
            >
              {c.label} <span className={filter === c.id ? "text-spark-400" : "text-steel-500"}>{c.count}</span>
            </button>
          ))}
        </div>

        <ul className="mt-8 columns-2 gap-3 sm:gap-4 lg:columns-3">
          {items.map((item, i) => (
            <li key={item.src} className="mb-3 break-inside-avoid sm:mb-4">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-lg bg-steel-300"
                aria-label={`View larger: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1024px) 360px, 50vw"
                  className="h-auto w-full transition duration-500 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8 text-left text-xs font-semibold tracking-wider text-white uppercase opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                  {labelFor(item.category)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active !== null && (
        <Lightbox
          items={items}
          index={active}
          onChange={setActive}
          onClose={() => setActive(null)}
          labelFor={labelFor}
        />
      )}
    </section>
  );
}

function Lightbox({
  items,
  index,
  onChange,
  onClose,
  labelFor,
}: {
  items: typeof work;
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
  labelFor: (id: CategoryId) => string;
}) {
  const item = items[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (delta: number) => onChange((index + delta + items.length) % items.length),
    [index, items.length, onChange],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus();
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[60] flex flex-col bg-black/95"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between p-3 text-sm text-steel-300 sm:p-4" onClick={(e) => e.stopPropagation()}>
        <span>
          <span className="font-semibold text-white">{labelFor(item.category)}</span> · {index + 1} / {items.length}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="rounded-full p-2 text-white hover:bg-white/10"
          aria-label="Close viewer"
        >
          <CloseIcon className="size-7" />
        </button>
      </div>

      <div className="relative min-h-0 flex-1">
        <Image
          key={item.src}
          src={item.src}
          alt={item.alt}
          fill
          sizes="100vw"
          className="object-contain px-2 sm:px-20"
          onClick={(e) => e.stopPropagation()}
        />
        {items.length > 1 && (
          <>
            <NavButton side="left" onClick={() => go(-1)} />
            <NavButton side="right" onClick={() => go(1)} />
          </>
        )}
      </div>

      <p className="p-4 text-center text-sm text-steel-300" onClick={(e) => e.stopPropagation()}>
        {item.alt}
      </p>
    </div>
  );
}

function NavButton({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={side === "left" ? "Previous photo" : "Next photo"}
      className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/25 sm:p-3 ${
        side === "left" ? "left-2 sm:left-4" : "right-2 sm:right-4"
      }`}
    >
      <ChevronIcon direction={side} className="size-6 sm:size-7" />
    </button>
  );
}
