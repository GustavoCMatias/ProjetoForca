export default function Jogo({letras_palavra, str_tela, forca, setBotoes_desabilitados, finalizado, setStr_tela, reinicio, palavra}) {
    function cliqueEscolherPalavra(){
        reinicio()
    }
    return (
        <div className="jogo">
            <img src={forca} className='imagem' alt='' data-test="game-image"/>

            <div>
                <button className="escolha" onClick={cliqueEscolherPalavra} data-test="choose-word">Escolher palavra</button>

                <p className={`${finalizado===1?'correto':''} ${finalizado===-1?'errado':''}`} data-test="word" data-answer={palavra}>{str_tela}</p>

            </div>

        </div>
    )
}