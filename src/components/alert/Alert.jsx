import './alert.css' 
import alertIcon from '../../img/alertIcon.png'
function Alert({hasContactButtonBeenClick , onContactButtonClick}) {
    document.body.classList.add('no-scrolling')
    const handleClick = () => {
        document.body.classList.remove('no-scrolling')
        onContactButtonClick(false)
    }
    return (
        <div className="alert-wrapper">
            <div className="alert-container">
            
                
                <img src={alertIcon} alt="Icon" className="alert-circle" />
                
                <h2 className="alert-title">Sucesso</h2>
                <p className="alert-text">Sua mensagem foi enviada!</p>
                <button className="alert-button"  onClick={handleClick}>OK</button>
            </div>
            
        </div>
    )
}

export default Alert
