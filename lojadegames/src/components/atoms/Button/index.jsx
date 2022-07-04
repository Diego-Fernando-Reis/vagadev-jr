function Botao (props) {
  return (
    <button id={props.id} onClick={props.click}>{props.valor}</button>
  );
}

export default Botao;