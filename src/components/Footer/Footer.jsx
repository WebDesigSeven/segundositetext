import React from "react";
import { StyledFooter, LinkWithoutUnderline, ParagrafosLogo, Submenu, LinkWithoutUnderlinewha, TitulosH5 } from "./style";
import {
  FaFacebookSquare,
  FaInstagram,
  FaEnvelope,
  FaBook ,
  FaWhatsapp,
  FaYoutube,
  FaBlog,
  FaShieldAlt,
  FaBabyCarriage, 
  FaChild, 
  FaSchool, 
  FaGraduationCap, 
} from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { Link } from "react-router-dom";
import Logo from "./../../assets/img/logo/logo.png";

function Footer() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5527999592354";
    const message = "Olá, gostaria faz um orçamento.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledFooter className="text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div
              className="rounded-circle shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#4054B2", // Cor de fundo
              }}
            >
              <Link to="/" onClick={handleScrollToTop}> {/* Link para a página inicial */}
                <img src={Logo} height="70" alt="Logo" loading="lazy" />
              </Link>
            </div>
            <ParagrafosLogo className="text-center">Escola Crescer PHD</ParagrafosLogo>
            <ul className="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <a className="text-white px-2" href="https://www.instagram.com/escolacrescerphd/?hl=pt-br" target="_blank" rel="noopener noreferrer">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a className="text-white px-2" href="https://www.facebook.com/EscolaCrescerPHD" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a className="text-white px-2" href="https://www.youtube.com/channel/UCtS9dz67PC6Dc5OQ4Scr1qQ" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <TitulosH5 className="mb-4">Links Úteis</TitulosH5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <LinkWithoutUnderline onClick={handleScrollToTop} as={Link} to="/quem-somos" className="text-white">
                  <TiGroup />
                  <span className="pe-3" />
                  Sobre nós
                </LinkWithoutUnderline>
              </li>
              <li className="mb-2">
                <LinkWithoutUnderline className="text-white">
                  <FaBlog  />
                  <span className="pe-3" />
                  Blog
                </LinkWithoutUnderline>
              </li>
              <li className="mb-2">
                <LinkWithoutUnderline className="text-white">
                  <FaShieldAlt  />
                  <span className="pe-3" />
                  Política de Privacidade
                </LinkWithoutUnderline>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <TitulosH5 className="mb-4">Séries de Ensino</TitulosH5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <LinkWithoutUnderline onClick={handleScrollToTop} as={Link} to="/criacao-de-sites" className="text-white">
                  <FaBabyCarriage  />
                  <span className="pe-3" />
                  Berçário
                </LinkWithoutUnderline>
              </li>
              <li className="mb-2">
                <LinkWithoutUnderline onClick={handleScrollToTop} as={Link} to="/marketing-digital" className="text-white">
                  <FaChild  />
                  <span className="pe-3" />
                  Educação Infantil
                </LinkWithoutUnderline>
              </li>
              <li className="mb-2">
                <LinkWithoutUnderline onClick={handleScrollToTop} as={Link} to="/social-media" className="text-white">
                  <FaSchool  />
                  <span className="pe-3" />
                  Ensino Fundamental I
                </LinkWithoutUnderline>
              </li>
              <li className="mb-2">
                <LinkWithoutUnderline onClick={handleScrollToTop} as={Link} to="/social-media" className="text-white">
                  <FaBook  />
                  <span className="pe-3" />
                  Ensino Fundamental II
                </LinkWithoutUnderline>
              </li>
              <li className="mb-2">
                <LinkWithoutUnderline onClick={handleScrollToTop} as={Link} to="/social-media" className="text-white">
                  <FaGraduationCap  />
                  <span className="pe-3" />
                  Ensino Médio
                </LinkWithoutUnderline>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <TitulosH5 className="mb-4">Contato</TitulosH5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <LinkWithoutUnderlinewha className="text-white" onClick={handleWhatsAppClick}>
                  <FaWhatsapp size={20} />
                  <span className="pe-2" />
                  WhatsApp | Celular: <br /> <strong>27 9 9959 2354</strong>
                </LinkWithoutUnderlinewha>
              </li>
              <li className="mb-2">
                <LinkWithoutUnderline className="text-white">
                  <FaEnvelope size={20} />
                  <span className="pe-2" />
                  Email:<br /> <strong>crescerphd@crescerphd.com.br</strong>
                </LinkWithoutUnderline>
              </li>
              <li className="mb-2">

                <LinkWithoutUnderline className="text-white">
                  <FaEnvelope size={20} />
                  <span className="pe-2" />
                  Endereço: <br /><strong>Av. Rio Branco, 1805, Praia do Canto, Vitória, ES, CEP 29055-643</strong>
                </LinkWithoutUnderline>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Submenu className="text-center p-3">
        &copy; 2022 - {new Date().getFullYear()} Escola Crescer PHD. Desenvolvido com Rabbit Digital
      </Submenu>
    </StyledFooter>
  );
}

export default Footer;
