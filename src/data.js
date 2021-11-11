import netflixImg from "./img/netflix.png"
import huddleImg from "./img/huddle.png"
import dashboardImg from "./img/dashboard.png"

export const products = [
  {
    id: 1,
    img: netflixImg,
    desc: "Eu recriei a página inicial da netflix com o intuito de botar em prática conceitos de UI Design e criar uma REST API para ser usada com Postman. As bibliotecas usadas nesse projeto estão listadas abaixo:",
    title: "Página da Netflix",
    tech: ["React", "Node", "ExpresJs", "Sass", "MongoDB"],
  },
  {
    id: 2,
    img: dashboardImg,
    desc: "Essa é uma aplicação front-end focada no design interatívo. Com conceitos de UI Design, pude criar uma navegação amigável e um dashboard que seja simples de ser usado por qualquer usuário. As bibliotecas usadas nesse projeto estão listadas abaixo:",
    title: "Página de Admin",
    tech: ["React", "Node", "Css", "Html", "MUI"],
  },
  {
    id: 3,
    img: huddleImg,
    desc: "Essa landing page é um dos meus projetos usando Styled Components. pude criar essa aplicação tendo como base um dos 'challenges' da Frontend Mentor, plataforma onde se pode resolver desafios reais de HTML, CSS e JavaScript enquanto trabalha com designs profissionais. As bibliotecas usadas nesse projeto estão listadas abaixo:",
    title: "Landing Page da Huddle",
    tech: ["React", "Node", "Styled Components", "React Icons"],
  },
];