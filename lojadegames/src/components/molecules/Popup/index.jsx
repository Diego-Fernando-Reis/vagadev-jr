import Fechar from "../../atoms/Fechar";
import Miniimagem from "../../atoms/Miniimagem";
import Minititulo from "../../atoms/Minititulo";
import mario from '../../../assets/mario.png';


function Popup (props) {
  return (
    <div className="popup">
      <Fechar click={props.click}/>
      <Minititulo name='Pedido realizado com sucesso!'/>
      <Miniimagem endereco={mario}/>
    </div>
    
  );
}

export default Popup;