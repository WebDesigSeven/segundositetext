import React, { useEffect } from "react";
import CarouselHome from "./Carrousel/CarouselHome";
import { SobreNos, TitleH5, StringFont, StringOrange, Title, Imagen1, VideoIframe, BotaoAgendar, ContainerAgendeVisita, Orange, CardContainer, Card, CardTitle, Principal } from "./styles";
import { FaBookOpen, FaCheckCircle } from "react-icons/fa"; // Exemplo de ícone

import Valores from "./Valores";
import OficinasExtracurriculares from "./OficinasExtracurriculares"
import Blog from "./Blog";

import Img1 from "./../../assets/img/img1.jpg";
import Img2 from "./../../assets/img/img3.jpg";

import Imga1 from "./../../assets/img/bercario2.jpg"; // Altere para o caminho da sua imagem
import Imga2 from "./../../assets/img/eduInfantil.jpg"; // Altere para o caminho da sua imagem
import Imga3 from "./../../assets/img/fundamentalI.jpg"; // Altere para o caminho da sua imagem
import Imga4 from "./../../assets/img/fundamentalIII.jpg"; // Altere para o caminho da sua imagem
import Imga5 from "./../../assets/img/medio.jpg"; // Altere para o caminho da sua imagem


// animações
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Principal>
            <CarouselHome />
            <div className="container mt-3">
                <SobreNos data-aos="fade-right" data-aos-duration="2000">SOBRE NÓS</SobreNos>

                <div className="row mb-5">
                    <div className="col-md-7" data-aos="zoom-in" data-aos-duration="2000">
                        <Title className="mt-4" >Nossa História</Title>
                        <StringFont className="align-items-center justify-content-center">
                            <p> Desde 1975, a <StringOrange>Escola Crescer PHD </StringOrange>tem sido um marco na <StringOrange>educação de Vitória</StringOrange>. Começamos com turmas do Infantil e, hoje, temos orgulho de atender alunos do <StringOrange>Berçário ao Ensino Médio</StringOrange>, preparando-os para os desafios do Ensino Superior.</p>
                        </StringFont>
                        <StringFont className="align-items-center justify-content-center">
                            <p> Nossa proposta pedagógica é continuamente atualizada para formar alunos completos. Com os <StringOrange>melhores materiais didáticos</StringOrange> e uma equipe de professores dedicada, valorizamos tanto o conhecimento quanto o desenvolvimento emocional, a <StringOrange>autoestima</StringOrange> e o <StringOrange>relacionamento interpessoal </StringOrange>dos nossos alunos.</p>
                        </StringFont>
                        <StringFont className="align-items-center justify-content-center">
                            <p>Este equilíbrio entre conteúdo acadêmico e formação pessoal, junto com o <StringOrange>prazer de aprender</StringOrange>, é o que define o aluno da Escola Crescer PHD. Venha fazer parte dessa história de excelência e transformação!</p>
                        </StringFont>
                    </div>
                    <div className="col-md-5 d-flex align-items-center justify-content-center">
                        <Imagen1 src={Img1} alt="Descrição da imagem" className="img-fluid" data-aos="flip-right" data-aos-duration="2000" />
                    </div>
                </div>

                <div className="text-center mb-5" data-aos="zoom-in-up" data-aos-duration="2000">
                    <FaBookOpen />
                    <Title >Proposta Pedagógica</Title>
                    <TitleH5>Sempre pensando no melhor para nosso aluno</TitleH5>

                </div>

                <div className="row">
                    <div className="col-md-12" data-aos="fade-down-right" data-aos-duration="2000">
                        <Title className="mt-4" >Nossa Proposta</Title>
                        <StringFont>
                            Nosso objetivo é ir além da simples transmissão de conhecimentos, proporcionando um ambiente moderno, confortável e acolhedor para a formação integral dos nossos alunos.

                            Nossa proposta pedagógica visa consolidar e aprofundar os conhecimentos adquiridos, além de contribuir para o desenvolvimento cognitivo, social e ético dos estudantes.
                        </StringFont>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-5 d-flex align-items-center justify-content-center">
                        <Imagen1 src={Img2} alt="Descrição da imagem" className="img-fluid" data-aos="zoom-out-up" data-aos-duration="2000" />
                    </div>
                    <div className="col-md-7" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <Title className="mt-5 mb-4">Formação Integral</Title>
                        <StringFont>
                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Buscamos desenvolver a autonomia, responsabilidade e pensamento crítico dos alunos, sempre apoiados nos 4 pilares da educação:
                            </p>
                        </StringFont>
                        <StringFont>
                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Aprender a aprender: Buscar o prazer em conhecer, descobrir e reconstruir o saber.
                            </p>
                        </StringFont>
                        <StringFont>
                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Aprender a fazer: Colocar em prática os conhecimentos adquiridos.
                            </p>
                        </StringFont>
                        <StringFont>
                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Aprender a conviver: Como forma de responsabilidade por um mundo mais solidário.
                            </p>
                        </StringFont>
                        <StringFont>
                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Aprender a ser: Buscar o desenvolvimento integral Crescer PHD (aluno com autoestima elevada, determinado, disciplinado e realizado).
                            </p>
                        </StringFont>
                    </div>
                </div>
            </div>

            <div className="container">
                <Valores />
            </div>

            <div className="text-center mb-5" data-aos="zoom-out-left" data-aos-duration="2000">
                <Title>Nossa estrutura</Title>
                <TitleH5>Uma estrutura completa para o seu aprendizado!</TitleH5>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <StringFont data-aos="fade-right"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-sine">
                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Amplas salas: Todas as salas atendem as recomendações oficiais.
                            </p>

                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Salas climatizadas: Equipadas com data show para um ensino mais dinâmico.
                            </p>

                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                2 quadras poliesportivas: Espaço para diversas atividades esportivas.
                            </p>

                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Laboratório de Ciências: Totalmente equipado para experimentos e descobertas.
                            </p>

                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Laboratório Maker: Um espaço inovador para projetos e criatividade.
                            </p>

                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Biblioteca “Cecília Meireles”: Um lugar acolhedor para leitura e pesquisa.
                            </p>

                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Jogoteca: Área dedicada a jogos educativos.
                            </p>

                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                2 parquinhos: Espaços seguros e divertidos para as crianças.
                            </p>

                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Ateliê de arte: Local inspirador para expressar criatividade e desenvolver habilidades artísticas.
                            </p>

                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Sala de psicomotricidade: Focada no desenvolvimento motor dos alunos.
                            </p>

                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Auditório: Para apresentações e eventos escolares.
                            </p>

                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Cantina: Oferece deliciosos lanches rápidos.
                            </p>

                            <p>
                                <FaCheckCircle style={{ color: '#FC6A03', marginRight: '8px' }} />
                                Refeitório: Espaço confortável para as refeições diárias.
                            </p>
                        </StringFont>
                    </div>


                    <div className="col-md-5" data-aos="zoom-out" data-aos-duration="2000">
                        <VideoIframe
                            src="https://www.youtube.com/embed/2vlbNLQwQ6E" // ID do vídeo
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></VideoIframe>
                    </div>
                </div>


            </div>

            <ContainerAgendeVisita data-aos="flip-down" data-aos-duration="2000">
                <Title>Agende sua visita</Title>
                <StringFont>
                    <p>Estamos ansiosos para recebê-lo! Clique no botão abaixo para agendar sua visita à nossa escola.</p>
                </StringFont>
                <BotaoAgendar>Agendar Visita</BotaoAgendar>
            </ContainerAgendeVisita>


            <div className="container mt-5" style={{ fontFamy: "roboto" }}>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 d-flex justify-content-center" data-aos="fade-up-left" data-aos-duration="2000">
                        <Orange>Programa bilíngue</Orange>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center" data-aos="fade-down-right" data-aos-duration="2000">
                        <Orange>Educação maker</Orange>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center" data-aos="fade-down-left" data-aos-duration="2000">
                        <Orange>Socioemocional</Orange>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <Title data-aos="flip-down" data-aos-duration="2000">Séries de ensino</Title>
                <CardContainer>
                    <Card data-aos="fade-up" data-aos-duration="2000">
                        <img src={Imga1} alt="Descrição da imagem 1" />
                        <CardTitle>Berçário</CardTitle>
                    </Card>
                    <Card data-aos="fade-up" data-aos-duration="2000">
                        <img src={Imga2} alt="Descrição da imagem 2" />
                        <CardTitle>Educação Infantil</CardTitle>
                    </Card>
                    <Card data-aos="fade-up" data-aos-duration="2000">
                        <img src={Imga3} alt="Descrição da imagem 3" />
                        <CardTitle>Ensino Fundamental I</CardTitle>
                    </Card>
                    <Card data-aos="fade-up" data-aos-duration="2000">
                        <img src={Imga4} alt="Descrição da imagem 4" />
                        <CardTitle>Ensino Fundamental II</CardTitle>
                    </Card>
                    <Card data-aos="fade-up" data-aos-duration="2000">
                        <img src={Imga5} alt="Descrição da imagem 5" />
                        <CardTitle>Ensino Médio</CardTitle>
                    </Card>
                </CardContainer>
            </div>


            <div className="container mt-5">
                <Title data-aos="flip-down" data-aos-duration="2000">
                    Programa Bilíngue Crescer PHD
                </Title>
                <div className="row">

                    <div className="col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-up-left" data-aos-duration="2000">
                        <StringFont>No Programa Bilíngue da Crescer PHD, o inglês é incorporado de maneira integrada e natural ao currículo, abrangendo desde a Educação Infantil. Com AULAS DIÁRIAS e uma abordagem imersiva que abrange diversas disciplinas, nossos alunos desenvolvem a fluência no idioma de forma prática e significativa, preparando-se para oportunidades globais. Além de aprimorar habilidades linguísticas, o programa estimula o desenvolvimento cognitivo, social e acadêmico, formando cidadãos preparados para os desafios de um mundo interconectado.</StringFont>
                    </div>

                    <div className="col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-up-left" data-aos-duration="2000">
                        <Imagen1 src={Img1} alt="Descrição da imagem" className="img-fluid" />
                    </div>

                </div>
            </div>

            <div className="container">
                <OficinasExtracurriculares />
            </div>
            
            <div className="container">
                <Blog />
            </div>
        </Principal>
    );
};

export default Home;
