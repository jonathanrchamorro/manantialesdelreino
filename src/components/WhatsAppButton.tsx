import { AUTHOR } from "@/data/books";
import { WhatsAppLogo } from "@/components/Icons";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={AUTHOR.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp al ${AUTHOR.whatsapp.display}`}
      title={`WhatsApp ${AUTHOR.whatsapp.display}`}
    >
      <WhatsAppLogo size={30} />
    </a>
  );
}
