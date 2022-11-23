export default function Letra(props){
    return(
        <div class="letra botao">
            <p>{props.letra.toUpperCase()}</p>
        </div>
    )
}