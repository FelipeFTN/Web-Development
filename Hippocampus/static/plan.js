const initialTime = '13.00'
const finalTime = '19.00'
let timeI = initialTime
let timeF
let timeIF
let timeS

while(parseFloat(timeI) <= parseFloat(finalTime) || parseFloat(timeIF) <= parseFloat(finalTime)){
    timeIF = parseFloat(timeI) + parseFloat('00.25')
    timeS = String(timeIF).split('.')
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