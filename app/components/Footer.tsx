import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { services, whatsapp } from "@/lib/services";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link
            href="/#inicio"
            className="brand footer-brand bg-[#f5f5f5] rounded-2xl"
          >
            <Image
              src={"/logo.webp"}
              width={200}
              height={80}
              alt="botão do whatsapp"
            />{" "}
          </Link>
          <p className="footer-copy">
            Medicina e segurança do trabalho com orientação técnica, atendimento
            humano e processos que fazem sentido para a sua operação.
          </p>
        </div>
        <div>
          <p className="footer-label">Soluções</p>
          <div className="footer-links">
            {services.slice(0, 4).map(service => (
              <Link key={service.slug} href={`/servicos/${service.slug}`}>
                {service.title}
                <ArrowUpRight size={13} />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-label">Converse com a equipe</p>
          <p className="footer-copy">
            Receba uma orientação inicial para entender as necessidades da sua
            empresa.
          </p>
          <a
            className="footer-button btn-whatsapp"
            href={whatsapp(
              "Olá! Quero conversar sobre saúde ocupacional para minha empresa."
            )}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={"/whatsapp.svg"}
              width={20}
              height={20}
              className="brightness-0 invert"
              alt="botão do whatsapp"
            />{" "}
            Falar no WhatsApp
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Saúde e Vida · Saúde ocupacional e segurança do trabalho
      </div>
    </footer>
  );
}
