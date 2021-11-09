import "./intro.css";
import Me from '../../img/background.svg'

export default function Intro({ contactRef }) {
    function goToContact(){
      contactRef.current.scrollIntoView(
        {
          behavior: "smooth",
        }
      )
    }
    return (
    <div className="intro-wrappar">
      <img className="bg-img" src={Me} alt="Kiwi standing on oval" />    
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Olá, meu nome é</h2>
            <h1 className="i-name">Eduardo Sabino</h1>
            <p className="i-desc">
              Eu crio designs e páginas web para ajudar clientes a atingir seus objetivos!
            </p>
            <button className="i-button" onClick={goToContact} >Entre em contato</button>
          </div>
          
        </div>
        
        <div className="i-right">
          
        </div>
      </div>
    </div>
  );
}
