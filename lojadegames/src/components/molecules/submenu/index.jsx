import Minititulo from "../../atoms/Minititulo";
import Subtitulo from "../../atoms/Subtitulo";

function Submenu () {
  return (
    <>
      <div className="submenu">
        <ul>
          <li className="minititulo"><Minititulo name='Luta'/></li>
          <li><Subtitulo name='Mortal Kombat'/></li>
          <li><Subtitulo name='Smash Bros'/></li>
          <li><Subtitulo name='Killer Instinct'/></li>
          <li><Subtitulo name='DBZ Kakarot'/></li>
        </ul>
        <ul>
          <li className="minititulo"><Minititulo name='Ação/Aventura'/></li> 
          <li><Subtitulo name='GTA V'/></li>
          <li><Subtitulo name='Tomb Raider'/></li>
          <li><Subtitulo name='HALO'/></li>
          <li><Subtitulo name='Call of Dutty'/></li>
        </ul>
        <ul>
          <li className="minititulo"><Minititulo name='Corrida'/></li> 
          <li><Subtitulo name='NEED for SPEED'/></li>
          <li><Subtitulo name='Forza Horizon'/></li>
        </ul>
        <div className="bloco-de-tras"></div>
      </div>
    </>
    
  );
}

export default Submenu;