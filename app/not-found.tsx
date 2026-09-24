import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">Página não encontrada</p>
      <h1>Este caminho não existe.</h1>
      <Link className="button-primary" href="/">
        Voltar para o início
      </Link>
    </main>
  );
}
