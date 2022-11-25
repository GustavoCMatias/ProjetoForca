export default function Letra(props){
    return(
        <button className="letra botao" onClick={()=>console.log(props.letra)}>
            <p>{props.letra.toUpperCase()}</p>
        </button>
    )
}