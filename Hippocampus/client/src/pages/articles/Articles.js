import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Articles.css'

function Articles() {
    return(
        <div className="Articles">
            <Navbar/>
            <h1 id="title">Artigos e Dicas 📚</h1>
            <br />
            <div className="article" >
                <h1>Lembre-se de fazer pausas ⌛</h1>
                <p>Se sua programação inclui sessões de estudo longas e de várias horas, 
                    certifique-se de fazer breves pausas de vez em quando para alongar, 
                    hidratar e descansar sua mente. Isso manterá seu cérebro atualizado 
                    e ajudará a evitar que você se sinta sobrecarregado</p>
            </div>
            <br />
            <div className="article" >
                <h1>Programe um tempo para outras atividades ⏱️</h1>
                <p>Ao atingir um cronograma equilibrado, sua mente ficará mais receptiva 
                    durante o tempo dedicado ao estudo. Se você programar vários longos dias 
                    consecutivos de estudo, ficará desanimado e tentado a desistir. É recomendável 
                    que você agende um horário para atividades não acadêmicas, como exercícios, hobbies 
                    e socialização com outros alunos.</p>
            </div>
            <br />
            <div className="article" >
                <h1>Manter a responsabilidade 🏅</h1>
                <p>Alguns alunos acham útil estudar com um parceiro, pois proporciona responsabilidade, 
                    bem como oportunidades para discussão e colaboração. Ao criar seu plano de estudo, 
                    verifique com outros colegas para determinar se você pode coordenar as sessões de estudo. 
                    No entanto, se você tende a se socializar mais do que estudar quando está perto de outras pessoas, 
                    siga um plano de estudo independente. Se você tem um parceiro de estudo, certifique-se de que é alguém 
                    com quem você provavelmente manterá a tarefa.</p>
            </div>
            <br />
            <div className="article" >
                <h1>Avalie seu plano de estudo e ajuste conforme necessário 🗓</h1>
                <p>Seu plano de estudos visa ajudá-lo a ser mais eficiente e produtivo. 
                    Se você achar que não está funcionando, não desanime. Não há problema 
                    em fazer alterações conforme você descobre o que funciona melhor para você.</p>
            </div>
        </div>
    )
}
export default Articles