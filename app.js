import {preguntas} from "./preguntas.js";

const containerPrincipal = document.getElementById('containerPrincipal')
const containerPreguntas = document.getElementById('containerPreguntas')

const preguntaP = document.getElementById('preguntaP')

const buttons = document.getElementById('buttons')

const ele1 = document.getElementById('ele1')
const ele2 = document.getElementById('ele2')
const ele3 = document.getElementById('ele3')
const ele4 = document.getElementById('ele4')

window.addEventListener('DOMContentLoaded',dataRequest)

function dataRequest(){

    preguntas.map((element)=>{

        console.log(element);

        dataProcess(element)
    })

}

function dataProcess(data) {

    let index = 1

    let pre = 'pregunta'+index

// containerPrincipal.innerHTML = ''
// containerPreguntas.innerHTML = ''

preguntaP.textContent = data.pregunta1.question

ele1.textContent = data.pregunta1.choices[0]
ele2.textContent = data.pregunta1.choices[1]
ele3.textContent = data.pregunta1.choices[2]
ele4.textContent = data.pregunta1.choices[3]

}