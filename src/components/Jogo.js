export default function Jogo({letras_palavra, str_tela, forca, setBotoes_desabilitados, finalizado, setStr_tela, reinicio}) {
    function cliqueEscolherPalavra(){
        reinicio()
    }
    return (
        <div className="jogo">
            <img src={forca} className='imagem' alt=''/>

            <div>
                <button className="escolha" onClick={cliqueEscolherPalavra}>Escolher palavra</button>

                <p className={`${finalizado===1?'correto':''} ${finalizado===-1?'errado':''}`}>{str_tela}</p>

            </div>

        </div>
    )
}