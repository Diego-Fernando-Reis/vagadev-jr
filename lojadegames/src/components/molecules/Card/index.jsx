import Miniimagem from "../../atoms/Miniimagem";
import Minititulo from "../../atoms/Minititulo";
import Preco from "../../atoms/Preco";
import Button from "../../atoms/Button"

function Card (props) {
  return (
    <>
      <div className="card">
        <Miniimagem  endereco={props.enderecocard}/>
        <div className="sub">
          <Minititulo name={props.nameCard}/>
          <Preco preco={props.precoCard}/>
          <Button valor='COMPRAR' click={props.click} id={props.id} />
        </div>
      </div>
    </>
    
  );
}

export default Card;