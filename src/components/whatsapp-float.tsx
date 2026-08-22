import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/971565242459"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[70] grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition hover:scale-105"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
