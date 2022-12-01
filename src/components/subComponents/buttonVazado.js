import '../default.css';

// Toda vez que precisar usar um botão verde, só usar esse componente aqui e 
// passar como props o nome que vai dentro

function ButtonVazado(props){
    return(
        <button className="buttonVazado">
            {props.name}
        </button>
    );
}

export default ButtonVazado;