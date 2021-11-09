import "./about.css";
import aboutImg from '../../img/about.svg'
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        
        <div className="a-card">
          <img
            src={aboutImg}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre mim</h1>
        <p className="a-sub">
          "Ajudar empresas a se tornarem mais valiosas e produtivas
           através da tecnologia é minha paixão"
        </p>
        <p className="a-desc">
          Eu sou um desenvolvedor full stack formado em TI pela Etec Fernando Prestes, escola técnica, 
          onde pude ter a chance de desenvolver muitas aplicações web.
          Utilizo de <b> Html </b>, <b>Css</b>, <b>Javascript</b>, <b>React</b> e <b>Sass </b> no front-end, e
          <b> Node.js </b>, <b> Express.js </b>, <b> MongoDB </b> são as tecnologias que uso no back-end.
        </p>
        
      </div>
    </div>
  );
};

export default About;