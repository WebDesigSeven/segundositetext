import styled from "styled-components";

export const ImagemCarrousel = styled.img`
  width: 100%;
  height: auto; /* Permite que a altura seja ajustada automaticamente */
  max-height: 500px; /* Altura máxima padrão */
  //object-fit: cover; /* Garante que a imagem preencha o espaço sem distorção */

  @media (max-width: 768px) {
    max-height: 350px; /* Altura máxima reduzida para telas médias */
  }

  @media (max-width: 576px) {
    max-height: 250px; /* Altura máxima ainda menor para telas pequenas */
  }
`;


export const CarouselCaption = styled.div`
  &.carousel-caption {
    text-align: left;
    padding: 20px;
    color: #000000;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    background: linear-gradient(rgba(182, 31, 252, 0.5), rgba(105, 122, 179, 0.5));
    border-radius: 15px;

    @media (max-width: 576px) {
      padding: 10px; /* Reduzindo o padding para telas menores */
    }
  }
`;

export const CarouselTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  text-shadow: 3px 3px 4px rgba(255, 255, 255, 0.5);
  color: #000000;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

export const CarouselText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  color: #000000;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
