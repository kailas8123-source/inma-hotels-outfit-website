import { MessageCircle } from "lucide-react";
import { company } from "@/lib/site-data";

export function FloatingWhatsApp() {
  return (
    <a className="floating-whatsapp" href={company.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp INMA">
      <MessageCircle size={24} />
    </a>
  );
}
