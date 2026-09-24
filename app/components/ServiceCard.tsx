import Link from "next/link";
import { ArrowRight, Check, FileCheck2, MessageCircle } from "lucide-react";
import { Service, whatsapp } from "@/lib/services";
import Image from "next/image";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="flex items-center justify-center mb-10 service-card-img">
        <Image
          src={service.image}
          width={300}
          height={300}
          alt={service.title}
          className="rounded-2xl h-full w-100"
        />
      </div>
      <p className="eyebrow">{service.kicker}</p>
      <h3>{service.title}</h3>
      <p className="card-copy">{service.cardDescription}</p>
      <div className="card-check">
        <Check size={15} /> Atendimento técnico e orientação clara
      </div>
      <div className="card-actions">
        <Link className="card-details" href={`/servicos/${service.slug}`}>
          Ver detalhes <ArrowRight size={15} />
        </Link>
        <a
          className="card-whatsapp btn-whatsapp"
          href={whatsapp(`Olá! Tenho interesse em ${service.title}.`)}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={"/whatsapp.svg"}
            width={18}
            height={20}
            className="brightness-0 invert"
            alt="botão do whatsapp"
          />{" "}
          Fale Conosco no WhatsApp
        </a>
      </div>
    </article>
  );
}
