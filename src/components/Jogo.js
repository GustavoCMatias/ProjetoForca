export default function Jogo({letras_palavra, str_tela, forca, setBotoes_desabilitados}) {
    
    return (
        <div className="jogo">
            <img src={forca} className='imagem' />

            <div>
                <button className="escolha" onClick={()=>setBotoes_desabilitados(false)}>Escolher palavra</button>

                <p>{str_tela}</p>

            </div>

        </div>
    )
}