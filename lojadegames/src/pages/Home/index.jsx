import Menu from "../../components/molecules/Menu";
import Tituloprincipal from "../../components/atoms/Tituloprincipal";
import Preco from "../../components/atoms/Preco";
import Subtitulo from "../../components/atoms/Subtitulo";
import Square from "../../components/atoms/Square";
import Homes from '../../components/molecules/Slider/Responsividade'
import Logo from "../../components/atoms/Logo";
import Minititulo from "../../components/atoms/Minititulo";
import './style.css'
import { Estilizacao, theme2, theme } from "./styles";
import Submenu from "../../components/molecules/submenu";
import Popup from "../../components/molecules/Popup";
import React, {  useRef, useState } from "react";
import Button from '../../components/atoms/Button'
import {ThemeProvider} from "styled-components"
import {slide} from '../../components/molecules/Slider/Dados'



function Home (props) {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  console.log(isActive)

  let [valor, setValor] = useState(0);
  function funcAumentar(){
    if(valor>0){
      setValor(valor = 0)
    }else{
      setValor(valor + 1 )
    }
  }
  function funcDiminuir(){
    if(valor>0){
      setValor(valor = 0)
    }else{
      setValor(valor + 1 )
    }
  }

  
  let [valorCarrinho, setValorCarrinho] = useState(0);
  function funcAumentarCarrinho(){
    setValorCarrinho(valorCarrinho + 1 )
    let element = document.getElementById("popup");
    element.style.display = 'block'
    
  }

  let i='';
  let subtitulo = slide[0].subtitulo;
  let titulo=slide[0].titulo;
  let preco = 'R$ 299,99'
  let id = 1;
  if(valor > 0){
    i = theme;
    titulo=slide[1].titulo;
    preco='R$ 288,88';
    subtitulo=slide[1].subtitulo;
    id=2
  }else{
    i=theme2;
    titulo=slide[0].titulo;
    preco='R$ 299,99';
    subtitulo=slide[0].subtitulo;
    id=1;
  }

  let popup = 'popup';

  return (
    <ThemeProvider theme={i} >
    <Estilizacao>
    <body>
      <div className="compra-realizada" id={popup}>
        <Popup />
      </div>
      <div className="botoesSlide">
            <span style={{ textTransform: 'uppercase'}}>{(titulo)}</span>
            <div className="down">
              <p>{id}/2</p>
              <Button id='diminuir' valor='<' click={funcDiminuir}/>
              <Button id='aumentar' valor='>' click={funcAumentar}/>
            </div>
      </div>
      <div className="banner">
        <div className="conteudo">
          <div className="menu">
            <Menu click2={onClick} valor={valorCarrinho}/>
          </div>
          <div ref={dropDownRef} className={`menuhamburguer ${isActive ? 'active' : 'inactive'}`}>
            <div className="classeSubmenu" >
              <Submenu />
              <div className="fundo"></div>
            </div>
          </div>
          <div className="divisao">
            <div className="esquerda">

            </div>
            <div className="direita">
              <Tituloprincipal titulo={titulo}/>
              <Preco preco={preco}/>
              <Subtitulo name={subtitulo}/>
            </div>
          </div>
        </div>
      </div>
      <div className="secao">
        <div className="conteudo">
          <div className="esq">
            <div className="bar">
              <p>The Legend of Zelda - Breath of the Wild</p>
              <div className="line"></div>
            </div>
          </div>
          <div className="dir">
            <div className="bar">
              <p>SEKIRO - Shadows die twice</p>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="destaque">
        <div className="conteudo">
          <div className="title">
            <div className="quadrado">
              <Square />
              <Square />
              <Square />
            </div>
            <Preco preco='Produtos em destaque'/>
          </div>
          <div className="cards">
            <Homes click={funcAumentarCarrinho}/>
          </div>
        </div>
      </div>

      <footer>
          <div className="esquerda">
            <Logo />
          </div>
          <div className="direita">
            <Minititulo name='Agência N1 - Todos os direitos reservados'/>
          </div> 
      </footer>      
    </body>
    </Estilizacao>
    </ThemeProvider>
  );
}



export default Home;