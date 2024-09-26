import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaLock, FaUser, FaChalkboardTeacher, FaClipboard, FaUserTie, FaBars, FaTimes } from "react-icons/fa";
import logo from './../../assets/img/logo/logo.png'; // Importe seu logo

// Animação de balançar
const swing = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
  100% { transform: rotate(0deg); }
`;

// Estilos do Navbar
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1b0483;
  color: #ffffff;
  flex-wrap: wrap;
  font-family: 'roboto', sans-serif;
`;



const Logo = styled.img`
  width: 150px; 
  height: auto; 
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;

  li {
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #ddd;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; // Mostra/oculta o menu
  }
`;

const NavbarButton = styled(Button)`
  margin-right: 5px;
  background-color: #fcad05;
  color: white;
  border: none;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  
  &:hover {
    background-color: #fcad04;
  }

  &:active {
    background-color: #fcad01;
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #fcad05;
  }

  svg {
    margin-right: 5px; 
    margin-bottom: 3px;
  }
`;

const NavbarButtonAgenda = styled(Button)`
  margin-right: 5px;
  background-color: #FC6A03;
  color: white;
  animation: ${swing} 1s infinite; 
  
  &:hover {
    background-color: #e95c02; 
  }

  &:active {
    background-color: #d95b01; 
    transform: scale(0.95); 
  }

  &:focus {
    outline: none; 
    box-shadow: 0 0 5px #FC6A03; 
  }
`;

// Botão de menu
const MenuToggle = styled(Button)`
  display: none; 
  @media (max-width: 768px) {
    display: flex; 
    background: transparent; 
    border: none; 
    color: white; 
  }
`;

// Estilos do Modal
const StyledModal = styled(Modal)`
  .modal-content {
    background-color: #f9f9f9;
    border-radius: 10px;
    border: none;
  }

  .modal-header {
    border-bottom: none;
  }

  .modal-title {
    color: #333;
  }

  .modal-body {
    color: #555;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    li {
      padding: 10px 0;
      cursor: pointer;
      transition: background-color 0.3s;
      display: flex;
      align-items: center;

      &:hover {
        background-color: #e0e0e0;
        border-radius: 5px;
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  .modal-footer {
    border-top: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; // Espaço entre os botões
`;

// Navbar com Modal do Bootstrap
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <NavbarContainer>
      <Link to="/"> {/* Redireciona para a página inicial */}
        <Logo src={logo} alt="Logo" />
      </Link>
        <MenuToggle onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
        <Menu isOpen={isMenuOpen}>
          <li>Sobre nós</li>
          <li>Ensino</li>
          <li>Contato</li>
          <li>Blog</li>
          <li>Trabalhe conosco</li>
        </Menu>
        <ButtonContainer>
          <NavbarButtonAgenda variant="">Agende sua Visita</NavbarButtonAgenda>
          <NavbarButton variant="secondary" onClick={handleShow}>
            <FaLock /> Área Restrita
          </NavbarButton>
        </ButtonContainer>
      </NavbarContainer>

      <StyledModal show={showModal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Área Restrita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              <FaUser />
              Pais/Responsáveis
            </li>
            <li>
              <FaChalkboardTeacher />
              Professores
            </li>
            <li>
              <FaUserTie />
              Administrativo
            </li>
            <li>
              <FaClipboard />
              Alunos
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </StyledModal>
    </>
  );
};

export default Navbar;
