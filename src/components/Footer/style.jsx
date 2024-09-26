import styled from "styled-components";

export const StyledFooter = styled.footer`
  font-family: roboto, sans-serif;  
  background: #1b0483;

`;
export const FooterText = styled.div`
  background-color: #c70000;
  padding: 10px;
  color: #fff;
  text-align: center;
  
  a {
    color: #fff;
    text-decoration: underline;
  }
`;

export const FooterContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }
  
  span {
    font-size: 14px;
  }
`;

export const LinkWithoutUnderline = styled.a`
  text-decoration: none;
  
`

export const LinkWithoutUnderlinewha = styled.a`
  text-decoration: none;
  cursor: pointer;
  
`

export const ParagrafosLogo = styled.p `
  color: #fff;
  font-weight: 600;
`;


export const Submenu = styled.div`
  background-color: #FC6A03;
  color: #fff;
  font-family: roboto, sans-serif;
  font-weight: 600;
`;


export const TitulosH5 = styled.h5`
  color: #FC6A03;
  font-weight: bold;
  text-shadow: 
    1px 1px 0px rgba(0, 0, 0, 0.6),  /* Sombra à direita e abaixo */
    -1px -1px 0px rgba(0, 0, 0, 0.6), /* Sombra à esquerda e acima */
    1px -1px 0px rgba(0, 0, 0, 0.6),  /* Sombra à direita e acima */
    -1px 1px 0px rgba(0, 0, 0, 0.6);  /* Sombra à esquerda e abaixo */

`;