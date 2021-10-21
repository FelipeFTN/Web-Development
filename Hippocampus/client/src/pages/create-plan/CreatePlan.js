import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './CreatePlan.css'

function CreatePlan(){
    const [subject, setSubject] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [time, setTime] = useState({initialTime:"", finalTime:""});
    const handleAddSubject = () => {
        if(subject !== ''){
            setSubjects([...subjects, subject]);
            console.log(subjects)
        }
    }
    const handleRemove = () => {
    }
    const handleSubmit = () => {
        if(time.initialTime !== "" && time.finalTime !== ""){

            const initialTime = time.initialTime
            const finalTime = time.finalTime
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
                if(timeS[0] === parseFloat(finalTime.split('.')[0])){
                    timeS[1] = parseFloat('0')
                    break
                }
            }
            
            console.log(time.initialTime+" "+time.finalTime)
        }else{
            alert("Informe os Horarios!")
        }
    }

    return(
        <div className="CreatePlan" align="center">
            <Navbar/>
            <h1>Criar Plano</h1>
            <input type="text" className="Materia" placeholder="Materia" onChange={(e) => { setSubject(e.target.value)}}/>
            <button className="btn btn-primary" onClick={handleAddSubject}>Adicionar</button>
            <br />
            <ul>
                {subjects.map((item, index) =>{
                    return <li key={index} id={"subject"+index} onClick={handleRemove}>{item}</li>
                })}
            </ul>
            <input type="time" className="InitialTime" placeholder="Horario Inicial" onChange={(e) => setTime({ ...time, initialTime: e.target.value})} required/>
            <input type="time" className="FinalTime" placeholder="Horario Final" onChange={(e) => setTime({ ...time, finalTime: e.target.value})} required/>
            <br />
            <button className="btn btn-primary" onClick={handleSubmit}>Gerar plano de estudos</button>
        </div>
    )
}
export default CreatePlan 