import styled from "styled-components";
// import backimage from '../../img/19198948.jpg'


// Home

export const Principal = styled.div `
    font-family: 'roboto', sans-serif;
`;

export const Title = styled.h1 `
    color: #FC6A03;
    font-weight: bolder;
    font-family: roboto;
`;

export const TitleH3 = styled.h3 `
    color: #FC6A03;
    font-weight: bolder;
    font-family: roboto;
`;

export const TitleH5 = styled.h5 `
    font-weight: bolder;
    font-family: roboto;
`;

export const StringOrange = styled.span`
    color: #FC6A03;
    font-weight: bolder;

`;

export const StringFont = styled.span`
    font-family: roboto, sans-serif;
    font-size: 18px;
    font-weight: 400;
`
;

export const SobreNos = styled.h1`
    border-radius: 0px 10px 10px 0px;
    background-color:#FC6A03;
    color: #fff;
    padding: 8px; /* Adiciona espaço interno */
    display: inline-block; /* Faz com que o background se ajuste ao tamanho do texto */
`;

export const Imagen1 = styled.img`
    height: 400px;
    border-radius: 10px;
    margin-top: 30px;

`

export const StyledTipo = styled.div`
  font-family: "Roboto Slab", sans-serif;
  
  color: #000000;
`;

export const VideoIframe = styled.iframe`
    width: 100%;
    height: 315px; /* Ajuste a altura conforme necessário */
    border-radius: 15px; /* Bordas arredondadas */
    border: none; /* Remove a borda padrão */
`;

export const BotaoAgendar = styled.button`
    background-color: #FC6A03; /* Cor de fundo do botão */
    color: white; /* Cor do texto */
    border: none; /* Remove a borda padrão */
    padding: 10px 20px; /* Espaçamento interno */
    border-radius: 5px; /* Bordas arredondadas */
    cursor: pointer; /* Cursor de mão ao passar o mouse */
    font-size: 16px; /* Tamanho da fonte */
    transition: background-color 0.3s; /* Efeito de transição */

    &:hover {
        background-color: #3a3f7c; /* Cor ao passar o mouse */
    }
`;

export const ContainerAgendeVisita = styled.div`
    background-color: #f0f0f0; /* Cor de fundo */
    border-radius: 15px; /* Bordas arredondadas */
    padding: 20px; /* Espaçamento interno */
    margin-top: 20px; /* Espaço acima do container */
    text-align: center; /* Centraliza o texto */
`;

export const Orange = styled.h3`
    border-radius: 10px;
    background-color: #FC6A03;
    text-align: center;
    color: #fff;
    padding: 50px; /* Adiciona espaço interno */
    display: inline-block; /* Mantém o ajuste ao tamanho do texto */
    margin: 10px; /* Adiciona uma margem de 10px em todas as direções */
    flex: 1; /* Faz com que eles cresçam igualmente no espaço disponível */

    /* Responsividade */
    @media (max-width: 768px) {
        padding: 30px; /* Reduz o padding em telas menores */
        font-size: 1.5rem; /* Ajusta o tamanho da fonte */
        margin: 15px 5px; /* Ajusta a margem em telas menores */
    }

    @media (max-width: 480px) {
        padding: 20px; /* Ajusta ainda mais o padding */
        font-size: 1.2rem; /* Ajusta o tamanho da fonte */
        margin: 10px 2px; /* Ajusta a margem em telas menores */
    }
`;


export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* Alinha os cards */
    margin: 20px 0;
`;

export const Card = styled.div`
    position: relative;
    width: calc(20% - 20px); /* Para 5 cards, com espaço entre eles */
    margin: 10px; /* Margem de 10px para todos os lados */
    border-radius: 10px;
    overflow: hidden; /* Esconde o conteúdo que ultrapassa o limite */
    box-shadow: 0 2px 10px rgba(252, 106, 3, 0.5); /* Sombra com a cor #FC6A03 */
    transition: transform 0.3s; /* Efeito de transição */

    &:hover {
        transform: scale(1.05); /* Aumenta o card ao passar o mouse */
    }

    img {
        width: 100%;
        height: auto; /* Ajusta a altura automaticamente */
        object-fit: cover; /* Preenche o card sem distorcer a imagem */
    }

    @media (max-width: 1024px) {
        width: calc(30% - 20px); /* 3 cartões em uma linha em telas médias */
    }

    @media (max-width: 768px) {
        width: calc(45% - 20px); /* 2 cartões em uma linha em telas pequenas */
    }

    @media (max-width: 480px) {
        width: 100%; /* 1 cartão em uma linha em telas muito pequenas */
    }
`;


export const CardTitle = styled.h5`
    position: absolute;
    bottom: 0; /* Alinha o texto na parte inferior */
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
    padding: 10px;
    margin: 0;
`;

export const OficinaContainer = styled.div`
    margin: 40px 0;
    text-align: center;

    h2 {
        margin-bottom: 20px;
        font-size: 2rem; /* Ajuste conforme necessário */
    }

    p {
        margin-bottom: 30px;
        font-size: 1.1rem;
    }
`;

export const AtividadeCard = styled.div`
    display: inline-block;
    background-color: #f0f0f0; /* Cor de fundo */
    border-radius: 10px;
    padding: 20px;
    margin: 10px; /* Espaço entre os cards */
    width: 150px; /* Largura do card */
    height: 100px; /* Altura do card */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra do card */
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05); /* Efeito de aumento ao passar o mouse */
    }
`;export const BlogContainer = styled.div`
margin: 20px;
max-width: 1200px; /* Limita a largura máxima do blog */
padding: 0 20px; /* Espaçamento lateral */
`;

export const TitleBlog = styled.h1`
text-align: center; /* Centraliza o título */
margin-bottom: 20px; /* Espaçamento abaixo do título */
color: #333; /* Cor do título */
`;

export const PostList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around; /* Ajusta a distribuição dos cards */
`;

export const PostCard = styled.div`
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    width: 300px;
    height: 200px;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    position: relative;
    color: white;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 8px;
        z-index: 1;
    }

    h3, p {
        position: relative;
        z-index: 2;
        margin: 0;
    }

    h3 {
        font-size: 1.5em;
        margin-bottom: 10px;
    }

    p {
        font-size: 1em;
    }
`;

export const BlogButton = styled.button`
    background-color: #FC6A03;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s;
    z-index: 2; /* Certifique-se de que o botão está acima do pseudo-elemento */

    &:hover {
        background-color: #e55a02;
    }
`;