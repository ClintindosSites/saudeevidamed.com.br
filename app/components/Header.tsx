"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { whatsapp } from "@/lib/services";

const mainNav = [
  {
    label: "Início",
    href: "/#inicio",
  },
  {
    label: "Por que escolher",
    href: "/#diferenciais",
  },
  {
    label: "Como funciona",
    href: "/#como-funciona",
  },
];

const serviceNav = [
  {
    label: "Programas e Laudos",
    href: "/servicos/programas-e-laudos",
  },
  {
    label: "Exames Ocupacionais",
    href: "/servicos/exames-ocupacionais",
  },
  {
    label: "Avaliações Ambientais",
    href: "/servicos/avaliacoes-ambientais",
  },
  {
    label: "Exames Complementares",
    href: "/servicos/exames-complementares",
  },
  {
    label: "Treinamentos de NRs",
    href: "/servicos/treinamentos-nrs",
  },
  {
    label: "Análise Ergonômica do Trabalho",
    href: "/servicos/analise-ergonomica",
  },
];

const whatsappMessage =
  "Olá! Gostaria de falar com um especialista da Saúde e Vida.";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const closeMenus = () => {
    setOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <>
      <div className="topbar">
        <div>Saúde ocupacional e segurança do trabalho para empresas</div>
        <div>Há 14 anos cuidando de pessoas e negócios</div>
      </div>

      <header className="header">
        <Link
          href="/#inicio"
          className="brand"
          onClick={closeMenus}
          aria-label="Ir para o início"
        >
          <Image
            src="/logo.webp"
            alt="Saúde e Vida — Saúde Ocupacional"
            width={200}
            height={80}
            className="brand-logo"
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {mainNav.map(item => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}

          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => setSolutionsOpen(current => !current)}
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              Soluções
              <ChevronDown
                size={16}
                className={solutionsOpen ? "rotate-icon" : ""}
                aria-hidden="true"
              />
            </button>

            {solutionsOpen && (
              <div className="nav-dropdown-menu">
                <div className="dropdown-heading">
                  <strong>Soluções para sua empresa</strong>
                  <span>Conheça nossas áreas de atuação</span>
                </div>

                {serviceNav.map(service => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setSolutionsOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <a
          className="header-cta btn-whatsapp"
          href={whatsapp(whatsappMessage)}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/whatsapp.svg"
            width={20}
            height={20}
            className="whatsapp-icon"
            alt=""
            aria-hidden="true"
          />
          <span>Falar com especialista</span>
        </a>

        <button
          type="button"
          className="menu-button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(current => !current)}
        >
          {open ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </header>

      {open && (
        <nav className="mobile-nav" aria-label="Navegação mobile">
          {mainNav.map(item => (
            <Link key={item.href} href={item.href} onClick={closeMenus}>
              {item.label}
            </Link>
          ))}

          <div className="mobile-services">
            <span className="mobile-section-label">Soluções</span>

            {serviceNav.map(service => (
              <Link key={service.href} href={service.href} onClick={closeMenus}>
                {service.label}
              </Link>
            ))}
          </div>

          <a
            href={whatsapp(whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="mobile-whatsapp btn-whatsapp"
            onClick={closeMenus}
          >
            <Image
              src="/whatsapp.svg"
              width={20}
              height={20}
              className="whatsapp-icon"
              alt=""
              aria-hidden="true"
            />
            <span>Falar com especialista</span>
          </a>
        </nav>
      )}
    </>
  );
}
