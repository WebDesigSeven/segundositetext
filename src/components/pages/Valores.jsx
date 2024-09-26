import React, { useEffect, } from "react";
import { StyledTipo, Title, TitleH3, StringFont } from "./styles";
import {FaStar} from "react-icons/fa"; // Exemplo de ícone
import AOS from "aos";
import "aos/dist/aos.css";

const Valores = () => {
    useEffect(() => {
        AOS.init();
    }, []);



    return (
        <div style={{ margin: 0, width: "100%" }}>
            <StyledTipo>
                <div className="container mx-auto my-5">
                    <div className="row">
                        <div className="col-12">
                            <Title
                                className="text-center mt-5"
                                data-aos="zoom-out-up"
                                data-aos-duration="800"
                            >
                                Nossos Princípios
                            </Title>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-6 col-md-6 col-sm-12 col-12 my-4"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                        >
                            <div className="card-container">
                                <TitleH3 className="card-title">Missão</TitleH3>
                                <StringFont className="card-description">
                                    Oferecer uma formação integral, valorizando a elaboração da própria identidade e formando cidadãos criativos, conscientes e éticos.
                                </StringFont>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-6 col-sm-12 col-12 my-4"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                        >
                            <div className="card-container">
                                <TitleH3 className="card-title">Valores</TitleH3>
                                <StringFont className="card-description">
                                    <p>
                                        <FaStar style={{ color: '#FC6A03', marginRight: '8px' }} />
                                        Honestidade e ética
                                    </p>
                                    <p>
                                        <FaStar style={{ color: '#FC6A03', marginRight: '8px' }} />
                                        Disciplina e organização
                                    </p>
                                    <p>
                                        <FaStar style={{ color: '#FC6A03', marginRight: '8px' }} />
                                        Responsabilidade social e trabalho cooperativo
                                    </p>
                                    <p>
                                        <FaStar style={{ color: '#FC6A03', marginRight: '8px' }} />
                                        Respeito à vida, aos outros e a si próprio
                                    </p>
                                </StringFont>


                            </div>
                        </div>
                    </div>
                </div>
            </StyledTipo>
        </div>
    );
};

export default Valores;
