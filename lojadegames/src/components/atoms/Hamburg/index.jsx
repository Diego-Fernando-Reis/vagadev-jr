import './styles'
import {MenuHamburguer} from './styles'

function Hamburg (props) {
  return (
    <MenuHamburguer onClick={props.onclick}>
      <div>
      <div className="barra" ></div>
      </div>
      <div>
      <div className="barra"></div>
      </div>
      <div>
      <div className="barra-diferente"></div>
      </div>
    </MenuHamburguer>
    
  );
}

export default Hamburg;