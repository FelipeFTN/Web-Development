import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'

function CreatePlan(){

    const initialTime = '13.00'
    const finalTime = '19.00'
    let timeI = initialTime
    let timeF
    let timeS

    while(parseFloat(timeI) <= parseFloat(finalTime) || parseFloat(timeF) <= parseFloat(finalTime)){
        timeF = parseFloat(timeI) + parseFloat('00.25')
        timeS = String(timeF).split('.')
        console.log(timeI+ " - "+(timeS[0]+'.'+timeS[1]))
        timeS[1] = parseFloat(timeS[1]) + parseFloat('5')
        if(parseFloat(timeS[1]) > parseFloat('59')){
            timeS[0] = parseFloat(timeS[0]) + parseFloat('1')
            timeS[1] = parseFloat(timeS[1]) - parseFloat('60')
        }
        timeI = timeS[0]+'.'+timeS[1]
        if(timeS[0] == parseFloat(finalTime.split('.')[0])){
            timeS[1] = parseFloat('0')
            break
        }
    }
    return(
        <div className="CreatePlan">
            <Navbar/>
            <h1>Criar Plano</h1>
            <input type="text" className="Materia" placeholder="Materia"/>
            <button className="btn btn-primary">Adicionar</button>
            <br />
            <input type="text" className="InitialTime" placeholder="Horario Inicial"/>
            <input type="text" className="FinalTime" placeholder="Horario Final"/>
            <br />
            <button className="btn btn-primary">Gerar plano de estudos</button>
        </div>
    )
}
export default CreatePlan 