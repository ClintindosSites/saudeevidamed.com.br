import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import ServiceCard from "./ServiceCard";
import { services, whatsapp } from "@/lib/services";
import Image from "next/image";

const differentials = [
  [
    ShieldCheck,
    "Conformidade sem complicação",
    "Orientação técnica para tornar as obrigações legais mais claras e gerenciáveis.",
  ],
  [
    UsersRound,
    "Cuidado que chega à equipe",
    "Atendimento próximo, respeitoso e pensado para a experiência dos colaboradores.",
  ],
  [
    Clock3,
    "Fluxos que respeitam a operação",
    "Processos organizados para reduzir ruídos entre clínica, RH e a rotina da empresa.",
  ],
];
const process = [
  [
    "01",
    "Entenda seu cenário",
    "Uma conversa objetiva para mapear atividade, necessidades e prioridades.",
  ],
  [
    "02",
    "Receba um plano claro",
    "Indicamos os serviços e o melhor caminho para colocar sua empresa em dia.",
  ],
  [
    "03",
    "Conte com a execução",
    "Nossa equipe conduz cada etapa com orientação simples para RH e gestores.",
  ],
];

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section id="inicio" className="hero">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">
              Saúde ocupacional para empresas
            </p>
            <h1>
              Sua empresa segura.
              <br />
              <span>Sua equipe cuidada.</span>
            </h1>
            <p className="hero-copy">
              Medicina e segurança do trabalho com orientação técnica,
              atendimento humano e processos que fazem sentido para a sua
              operação.
            </p>
            <div className="hero-actions">
              <a
                className="button-primary btn-whatsapp"
                href={whatsapp(
                  "Olá! Quero entender quais soluções de saúde ocupacional minha empresa precisa."
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
                Falar com um especialista
              </a>
              <a className="button-ghost" href="#servicos">
                Conhecer soluções <ArrowDownRight size={17} />
              </a>
            </div>
            <div className="hero-points">
              <span>
                <Check size={16} /> Atendimento para empresas de todos os portes
              </span>
              <span>
                <Check size={16} /> Orientação simples para RH e gestores
              </span>
            </div>
          </div>
        </section>
        <section className="stats">
          <div>
            <strong>14</strong>
            <span>
              anos de
              <br />
              experiência
            </span>
          </div>
          <div>
            <strong>165+</strong>
            <span>
              empresas
              <br />
              atendidas
            </span>
          </div>
          <div>
            <strong>100%</strong>
            <span>
              foco em saúde
              <br />e segurança
            </span>
          </div>
        </section>
        <section id="sobre" className="section about">
          <div className="about-visual">
            <div className="about-image" />
            <div className="about-quote">
              <BadgeCheck size={24} />
              <b>Soluções integradas para uma rotina ocupacional mais leve.</b>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Saúde e Vida</p>
            <h2>A saúde ocupacional precisa funcionar na prática.</h2>
            <p>
              Cuidar da saúde e da segurança do trabalho não deveria ser mais
              uma burocracia. Na Saúde e Vida, traduzimos exigências técnicas em
              rotinas claras, atendimento responsável e decisões mais seguras
              para o seu negócio.
            </p>
            <div className="mini-grid">
              <div>
                <Check size={20} />
                <b>Conformidade</b>
                <span>
                  Mais clareza para lidar com programas, exames e laudos.
                </span>
              </div>
              <div>
                <Check size={20} />
                <b>Prevenção</b>
                <span>
                  Ações que apoiam o bem-estar e a produtividade da equipe.
                </span>
              </div>
            </div>
            <a className="text-link" href="#como-funciona">
              Entenda como começamos <ArrowRight size={16} />
            </a>
          </div>
        </section>
        <section id="servicos" className="section services-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Soluções completas</p>
              <h2>Escolha o que sua empresa precisa agora.</h2>
              <p>
                Cada solução tem uma página com mais detalhes e um caminho
                direto para conversar com nossa equipe.
              </p>
            </div>
            <a
              className="button-outline"
              href={whatsapp(
                "Olá! Preciso de ajuda para identificar os serviços ideais para minha empresa."
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} /> Não sei por onde começar
            </a>
          </div>
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </section>
        <section id="diferenciais" className="section">
          <p className="eyebrow">Por que escolher a Saúde e Vida</p>
          <h2>Menos incerteza. Mais segurança para decidir.</h2>
          <div className="differentials">
            {differentials.map(([Icon, title, text]) => (
              <article key={title as string}>
                <span>
                  <Icon size={23} />
                </span>
                <h3>{title as string}</h3>
                <p>{text as string}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="como-funciona" className="process-section">
          <div>
            <p className="eyebrow light">Como funciona</p>
            <h2>Uma jornada simples para começar bem.</h2>
            <p>
              Você não precisa ter todas as respostas antes de entrar em
              contato. Nossa equipe ajuda a organizar o primeiro passo.
            </p>
            <a
              className="button-primary"
              href={whatsapp(
                "Olá! Quero agendar uma conversa inicial para entender as necessidades da minha empresa."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Agendar conversa inicial <ChevronRight size={18} />
            </a>
          </div>
          <div className="process-list">
            {process.map(([number, title, text]) => (
              <div key={number}>
                <strong>{number}</strong>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="final-cta" id="final-cta">
          <p className="eyebrow light">Sua próxima decisão pode ser simples</p>
          <h2>Vamos organizar a saúde ocupacional da sua empresa?</h2>
          <p>
            Fale com quem entende do assunto e receba uma orientação inicial de
            forma clara e direta.
          </p>
          <a
            href={whatsapp(
              "Olá! Quero conversar sobre saúde ocupacional para minha empresa."
            )}
            target="_blank"
            rel="noreferrer"
            className="white-button"
          >
            <Image
              src={"/whatsapp.svg"}
              width={20}
              height={20}
              alt="botão do whatsapp"
            />{" "}
            Chamar no WhatsApp
          </a>
        </section>
      </main>
      <a
        className="floating-whatsapp"
        href={whatsapp("Olá! Gostaria de falar com a Saúde e Vida.")}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <Image
          src={"/whatsapp.svg"}
          width={25}
          height={20}
          className="brightness-0 invert"
          alt="botão do whatsapp"
        />{" "}
      </a>
      <Footer />
    </div>
  );
}
