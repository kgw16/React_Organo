import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

   
    
    
    const [nome,setNome] = useState('');
    const [cargo,setCargo] = useState('');
    const [imagem,setImagem] =useState('');
    const [time,setTime]= useState('')

    const oaSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={oaSalvar}>
                <h2>Preencha o formulario para criar o card do calaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor = {nome}
                    aoAlterado={valor=>setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    valor = {cargo}
                    aoAlterado={valor=>setCargo(valor)} 
                />
                <CampoTexto 
                    label='imagem' 
                    placeholder='Digite o endereço da imagem'
                    valor = {imagem}
                    aoAlterado={valor=>setImagem(valor)} 
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Time' 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor=>setTime(valor)}
                />
                <Botao >
                Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario