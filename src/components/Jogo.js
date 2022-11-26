export default function Jogo({letras_palavra, str_tela, forca, setBotoes_desabilitados, finalizado}) {
    
    return (
        <div className="jogo">
            <img src={forca} className='imagem' />

            <div>
                <button className="escolha" onClick={()=>setBotoes_desabilitados(false)}>Escolher palavra</button>

                <p className={`${finalizado===1?'correto':''} ${finalizado===-1?'errado':''}`}>{str_tela}</p>

            </div>

        </div>
    )
}