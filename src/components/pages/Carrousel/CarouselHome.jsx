import React from "react";
import { Carousel } from "react-bootstrap";
import { ImagemCarrousel,} from "./style";
import Image1 from "../../../assets/img/Imagem do WhatsApp de 2024-09-24 à(s) 12.55.09_33b6c5d8.jpg"
import Image2 from "../../../assets/img/Imagem do WhatsApp de 2024-09-24 à(s) 12.55.09_da41af25.jpg"
import Image3 from "../../../assets/img/Imagem do WhatsApp de 2024-09-24 à(s) 12.55.10_70f4f2aa.jpg"



const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <ImagemCarrousel
          className="d-block w-100"
          src={Image1}
          alt="Slide 1"          
          fluid
        />
        {/* <CarouselCaption className="carousel-caption">
          <CarouselTitle>Transforme sua Presença Online</CarouselTitle>
          <CarouselText>Sites Impactantes, Mídias Sociais Estratégicas e Marketing Digital de Resultados</CarouselText>
        </CarouselCaption> */}
      </Carousel.Item>
      <Carousel.Item>
        <ImagemCarrousel
          className="d-block w-100"
         src={Image2}
          alt="Slide 2"
          fluid
        />
        {/* <CarouselCaption className="carousel-caption">
          <CarouselTitle>Conquiste a Atenção das Redes Sociais</CarouselTitle>
          <CarouselText>Campanhas Criativas que Geram Engajamento e Crescimento</CarouselText>
        </CarouselCaption> */}
      </Carousel.Item>
      <Carousel.Item>
        <ImagemCarrousel
          className="d-block w-100"
          src={Image3}
          alt="Slide 3"
          fluid
        />
        {/* <CarouselCaption className="carousel-caption">
          <CarouselTitle>Alcance Seu Público Alvo</CarouselTitle>
          <CarouselText>Estratégias Digitais Personalizadas para Impulsionar Seus Negócios</CarouselText>
        </CarouselCaption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;