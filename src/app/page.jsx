"use client";
import "./home.css";
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {

  const depoimento = [
    { nome: "MC Ryan", frase: "Barbearia G2 é braba! Corte na régua e atendimento top. Os caras são visão!", img: "/ryan.jfif" },
    { nome: "MC Kevin", frase: "Barbearia G2 é outro nível! Corte chave e atendimento monstro. Sai de lá transformado!", img: "/kevin.jfif" },
    { nome: "MC IG", frase: "Barbearia G2 é pesada! Corte fino e trato de responsa. Os cria deixa a gente chavão!", img: "/ig.jpg" },
    { nome: "MC LAN", frase: "Barbearia G2 é o pique! Corte monstro e atendimento zika. A nave sai pronta!", img: "/lan.avif" }
  ];


  const destaque = [
    { nome: "Blindado", preco: 50, img: "/blindado1.jpg" },
    { nome: "Blindado", preco: 50, img: "/blindado2.jfif" },
    { nome: "Blindado", preco: 50, img: "/blindado3.jpg" },
  ];

  const franquia = [
    { cidade: "Campinas", img: "/barber1.jpg", historia: "Um ex-cliente virou franqueado e transformou a unidade em um ponto elegante no Cambuí, com foco em networking e cortes modernos." },
    { cidade: "Santos", img: "/barber2.jpg", historia: "Dois irmãos surfistas abriram uma barbearia com clima praiano, café artesanal e eventos culturais, a poucos passos da praia." },
    { cidade: "Ribeirão Preto", img: "/barber3.jpg", historia: "Um barbeiro local famoso abriu a unidade com estilo rústico e vibe acolhedora, atraindo de fazendeiros a universitários." }
  ];

  return (
    <>
      <div className="banner">
        <img src="/banner.png" alt="banner" />
      </div>

      <div className="agendamento">
        <h2>Agende seu horário conosco!</h2>
        <p>Escolha o melhor dia e horário para ser atendido com todo o cuidado que você merece.</p>
        <a href="/agenda" className="btn btn-danger">
          AGENDE AGORA!!!!!
        </a>
      </div>

      <h2>Cortes do momento</h2>
      <div className="servicos">
        <div className="container text-center">
          <div className="row">
            {destaque.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card" style={{ width: '18rem' }}>
                  <h5 className="card-title">{item.nome}</h5>
                  <img src={item.img} className="card-img-top" alt={item.nome} />
                  <div className="card-body">
                    <p className="card-text">R$ {item.preco}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container text-center mt-5">
        <h2>Depoimentos</h2>
        <div className="depoimento">
          <div className="row">
            {depoimento.map((item, index) => (
              <div className="col" key={index}>
                <div className="card">
                  <div className="card-header">
                    <Image
                      src={item.img}
                      alt={item.nome}
                      width={80}
                      height={80}
                      className="img-fluid rounded-circle"
                      style={{ objectFit: 'cover' }}
                    />
                    <div>Depoimento de {item.nome}</div>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p>{item.frase}</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fotos">
        <h2>Nossas Franquias</h2>
        {franquia.map((item, index) => (
          <div className="card mb-3" key={index}>
            <img src={item.img} className="card-img-top" alt={item.cidade} />
            <div className="card-body">
              <h5 className="card-title">Franquia de {item.cidade}</h5>
              <p className="card-text">{item.historia}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="resumo">
        <p>Nossa barbearia é mais do que um lugar para cortar cabelo — é uma experiência. Com um ambiente moderno e estiloso, atendimento de qualidade e serviços que vão do clássico ao mais atualizado, nós nos destacamos no mercado.
          Com franquias em Campinas, Santos e Ribeirão Preto, cada unidade tem sua identidade própria, mas todas compartilham a mesma essência: um espaço onde nossos clientes saem não só com um corte impecável, mas também com uma experiência única.
          Seja para um degradê afiado, barba alinhada ou aquele papo descontraído, nossa barbearia é o ponto de encontro de quem valoriza estilo e qualidade.
          🔥 Agende seu horário e eleve seu visual ao próximo nível com a gente!</p>
      </div>

      <div className="agendamento">
        <h2>Agende seu horário conosco!</h2>
        <p>Escolha o melhor dia e horário para ser atendido com todo o cuidado que você merece.</p>
        <a href="/agenda" className="btn btn-danger">
          AGENDE AGORA!!!!!
        </a>
      </div>
    </>
  );
}
