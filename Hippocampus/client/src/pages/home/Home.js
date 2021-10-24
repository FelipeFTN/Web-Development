import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

function Home(){
        return(
            <div className="home">
                <Navbar/>
                <h1 id="title">Hippocampus</h1>
                <p>Uma das atividades que mais causa dor de cabeça em quem estuda para provas, concursos ou na faculdade é a organização de um cronograma ou plano de estudos.
Muitas dúvidas ficam na cabeça. Quando devo estudar? Quanto tempo estudo dedicar para cada matéria? Essas dúvidas acabam paralisando as pessoas que deixam de fazer o plano de estudo, o que é um grande erro, pois ele é essencial o sucesso que deseja.
Existe um outro grande problema que é a organização de um plano de estudos que esteja de acordo com a realidade, pois um elevado índice de estudantes não consegue seguir.
Um plano de estudos é uma forma eficaz de ajudá-lo a navegar por sua educação universitária e responsabilizá-lo por seus próprios resultados de aprendizagem.
A gestão do tempo pode ser um desafio. Além das aulas, você provavelmente tem outros compromissos, como atividades extracurriculares, trabalho e compromissos sociais. 
A criação de um plano de estudos permite que você veja como você gasta seu tempo e garante que você está reservando tempo suficiente fora da sala de aula para fazer as tarefas de casa, estudar para os testes e revisar e reter as informações que está aprendendo.
</p><img src="Studying.png" alt="Hippocampus" className="LogoImage"/>

            </div>
        )
}

export default Home
