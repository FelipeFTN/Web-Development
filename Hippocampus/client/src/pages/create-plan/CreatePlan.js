import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './CreatePlan.css'

function CreatePlan(){
    const [subject, setSubject] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [timesSchedule, setTimesSchedule] = useState([]);
    const [time, setTime] = useState({initialTime:"", finalTime:""});
    const [tableStyle, setTableStyle] = useState(false)
    const handleAddSubject = () => {
        if(subject !== ''){
            setSubjects([...subjects, subject]);
            setSubject("")
            console.log(subjects)
        }
    }
    const handleRemove = () => {}
    
    const HandleSubmit = () => {
        if(time.initialTime !== "" && time.finalTime !== "" && subjects.length !== 0){
                setTimesSchedule([])
                const initialTime = time.initialTime
                const finalTime = time.finalTime
                let timeI = initialTime
                let timeF
                let timeS
                
                while(parseFloat(timeI) <= parseFloat(finalTime) || parseFloat(timeF) <= parseFloat(finalTime)){
                    timeF = parseFloat(timeI) + parseFloat('00.25')
                    timeS = String(timeF).split('.')
                    let currentTime = timeI+ " - "+(timeS[0]+':'+timeS[1]).replace(".", ":")
                    
                    // console.log((timeI+ " - "+(timeS[0]+':'+timeS[1])).replace(".", ":"))
                    setTimesSchedule(timesSchedule => [...timesSchedule, currentTime]);
                    
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
                    setTableStyle(true)
                }
            }else{
                alert("Por favor, preencha todos os campos.")
            }
        }
        const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

        return(
            <div className="CreatePlan" align="center">
            <Navbar/>
            <h1>Criar Plano</h1>
            <input type="text" className="Materia" value={subject} placeholder="Materia" onChange={(e) => { setSubject(e.target.value)}}/>
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
            <button className="btn btn-primary" onClick={HandleSubmit}>Gerar plano de estudos</button>
            <br />
            <br />
            <table style={{ visibility: tableStyle ? 'visible' : 'hidden' }}>
            <thead>
                <tr>
                    <th>Horarios</th>
                    <th>Domingo</th>
                    <th>Segunda</th>
                    <th>Terca</th>
                    <th>Quarta</th>
                    <th>Quinta</th>
                    <th>Sexta</th>
                    <th>Sabado</th>
                </tr>
                </thead>
                <tbody>

                {
                    timesSchedule.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.replaceAll('.', ':')}</td>
                                { [...Array(7)].map((e, i) => <td key={i}>{shuffle(subjects)[1]}</td>) }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default CreatePlan 