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

// containerPrincipal.innerHTML = ''
// containerPreguntas.innerHTML = ''

const {eleccion1,eleccion2,eleccion3,eleccion4,question1} = data.pregunta1

preguntaP.textContent = question1

ele1.textContent = eleccion1
ele2.textContent = eleccion2
ele3.textContent = eleccion3
ele4.textContent = eleccion4

buttons.addEventListener('click',()=>{

    if(ele1.value == 1){
        console.log("gano");
    }else{
        console.log("f");
    }

})

}