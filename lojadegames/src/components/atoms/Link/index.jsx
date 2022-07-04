function Link (props) {
  return (
    <p onClick={props.click}><img src={props.endereco} alt="" /><span>{props.nome}</span></p>
    
  );
}

export default Link;