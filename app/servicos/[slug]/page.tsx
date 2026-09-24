import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getService, services, whatsapp } from "@/lib/services";

export function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return (
    <div>
      <Header />
      <main>
        <section className="detail-hero">
          <div className="detail-glow" />
          <div className="detail-inner">
            <Link href="/#servicos" className="back-link">
              <ArrowLeft size={16} /> Voltar para todas as soluções
            </Link>
            <div className="detail-grid">
              <div>
                <p className="detail-kicker">{service.kicker}</p>
                <h1>{service.title}</h1>
                <p className="detail-description">{service.description}</p>
                <div className="hero-actions">
                  <a
                    className="button-primary"
                    href={whatsapp(`Olá! Tenho interesse em ${service.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={18} /> Falar sobre este serviço
                  </a>
                  <a className="button-ghost" href="#proposta">
                    Solicitar proposta <ArrowRight size={17} />
                  </a>
                </div>
              </div>
              <div className="deliverables">
                <p>Esta solução inclui</p>
                <ul>
                  {service.deliverables.map(item => (
                    <li key={item}>
                      <CheckCircle2 size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section impact">
          <div>
            <p className="eyebrow">O impacto para sua empresa</p>
            <h2>Cuidado técnico que apoia decisões melhores.</h2>
            <p>
              Nosso trabalho vai além da entrega. O foco é criar clareza para a
              empresa agir com mais segurança e organizar sua rotina
              ocupacional.
            </p>
          </div>
          <div className="benefit-grid">
            {service.benefits.map((benefit, index) => (
              <article key={benefit}>
                <b>0{index + 1}</b>
                <span>{benefit}</span>
              </article>
            ))}
          </div>
        </section>
        <section className="process-light">
          <div className="section">
            <p className="eyebrow">Como conduzimos</p>
            <h2>Um processo simples, do primeiro contato à entrega.</h2>
            <div className="detail-process">
              {service.process.map((step, index) => (
                <article key={step}>
                  <b>0{index + 1}</b>
                  <ClipboardList size={20} />
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="proposta" className="section proposal">
          <div>
            <p className="eyebrow">Converse com a equipe</p>
            <h2>Vamos entender o que sua empresa precisa.</h2>
            <p>
              Fale pelo WhatsApp para receber uma orientação inicial e uma
              proposta adequada ao seu cenário.
            </p>
            <div className="privacy">
              <ShieldCheck size={19} /> Seus dados são usados apenas para
              iniciar esse atendimento.
            </div>
          </div>
          <div className="proposal-card">
            <h3>Solicitar proposta</h3>
            <p>
              Use o botão abaixo e nossa equipe dará continuidade ao
              atendimento.
            </p>
            <a
              className="button-primary full"
              href={whatsapp(
                `Olá! Quero solicitar uma proposta para ${service.title}.`
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> Solicitar pelo WhatsApp{" "}
              <ChevronRight size={18} />
            </a>
          </div>
        </section>
        <section className="section faq">
          <div>
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2>Antes de começar, é normal ter perguntas.</h2>
          </div>
          <div>
            {service.faq.map(item => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <ChevronRight size={18} />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
