function Link (props) {
  return (
    <p><img src={props.endereco} alt="" /><span>{props.nome}</span></p>
    
  );
}

export default Link;