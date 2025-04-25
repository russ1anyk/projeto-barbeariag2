import "./blog.css";
export default function Blog() {
    const items = [
        {
            titulo: "FUNCIONAMENTO NO CARNAVAL",
            texto: "Devido ao feriado de carnaval, nossa barbearia estará fechada nos dias 14 e 15 de fevereiro. Agende seu horário com antecedência!",
            imagem: "/imagem1.jpg"
        },
        {
            titulo: "NOVO SERVIÇO: BARBA DESIGN",
            texto: "Agora, além do corte de cabelo, oferecemos o serviço de design de barba. Venha experimentar a nossa nova linha de cuidados para a barba!",
            imagem: "/imagem2.jpg"
        },
        {
            titulo: "PROMOÇÃO DE CORTES DE CABELO",
            texto: "Durante o mês de março, todos os cortes de cabelo estão com 20% de desconto. Aproveite a promoção e venha renovar seu visual!",
            imagem: "/imagem3.jpg"
        },
        {
            titulo: "HORÁRIO DE FUNCIONAMENTO AMPLIADO",
            texto: "A partir deste mês, estaremos com horário de atendimento ampliado. Agora, atendemos também aos sábados até as 20h!",
            imagem: "/imagem4.jpg"
        },
    ];

    return (
        <div id="container">
            {items.map((item, index) => (
                <div key={index} className={`item ${index % 2 !== 0 ? 'reverse' : ''}`}>
                    <div className="texto">
                        <h3>{item.titulo}</h3>
                        <p>{item.texto}</p>
                    </div>
                    <div className="imagem">
                        <img src={item.imagem} alt={item.titulo} />
                    </div>
                </div>
            ))}
        </div>
    );
};

