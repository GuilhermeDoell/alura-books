import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import { livros } from './dadosUltimosLancamentos'
import imagemLivro from '../../imagens/livro2.png'
import styled from 'styled-components'

const UltimosLacamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`

function UltimosLacamentos() {
  return (
    <UltimosLacamentosContainer>
      <Titulo 
        cor="#EB9B00" 
        tamanhoFonte="36px" 
      >
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {livros.map( livro => (
          <img src={livro.src} />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda 
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação"
        img={imagemLivro}
      />
    </UltimosLacamentosContainer>
  )
}

export default UltimosLacamentos
