import Fechar from "../../atoms/Fechar";
import Miniimagem from "../../atoms/Miniimagem";
import Minititulo from "../../atoms/Minititulo";
import mario from '../../../assets/mario.png';


function Popup () {
  return (
    <div className="popup">
      <Fechar />
      <Minititulo name='Pedido realizado com sucesso!'/>
      <Miniimagem endereco={mario}/>
    </div>
    
  );
}

export default Popup;