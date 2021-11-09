import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";


const Contact = ({contactRef, hasContactButtonBeenClick, onContactButtonClick}) => {
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const isFormField = !(email === "" || name === "" || subject === "" ||message=== "")
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isFormField){  
      emailjs
        .sendForm(
          "service_m6dt2pi",
          "template_po2ls77",
          formRef.current,
          "user_QlN2469y1xy5BN0xmC066"
        )
        .then(
          (result) => {
            console.log(result.text);
            setEmail("");
            setName("");
            setSubject("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
      }
  };

  return (
    <>
    <div className="c" ref={contactRef}>
      <div className="break"></div>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <div className="c-left-rwapper">
            <h1 className="c-title">Vamos falar sobre seu projeto!</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +55 (19) 98771-6112
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                sabino.eduardo.guerra@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="c-right-rwapper">
            <p className="c-desc">
              <b>O que você tem em mente?</b> Entre em contato! Estou sempre disponível para trabalhos novos.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input className="input" type="text" placeholder="Nome" name="user_name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input className="input" type="text" placeholder="Assunto" name="user_subject" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <input className="input" type="email" placeholder="Email" name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea rows="5" placeholder="Mensagem" name="message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button 
               onClick={() => isFormField && onContactButtonClick(true)}
               className={isFormField ? "" : "disabled-button"}
              > 
                Enviar
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;