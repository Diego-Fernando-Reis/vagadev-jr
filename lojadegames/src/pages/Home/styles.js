import styled from 'styled-components';
/*import MortalKombat from '../../assets/principal_banner_desktop.jpg';
import RedDead from '../../assets/principal_banner_desktop_02.jpg'*/
import {slide} from '../../components/molecules/Slider/Dados'

export const Estilizacao = styled.div`
  
  position: relative;
  .conteudo{
    max-width: 1000px;
    margin: 0 auto;
  }

  .inactive{
    opacity: 0;
  }

  .active{
    opacity: 1;
    visibility: visible;
  }

  .visible{
    display: block;
  }

  .contato{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.811);
    z-index: 9999;
    display: none;
    p{
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      color: #F5F5F5;
      background-color: #f55959;
      text-align: center;
      top: 5%;
      right: 2%;
      transform: translate(-50%, -50%);
      z-index: 999;
      cursor: pointer;
    }
    form{
      max-width: 400px;
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #084154;
      border: 3px solid #3EC6E0;
      color: white;
      padding: 100px 50px;
      border-radius: 10px;
      .title{
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
      }
      input{
        width: 100%;
        background-color: white;
        border: none;
        padding: 10px;
        border-radius: 20px;
        margin-bottom: 10px;

      }
      input:focus{
        border: 1px solid #3EC6E0;
      }
      textarea{
        width: 100%;
        padding: 10px;
        resize: none;
      }
    }
  }

  .compra-realizada{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 255, 255, 0.459);
    position: fixed;
    z-index: 999;
    display: none;
    .popup{
      background-color: white;
      width: 200px;
      height: 300px;
      margin: 0 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .box{
        background-color: #f55959;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        right: 10px;
        top: 10px;
        p{
          color: white;
          font-weight: 300;
          position: absolute;
          top: 50%;
          left: 50%;
          cursor: pointer;
          transform: translate(-50%, -50%);
        }
        
      }
      .minititulo{
          font-size: 20px;
          width: 150px;
          text-align: center;
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
      }
      img{
        width: 100px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }

  .botoesSlide{
      position: absolute;
      top: 20vh;
      height: 300px;
      width: 50px;
      background-color: #3EC6E0;
      color: white;
      right: 0;
      border-bottom-left-radius: 10px;
      span{
        writing-mode: vertical-rl;
        font-size: 10px;
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      .down{
        background-color: #084154;
        position: absolute;
        bottom: 0;
        text-align: center;
        width: 100%;
        padding: 5px 0;
        font-size: 10px;
        border-bottom-left-radius: 10px;
        button{
          background-color: transparent;
          border: none;
          color: white;
          margin: 0 5px;
          margin-top: 10px;
          cursor: pointer;
          font-size: 20px;
          font-weight: 400;
          
        }
      }
  }

  .banner{
    padding-bottom: 20%;
    padding-top: 30px;
    background-position: center;
    background-size: cover;
    color: white;
    width: 100%;     
    background-image: url(${props=>props.theme.main});
    .menu{
      nav{
        display: flex;
        justify-content: space-between;
        .bloco{
          display: flex;
          
        }
        .um{
          img{
            width: 100px;
            height: 25px;
          }
        }
        .dois{
          p{
            padding: 0 30px;
            cursor: pointer;
            border-right: 1px solid white;
          }
          #bag{
            padding-left: 30px;
            cursor: pointer;
          }
        }
      }
    }

    .classeSubmenu{
      position: relative;
      
      
      .submenu{
        max-width: 400px;
        height: 160px;
        background-color: #084154;
        border: 1px solid #3EC6E0;
        border-radius: 5px;
        position: absolute;
        top: 20px;
        z-index: 2;
        display: flex;
        ul{
          list-style-type: none;
          padding: 15px 2px 10px 10px;
          .minititulo{
            font-weight: 700;
          }
          li{
            padding: 0 0 0 12px;
          }
          p{
            font-size: 10px;
            font-weight: 400;
            padding: 5px 33px 5px 8px;
            cursor: pointer;
            border-radius: 5px;

          }
          p:hover{
            background-color: #3EC6E0;
            
          }
          
          li:nth-child(1){
            p:hover{
              background-color: transparent;
        }}
        }
        
      }
      .fundo{
        width: 400px;
        height: 160px;
        background-color: #3EC6E0;
        border: 1px solid #3EC6E0;
        border-radius: 5px;
        position: absolute;
        top: 25px;
        left: 5px;
        z-index: 1;

      }
    }
    .menu{
      .bloco{
        p{
          img{
              width: 18px;

          }
        }
        p:nth-child(1), p:nth-child(2) {
            img{
              margin-right: 10px;
            }
        }
        
        .carrinho{
          position: relative;
          .ball{
            position: absolute;
            right: -10px;
            top: 0;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: red;
            span{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }

      }
    }

    

    .divisao{
      display: flex;
      .esquerda{
        width: 50%;
      }
      .direita{
        width: 50%;
        padding: 0 50px;
        text-align: right;
        h1{
          margin-top: 60px;
          text-shadow: 0.1em 0.1em #333
        }

        h2{
          font-size: 40px;
          color: #3EC6E0;
          margin-bottom: 15px;
          text-shadow: 0.1em 0.1em #333
        }

        p{
          font-size: 12px;
          text-shadow: 0.1em 0.2em #000
        }
      }
    }
  }

  .secao{
    .conteudo{
      display: flex;
      justify-content: space-between;
      margin-top: -100px;
      .esq{
        width: 49%;
        padding-top: 30%;
        position: relative;
        background-position: center;
        background-size: cover;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        .bar{
          position: absolute;
          width: 100%;
          padding-top: 8%;
          background-color: #3EC6E0;
          bottom: 0;
          border-left: 7px solid #084154;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          p, .line{
            position: absolute;
            font-weight: 700;
            color: #084154;
            font-size: 12px;
          }
          p{
            top: 50%;
            left: 10px;
            transform: translate(0, -50%);
          }
          .line{
            width: 180px;
            padding-top: 0.3px;
            background-color: #084154;
            top: 50%;
            right: 20px;
            transform: translate(0, -50%);
          }
        }
      }
      .dir{
        width: 49%;
        padding-top: 30%;
        position: relative;
        background-position: center;
        background-size: cover;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        .bar{
          position: absolute;
          width: 100%;
          padding-top: 8%;
          background-color: #3EC6E0;
          bottom: 0;
          border-left: 7px solid #084154;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          p, .line{
            position: absolute;
            font-weight: 700;
            color: #084154;
            font-size: 12px;
          }
          p{
            top: 50%;
            left: 10px;
            transform: translate(0, -50%);
          }
          .line{
            width: 180px;
            padding-top: 0.3px;
            background-color: #084154;
            top: 50%;
            right: 20px;
            transform: translate(0, -50%);
          }
        }
      }
    }
  }
  .destaque{
    padding-bottom: 100px;
    .title{
      display: flex;
      margin-top: 50px;
      .quadrados{
        margin-top: 10px;
        margin-right: 2px;
      }
      h2{
        font-weight: 350;
        color: #084154;
      }
    }
    .cards{
      display: flex;
      justify-content: space-around;
      padding: 0 20px;
      overflow-x: auto;
      scroll-behavior: smooth;
      width: 100%;
      .rec-pagination{
          display: none !important;
        }
        .rec-carousel{
          button:hover{
            background-color: #084154;
            color: white;
          }
          button:active{
            background-color: #084154;
            color: white;
          }
          button:focus{
            background-color: #084154;
            color: white;
          }
        }
      .card{
        margin: 20px 0;
        border-radius: 10px;
        padding-top: 20px;
        -webkit-box-shadow: 0px 0px 10px 4px rgba(0,0,0,0.07); 
        box-shadow: 0px 0px 10px 4px rgba(0,0,0,0.07);
        img{
          width: 250px;
        }
        
        .sub{
          padding: 0 30px;
          padding-top: 20px;
          padding-bottom: 10px;
          background-color: #F5F5F5;
          border-top: 3px solid #3EC6E0;
          text-align: center;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          p{
            font-size: 10px;
            color: #084154;
            text-align: left;
            margin-bottom: 20px;
          }
          h2{
            text-align: left;
            font-size: 14px;
            color: #084154;
            margin-bottom: 10px;
          }
          button{
            text-align: center;
            width: 180px;
            height: 30px;
            border: none;
            background-color: #3EC6E0;
            color: white;
            margin: 0 auto;
            margin-bottom: 10px;
            border-radius: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
  footer{
    display: flex;
    .esquerda{
      width: 30%;
      text-align: right;
      background-color: #084154;
      img{
        width: 80px;
      }
      padding: 10px 10px;
    }
    .direita{
      width: 70%;
      background-color: #3EC6E0;
      color: white;
      padding: 10px 10px;
    }
  }

  @media screen and (max-width: 1100px){
    .menu{
      padding: 0 30px;
    }
    .secao{
      padding-top: 20px;
      .conteudo{
        display: block;
        margin-top: 0;
        .esq{
          width: 95%;
          padding-top: 60%;
          margin: 15px auto;
        }
        .dir{
          width: 95%;
          padding-top: 60%;
          margin: 15px auto;
        }
      }
    }

    .divisao{
        .direita{
          h1{
            padding-right: 10px;
          }

          h2{
            padding-right: 10px;
          }

          p{
            padding-right: 10px;
          }
        }
      }

    .destaque{
      .title{
        .quadrados{
          margin-left: 10px;
        }
      }
    }
  }


  @media screen and (max-width: 800px){

    .botoesSlide{
      top: 520px;
      height: 50px;
      width: 100%;
      z-index: 999;
      span{
        writing-mode: horizontal-tb;
        left: 20px;
        top: 50%;
        transform: translate(0, -50%);
      }
      .down{
        display: flex;
        right: 0;
        width: 70px;
        height: 50px;
        padding: 5px 0;
        font-size: 10px;
        border-bottom-left-radius: 0;
        button{
          background-color: transparent;
          border: none;
          color: white;
          margin: 0 5px;
          margin-top: 10px;
          cursor: pointer;
          font-size: 20px;
          font-weight: 400;
          
        }
      }
    }    

    .banner{
      padding-top: 10px;
      padding-bottom: 0;
      background-image: url(${props=>props.theme.main2});
      .divisao{
        display: block;
        .esquerda{
          display: none;
        }
        .direita{
          width: 100%;
          text-align: right;
          background-color: rgba(0, 0, 0, 0.733);
          margin-bottom: 0;
          margin-top: 280px;
          padding: 20px 25px 40px 25px;
          h1{
            font-size: 30px;
            margin-top: 0;
          }

          h2{
            font-size: 40px;
            color: #3EC6E0;
            margin-bottom: 15px;
          }

          p{
            font-size: 12px;
          }
        }
      }
    }

    

    .destaque{
      .cards{
        .card:nth-child(2), .card:nth-child(3){
          display: none;
        }
      }
      
    }
  }
  
`;

  Estilizacao.defaultProps = {
    theme:{
      main: slide[0].imagem
    }
  }


export const theme = {
  main: slide[1].imagem,
  main2: slide[1].responsivo
}

export const theme2 ={
  main: slide[0].imagem,
  main2: slide[0].responsivo
}