"use client";

import "./historia.css";

export default function Historia() {
    return (
        <>
            <div className="section1">
                <img src="/comeco.jpeg" alt="Início da G2 Barbearia" className="image full-width" />
                <div className="overlay">
                    <h1>O Início de um Sonho</h1>
                    <p>A G2 Barbearia nasceu da paixão pela arte da barbearia e do desejo de criar um espaço onde estilo e conforto se encontram. Desde o primeiro dia, nosso compromisso foi proporcionar cortes impecáveis e um ambiente acolhedor, onde cada cliente se sente especial.</p>
                </div>
            </div>

            <div className="section">
                <img src="/tradicao.jpeg" alt="Tradição da G2" className="image full-width" />
                <div className="overlay">
                    <h1>Tradição e Modernidade</h1>
                    <p>Na G2, unimos técnicas clássicas da barbearia tradicional com as tendências mais modernas. Seja para um corte clássico, um degradê perfeito ou um acabamento na barba, nossos profissionais estão sempre atualizados para oferecer o melhor serviço.</p>
                </div>
            </div>

            <div className="section">
                <img src="/feliz.jpeg" alt="Experiência G2" className="image full-width" />
                <div className="overlay">
                    <h1>Muito Mais do Que Uma Barbearia</h1>
                    <p>Mais do que cortes de cabelo e barba, criamos um ambiente onde você pode relaxar e viver uma experiência única. Nossa missão é garantir que cada cliente saia satisfeito e confiante, pronto para encarar qualquer desafio com estilo.</p>
                </div>
            </div>
        </>
    );
}