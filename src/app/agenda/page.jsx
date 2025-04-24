"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "./agenda.css";
import 'react-calendar/dist/Calendar.css';

export default function Barbearia() {
    const barbeiros = [
        { id: 1, nome: "Gabriel", imagem: "/gabriel.jpg" },
        { id: 2, nome: "Gustavo", imagem: "/gustavo.jpg" }
    ];

    const horarios = {
        1: ["13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"],
        2: ["13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"],
    };

    const servicos = [
        { id: 1, nome: "Corte com tesoura", preco: 30.00 },
        { id: 2, nome: "Corte com maquina", preco: 35.00 },
        { id: 3, nome: "Corte com degrade", preco: 40.00 },
        { id: 4, nome: "Barba", preco: 30.00 },
        { id: 5, nome: "Blindadao", preco: 50.00 },
    ];

    const [barbeiroSelecionado, setBarbeiroSelecionado] = useState(null);
    const [horarioSelecionado, setHorarioSelecionado] = useState(null);
    const [dataSelecionada, setDataSelecionada] = useState(null);
    const [servicoSelecionado, setServicoSelecionado] = useState([]);

    const adicionarServico = (servico) => {
        const existe = servicoSelecionado.find((item) => item.id === servico.id);

        if (existe) {
            setServicoSelecionado(
                servicoSelecionado.map((item) =>
                    item.id === servico.id ? { ...item } : item
                )
            );
        } else {
            setServicoSelecionado([...servicoSelecionado, servico]);
        }
    };

    const valorTotal = servicoSelecionado.reduce(
        (total, item) => total + item.preco,
        0
    );

    const dataMinima = new Date();  // Data mínima é o dia de hoje

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h1 className="mb-4">Agendamento de Barbearia</h1>

                    {/* Seleção de barbeiro */}
                    <div className="barbeiros">
                        <div className="mb-4">
                            <h2 className="mb-3">Escolha o barbeiro</h2>
                            <div className="d-flex justify-content-center gap-2 flex-wrap">
                                {barbeiros.map((barbeiro) => (
                                    <button
                                        key={barbeiro.id}
                                        onClick={() => setBarbeiroSelecionado(barbeiro.id)}
                                        className={`btn ${barbeiroSelecionado === barbeiro.id ? 'btn-danger' : 'btn-outline-light'}`}
                                    >
                                        <img
                                            src={barbeiro.imagem}
                                            alt={barbeiro.nome}
                                            className="img-fluid"
                                        />
                                        {barbeiro.nome}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Selecao de data */}
                    {barbeiroSelecionado && (
                        <div className="data">
                            <div className="mb-4">
                                <h2 className="mb-3">Escolha a data</h2>
                                <div className="calendario">
                                    <Calendar
                                        onChange={setDataSelecionada}
                                        value={dataSelecionada}
                                        minDate={dataMinima}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Selecao de horario */}
                    {dataSelecionada && barbeiroSelecionado && (
                        <div className="horario">
                            <div className="mb-4">
                                <h2 className="mb-3">Escolha um horário</h2>
                                <div className="row g-2">
                                    {horarios[barbeiroSelecionado].map((horario, index) => (
                                        <div key={index} className="col-4 col-md-3 col-lg-2">
                                            <button
                                                onClick={() => setHorarioSelecionado(horario)}
                                                className={`btn w-100 ${horarioSelecionado === horario ? 'btn-danger' : 'btn-outline-light'}`}
                                            >
                                                {horario}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Selecao de servico */}
                    {horarioSelecionado && (
                        <div className="servico">
                            <div className="mb-4">
                                <h2 className="mb-3">Escolha um serviço</h2>
                                <div className="row g-2">
                                    {servicos.map((servico) => (
                                        <div key={servico.id} className="col-md-6">
                                            <button
                                                onClick={() => adicionarServico(servico)}
                                                className={`btn w-100 ${servicoSelecionado.some(s => s.id === servico.id) ? 'btn-danger' : 'btn-outline-light'}`}
                                            >
                                                {servico.nome} - R$ {servico.preco.toFixed(2)}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Resumo do agendamento */}
                    {servicoSelecionado.length > 0 && (
                        <div className="resumo">
                            <div className="card bg-secondary text-white mt-4">
                                <div className="card-body">
                                    <h2 className="card-title">Resumo do Agendamento</h2>
                                    <p className="card-text">
                                        <strong>Barbeiro:</strong> {barbeiros.find(b => b.id === barbeiroSelecionado).nome}
                                    </p>
                                    <p className="card-text">
                                        <strong>Data:</strong> {dataSelecionada ? dataSelecionada.toLocaleDateString() : ''}
                                    </p>
                                    <p className="card-text">
                                        <strong>Horário:</strong> {horarioSelecionado}
                                    </p>
                                    <p className="card-text"><strong>Serviços:</strong></p>
                                    <ul className="list-unstyled">
                                        {servicoSelecionado.map((item) => (
                                            <li key={item.id} className="mb-1">
                                                {item.nome} - R$ {item.preco.toFixed(2)}
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className="mt-3">Valor Total: R$ {valorTotal.toFixed(2)}</h3>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
