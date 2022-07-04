import Link from "../../atoms/Link";
import Logo from "../../atoms/Logo";
import Hamburg from "../../atoms/Hamburg";
import Bag from '../../../assets/shopping-bag-solid.png';
import Paper from '../../../assets/paper-plane.png';
import Search from '../../../assets/search-solid.png';

function Menu (props) {
  return (
      <>
        <nav>
          <div className="bloco um" >
            <Hamburg onclick={props.click2}/>
            <Logo />
          </div>
          <div className="bloco dois">
            <Link endereco={Paper} nome='Contato' click={props.click}/>
            <Link endereco={Search} nome='Buscar'/>
            <div className="carrinho">
              <img src={Bag} id='bag' alt="" />
              <div className="ball">
                <span>{props.valor}</span>
              </div>
            </div>
            
          </div>
        </nav>
      </>
  );
}

export default Menu;