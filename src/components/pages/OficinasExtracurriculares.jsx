import React,  { useEffect } from "react";
import { FaVolleyballBall, FaPaintBrush, FaBasketballBall, FaFutbol, FaTableTennis } from "react-icons/fa"; // Importando ícones específicos
import { OficinaContainer, AtividadeCard, Title, StringFont } from "./styles"; // Certifique-se de importar corretamente

// animações
import AOS from "aos";
import "aos/dist/aos.css";

const OficinasExtracurriculares = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const atividades = [
        { nome: "Volei", icon: <FaVolleyballBall /> }, // Ícone para Vôlei
        { nome: "Arte", icon: <FaPaintBrush /> }, // Ícone para Arte
        { nome: "Basquete", icon: <FaBasketballBall /> }, // Ícone para Basquete
        { nome: "Futsal", icon: <FaFutbol /> }, // Ícone para Futsal
        { nome: "Squash", icon: <FaTableTennis /> }, // Ícone para Squash
    ];


    return (
        <OficinaContainer>
            <Title data-aos="flip-right" data-aos-duration="2000">Oficinas Extracurriculares</Title>
            <StringFont data-aos="flip-right" data-aos-duration="2000">
            <p data-aos="flip-right" data-aos-duration="2000">A Escola entende que oferecer opções nas diversas áreas é fundamental, visto que há múltiplos talentos, e esses devem ser estimulados.</p>
            </StringFont>
            <div data-aos="flip-down" data-aos-duration="2000">
                {atividades.map((atividade, index) => (
                    <AtividadeCard key={index}>
                        <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{atividade.icon}</div>
                        {atividade.nome}
                    </AtividadeCard>
                ))}
            </div>
        </OficinaContainer>
    );
};

export default OficinasExtracurriculares;