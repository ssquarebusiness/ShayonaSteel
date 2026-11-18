import { whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Shayona Steel on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-whatsapp p-3.5 text-white shadow-lg shadow-black/25 transition hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
      <span className="hidden pr-1 text-sm font-semibold sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
