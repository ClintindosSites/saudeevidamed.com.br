"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { whatsapp } from "@/lib/services";
import Image from "next/image";

const nav = [
  ["Início", "/#inicio"],
  ["Soluções", "/#servicos"],
  ["Por que escolher", "/#diferenciais"],
  ["Como funciona", "/#como-funciona"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div>Saúde ocupacional e segurança do trabalho para empresas</div>
        <div>Há 14 anos cuidando de pessoas e negócios</div>
      </div>
      <header className="header">
        <Link href="/#inicio" className="brand" onClick={() => setOpen(false)}>
          <Image
            src={"/logo.webp"}
            alt="Logomarca de Saúde e Vida Medicinal"
            width={200}
            height={80}
          />
        </Link>
        <nav className="desktop-nav">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <a
          className="header-cta btn-whatsapp"
          href={whatsapp(
            "Olá! Gostaria de falar com um especialista da Saúde e Vida."
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
          Falar com especialista
        </a>
        <button
          className="menu-button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      {open && (
        <nav className="mobile-nav">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a
            href={whatsapp(
              "Olá! Gostaria de falar com um especialista da Saúde e Vida."
            )}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
            onClick={() => setOpen(false)}
          >
            <Image
              src={"/whatsapp.svg"}
              width={20}
              height={20}
              className="brightness-0 invert whatsapp"
              alt="botão do whatsapp"
            />{" "}
            Falar com especialista
          </a>
        </nav>
      )}
    </>
  );
}
