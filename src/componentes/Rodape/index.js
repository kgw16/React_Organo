import './rodape.css'

const Rodape = () =>{

    return(
        <section className='footer'>
            <div className='redes__sociais'>
                <a href="facebook.com" target="_blank">
                    <img src="/imagens/fb.png" alt=''/>
                </a>
                <a href="twitter.com" target="_blank">
                    <img src="/imagens/ig.png" alt=''/>
                </a>
                <a href="instagram.com" target="_blank">
                    <img src="/imagens/tw.png" alt=''/>
                </a>
            </div>
            <img src="/imagens/logo.png" alt=''/>
            <p>Desenvolvido por Alura.</p>
        </section>
    )
}

export default Rodape;