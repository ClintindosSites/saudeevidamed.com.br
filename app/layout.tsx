import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saudeevidamed.com.br"),

  title: {
    default: "Saúde e Vida | Medicina e Segurança do Trabalho em Betim e MG",
    template: "%s | Saúde e Vida",
  },

  description:
    "Soluções em medicina ocupacional e segurança do trabalho para empresas. PCMSO, PGR, LTCAT, ASO, exames ocupacionais, treinamentos de NRs e AET em Betim e Minas Gerais.",

  keywords: [
    "medicina do trabalho",
    "medicina ocupacional",
    "saúde ocupacional",
    "segurança do trabalho",
    "medicina do trabalho Betim",
    "medicina ocupacional Betim",
    "segurança do trabalho Betim",
    "medicina do trabalho MG",
    "PCMSO",
    "PGR",
    "LTCAT",
    "ASO",
    "exame admissional",
    "exame demissional",
    "exame periódico",
    "exames ocupacionais",
    "treinamento NR",
    "análise ergonômica do trabalho",
    "AET",
  ],

  authors: [
    {
      name: "Saúde e Vida",
      url: "https://saudeevidamed.com.br",
    },
  ],

  creator: "Saúde e Vida",
  publisher: "Saúde e Vida",
  applicationName: "Saúde e Vida",

  category: "health",

  alternates: {
    canonical: "https://saudeevidamed.com.br",
    languages: {
      "pt-BR": "https://saudeevidamed.com.br",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://saudeevidamed.com.br",
    siteName: "Saúde e Vida",
    title: "Saúde e Vida | Medicina e Segurança do Trabalho",
    description:
      "Soluções completas em medicina ocupacional e segurança do trabalho para empresas em Betim e Minas Gerais.",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Saúde e Vida - Medicina e Segurança do Trabalho",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saúde e Vida | Medicina e Segurança do Trabalho",
    description:
      "Medicina ocupacional e segurança do trabalho para empresas em Betim e Minas Gerais.",
    images: ["/hero.webp"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
