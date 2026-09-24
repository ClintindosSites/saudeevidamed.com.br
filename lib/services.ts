export const WHATSAPP_NUMBER = "553135323016";
export const whatsapp = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export type Service = {
  slug: string;
  kicker: string;
  title: string;
  image: string;
  cardDescription: string;
  description: string;
  deliverables: string[];
  benefits: string[];
  process: string[];
  faq: { question: string; answer: string }[];
};

const commonFaq = [
  {
    question: "Como saber qual solução minha empresa precisa?",
    answer:
      "A necessidade varia conforme atividade, riscos e número de colaboradores. Nossa equipe faz uma conversa inicial para indicar o melhor caminho.",
  },
  {
    question: "Vocês atendem empresas de todos os portes?",
    answer:
      "Sim. Organizamos o escopo conforme o momento, a operação e as prioridades de cada empresa.",
  },
];

export const services: Service[] = [
  {
    slug: "programas-e-laudos",
    kicker: "Conformidade legal",
    title: "Programas e Laudos",
    image: "/images/programas-e-laudos.webp",
    cardDescription:
      "Documentação técnica para manter sua operação protegida e em conformidade.",
    description:
      "Estruturamos os programas obrigatórios e os laudos técnicos que traduzem os riscos reais da sua operação em um plano de prevenção claro e aplicável.",
    deliverables: [
      "PCMSO — Programa de Controle Médico de Saúde Ocupacional",
      "PGR — Programa de Gerenciamento de Riscos",
      "LTCAT — Laudo Técnico das Condições Ambientais do Trabalho",
      "Apoio técnico para rotinas e atualizações documentais",
    ],
    benefits: [
      "Mais previsibilidade nas obrigações legais",
      "Documentos coerentes com a realidade da empresa",
      "Base técnica para decisões de prevenção",
    ],
    process: [
      "Entendemos o cenário e a atividade da empresa.",
      "Realizamos o levantamento técnico necessário.",
      "Entregamos os documentos e orientamos os próximos passos.",
    ],
    faq: commonFaq,
  },
  {
    slug: "exames-ocupacionais",
    kicker: "Rotina médica",
    title: "Exames Ocupacionais · ASO",
    image: "/images/exames-medicos-ocupacionais.webp",
    cardDescription:
      "Agilidade nos exames admissionais, periódicos, demissionais e de retorno.",
    description:
      "Organizamos a jornada de exames ocupacionais com atendimento acolhedor, documentação assertiva e comunicação prática para o seu RH.",
    deliverables: [
      "Admissional, periódico e demissional",
      "Mudança de função e retorno ao trabalho",
      "Emissão de ASO conforme a necessidade ocupacional",
      "Apoio à organização da agenda dos colaboradores",
    ],
    benefits: [
      "Processo simples para RH e gestores",
      "Mais controle sobre prazos e pendências",
      "Atendimento pensado para a experiência do colaborador",
    ],
    process: [
      "Recebemos os dados e a necessidade de cada colaborador.",
      "Agendamos o atendimento com orientação clara.",
      "Concluímos a documentação e mantemos sua empresa informada.",
    ],
    faq: commonFaq,
  },
  {
    slug: "avaliacoes-ambientais",
    kicker: "Riscos do ambiente",
    title: "Avaliações Ambientais",
    image: "/images/avaliacao-ocupacional-dos-agentes-ambientais.webp",
    cardDescription:
      "Medições técnicas para identificar exposições e orientar ações de prevenção.",
    description:
      "Avaliamos agentes ambientais presentes na rotina de trabalho para dar visibilidade aos riscos e apoiar escolhas seguras para pessoas e operação.",
    deliverables: [
      "Avaliação de ruído, calor e vibração",
      "Análise de gases, poeiras e outros agentes",
      "Levantamento técnico em campo",
      "Relatório para apoiar a gestão de riscos",
    ],
    benefits: [
      "Visão objetiva das exposições ocupacionais",
      "Prioridades mais claras para prevenção",
      "Informações técnicas para programas e laudos",
    ],
    process: [
      "Mapeamos áreas, funções e fontes de exposição.",
      "Executamos as avaliações técnicas necessárias.",
      "Apresentamos os resultados e recomendações de encaminhamento.",
    ],
    faq: commonFaq,
  },
  {
    slug: "exames-complementares",
    kicker: "Diagnóstico complementar",
    title: "Exames Complementares",
    image: "/images/exames-medicos-complementares.webp",
    cardDescription:
      "Exames que completam o cuidado ocupacional de acordo com cada função.",
    description:
      "Facilitamos o acesso a exames complementares com uma coordenação prática, para que a necessidade clínica ocupacional se encaixe melhor na sua operação.",
    deliverables: [
      "Audiometria ocupacional e acuidade visual",
      "ECG, EEG e espirometria",
      "Raio X e exame médico de aptidão física",
      "Avaliação psicológica e psicossocial",
    ],
    benefits: [
      "Centralização de etapas do cuidado ocupacional",
      "Fluxo mais organizado para a empresa",
      "Apoio a requisitos específicos de função",
    ],
    process: [
      "Alinhamos a solicitação e os requisitos ocupacionais.",
      "Orientamos o melhor fluxo para cada exame.",
      "Consolidamos o atendimento com comunicação objetiva.",
    ],
    faq: commonFaq,
  },
  {
    slug: "treinamentos-nrs",
    kicker: "Capacitação prática",
    title: "Treinamentos de NRs",
    image: "/images/treinamento-de-nrs.webp",
    cardDescription:
      "Capacitação que torna a segurança mais presente na rotina da equipe.",
    description:
      "Criamos treinamentos objetivos e conectados à realidade da operação para apoiar a aderência às Normas Regulamentadoras e fortalecer uma cultura de prevenção.",
    deliverables: [
      "Capacitações em Normas Regulamentadoras",
      "Conteúdo adaptado ao contexto da operação",
      "Orientação prática e linguagem acessível",
      "Registro de participação e apoio documental",
    ],
    benefits: [
      "Equipe mais preparada para trabalhar com segurança",
      "Treinamento alinhado à rotina real",
      "Mais consistência na cultura preventiva",
    ],
    process: [
      "Identificamos o público, a atividade e a necessidade.",
      "Planejamos o conteúdo e formato de capacitação.",
      "Realizamos o treinamento e apoiamos os registros necessários.",
    ],
    faq: commonFaq,
  },
  {
    slug: "analise-ergonomica",
    kicker: "Ergonomia aplicada",
    title: "Análise Ergonômica do Trabalho",
    image: "/images/analise-ergonomica-do-trabalho.webp",
    cardDescription:
      "Estudo técnico para tornar postos e processos mais saudáveis e eficientes.",
    description:
      "Observamos as relações entre pessoas, tarefas, mobiliário e organização do trabalho para identificar oportunidades de prevenção e melhoria nas condições ergonômicas.",
    deliverables: [
      "Análise das condições ergonômicas de trabalho",
      "Observação de postos, movimentos e organização das tarefas",
      "Identificação de oportunidades de melhoria",
      "Recomendações técnicas para redução de sobrecarga",
    ],
    benefits: [
      "Apoio à prevenção de desconfortos e afastamentos",
      "Postos mais adequados à atividade e às pessoas",
      "Melhor base para decisões de melhoria",
    ],
    process: [
      "Conhecemos as tarefas e os postos de trabalho.",
      "Realizamos a análise técnica do cenário.",
      "Entregamos recomendações priorizadas para sua empresa.",
    ],
    faq: commonFaq,
  },
];

export const getService = (slug: string) =>
  services.find(service => service.slug === slug);
