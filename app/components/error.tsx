"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="not-found"><p className="eyebrow">Algo deu errado</p><h1>Não foi possível carregar esta página.</h1><button className="button-primary" onClick={() => reset()}>Tentar novamente</button></main>;
}
