import {preguntas} from "./preguntas.js";
let posibles_respuestas;
let pregunta;
let stop = 0
let time = 60

function activarBotones(){

btn1.disabled = false
btn2.disabled = false
btn3.disabled = false
btn4.disabled = false

}

function desactivarBotones(){

btn1.disabled = true
btn2.disabled = true
btn3.disabled = true
btn4.disabled = true
}

function desactivarComodines(params) {
    publico.disabled = true
    telefono.disabled = true
}

let countaP = 1

const longitud = []

const capaPregunta = document.querySelector('.capaPregunta')
const PreguntaPrincipal = document.getElementById('PreguntaPrincipal')
const posicionPregunta = document.getElementById('posicionPregunta')

const containerPregunta = document.createElement('div')

const btnContinuar = document.createElement('button')

const modal = document.querySelector('.modal');

containerPregunta.classList.add('containerPregunta')
btnContinuar.classList.add('btnContinuar')

const capaemoji = document.querySelector('.capaemoji')
const emojiMensaje = document.createElement('h2')
const emoji = document.createElement('div')

capaemoji.classList.add('capaemoji')
emojiMensaje.classList.add('emojiMensaje')

const contComodin = document.getElementById('contComodin')

function mensajeEmoji(){
    capaemoji.style.display = "flex"

    capaemoji.appendChild(emojiMensaje)
    capaemoji.appendChild(emoji)

    setTimeout(()=>{
        capaemoji.style.display = "none"
        btnSiguiente.style.display = "flex"
    },3000)
}

const btnSiguiente = document.getElementById('btnSiguiente')

btnSiguiente.addEventListener('click',()=>{
    reiniciar()
    tiempo()
    clearInterval(stop)
    
})

window.addEventListener("DOMContentLoaded",escogerPreguntas(0))

window.addEventListener('DOMContentLoaded',()=>{

    contComodin.style.display = "none"

    posicionPregunta.textContent = "Pregunta "+countaP

    capaemoji.style.display = "none"
    btnSiguiente.style.display = "none"
    modalcontainer.style.display ="none"

    activarBotones()
    animacionBtn()

    capaPregunta.appendChild(btnContinuar)

    select_id("PreguntaPrincipal").innerHTML = pregunta.title
    btnContinuar.textContent = "Continuar"
})

btnContinuar.addEventListener('click',()=>{
    clearInterval(stop)
    tiempo()
    capaPregunta.style.display = "none"
    PreguntaPrincipal.style.display = "none"
    posicionPregunta.style.display = "none"
})

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")

const publico = document.getElementById("comodinP")
const telefono = document.getElementById("comodinT")

const tituloModal = document.getElementById('tituloModal')

const containerTime = document.getElementById('containerTime')

telefono.addEventListener('click',()=>{
    detenerContadores()
    fAbrir()
    tituloModal.textContent = "!Tienes dos minutos para llamar un amigo!"
    // containerTime.innerHTML = ""
    temp.style.display = "none"
    containerTime.appendChild(contComodin)
    contComodin.style.display = "flex"
})

publico.addEventListener('click',()=>{
    detenerContadores()
    fAbrir()
    tituloModal.textContent = "!Tienes dos minutos para pedir ayuda del publico!"
    // containerTime.innerHTML = ""
    temp.style.display = "none"
    containerTime.appendChild(contComodin)
    contComodin.style.display = "flex"
})

const temp = document.getElementById("count")

//modaL

const modalcontainer = document.querySelector('.modal-container');

  
  function fAbrir() {
    modalcontainer.style.opacity ="1"
    modalcontainer.style.display ="flex"
    setTimeout(function(){
      mini()
      tiempoComodin()
    },4000)
  }

//   COMODINES

function mini(){
    modalcontainer.style.opacity ="0"
    modalcontainer.style.display ="none"
    clearInterval(stop)
    tiempoComodin()
    // segundos()
}
  publico.addEventListener('click',()=>{
    publico.style.backgroundColor = "#3e3e3e"
    publico.disabled = true
    clearInterval(stop)
    limpiar()
    activarBotones()
    desordenar(pregunta)
})
telefono.addEventListener('click',()=>{
    telefono.style.backgroundColor = "#3e3e3e"
    telefono.disabled = true
    desordenar(pregunta)
    limpiar()
    clearInterval(stop)
    activarBotones()
})
  function limpiar() {
    for (const btn of btns) {
        btn.style.background = "#372158";
       
    }
}

//modal

btn1.addEventListener('click',()=>{
    clearInterval(stop)
    desactivarBotones()

    if(posibles_respuestas[0] == pregunta.response){
        btns[0].style.backgroundColor = "#24681d";
        mensajeEmoji()
        emojiMensaje.textContent = "¡Correcto!"
        emoji.classList.add('emojiFeliz')
        detenerContadores()
        publico.style.backgroundColor = "#3e3e3e"
        publico.disabled = true
        telefono.style.backgroundColor = "#3e3e3e"
        telefono.disabled = true
    }else{
        btns[0].style.backgroundColor = "red";
        mensajeEmoji()
        emojiMensaje.textContent = "Incorrecto"
        emoji.classList.add('emojiTriste')
        detenerContadores()
    }
    
})

btn2.addEventListener('click',()=>{
    clearInterval(stop)
    desactivarBotones()

    if(posibles_respuestas[1] == pregunta.response){
        btns[1].style.backgroundColor = "#24681d";
        mensajeEmoji()
        emojiMensaje.textContent = "¡Correcto!"
        emoji.classList.add('emojiFeliz')
        detenerContadores()
        publico.style.backgroundColor = "#3e3e3e"
        publico.disabled = true
        telefono.style.backgroundColor = "#3e3e3e"
        telefono.disabled = true
    }else{
        btns[1].style.backgroundColor = "red";
        mensajeEmoji()
        emojiMensaje.textContent = "Incorrecto"
        emoji.classList.add('emojiTriste')
        detenerContadores()
    }
      
})

btn3.addEventListener('click',()=>{
    clearInterval(stop)
    desactivarBotones()

    if(posibles_respuestas[2] == pregunta.response){
        btns[2].style.backgroundColor = "#24681d";
        mensajeEmoji()
        emojiMensaje.textContent = "¡Correcto!"
        emoji.classList.add('emojiFeliz')
        detenerContadores()
        publico.style.backgroundColor = "#3e3e3e"
        publico.disabled = true
        telefono.style.backgroundColor = "#3e3e3e"
        telefono.disabled = true
    }else{
        btns[2].style.backgroundColor = "red";
        mensajeEmoji()
        emojiMensaje.textContent = "Incorrecto"
        emoji.classList.add('emojiTriste') 
        detenerContadores()
    }
   
})

btn4.addEventListener('click',()=>{
    clearInterval(stop)
    desactivarBotones()

    if(posibles_respuestas[3] == pregunta.response){
        btns[3].style.backgroundColor = "#24681d";
        mensajeEmoji()
        emojiMensaje.textContent = "¡Correcto!"
        emoji.classList.add('emojiFeliz')
        detenerContadores()
        publico.style.backgroundColor = "#3e3e3e"
        publico.disabled = true
        telefono.style.backgroundColor = "#3e3e3e"
        telefono.disabled = true
    }else{
        btns[3].style.backgroundColor = "red";
        mensajeEmoji()
        emojiMensaje.textContent = "Incorrecto"
        emoji.classList.add('emojiTriste')
        detenerContadores()
    }
        
})

let counta = 0;

function reseteo () {
    setTimeout(() => {
        reiniciar()
        clearInterval(stop)
    }, 1000);  
}

function animacionBtn() {

    setInterval(()=>{
        btnSiguiente.style.fontSize = "18px"
        btnSiguiente.style.width = "8rem"
        btnSiguiente.style.height = "3rem"
    },1000)

    setInterval(()=>{
        btnSiguiente.style.fontSize = "20px"
        btnSiguiente.style.width = "8.5rem"
        btnSiguiente.style.height = "3.5rem"
    },2000)
    
}

function reiniciar() {

    countaP++
    posicionPregunta.textContent = "Pregunta "+countaP

    btnSiguiente.style.display = "none"

    temp.style.display = "flex"
    contComodin.style.display = "none"
    tiempo()
    clearInterval(stop)
    temp.innerHTML = "01:00";

    capaPregunta.style.display = "flex"
    PreguntaPrincipal.style.display = "flex"
    posicionPregunta.style.display = "flex"
    
    activarBotones()

    counta++
    // console.log(counta);
    for (const btn of btns) {
        btn.style.background = "#372158";
    }

    // COMODIN
    telefono.disabled = false
    publico.disabled = false
    telefono.style.backgroundColor = "#372158"
    publico.style.backgroundColor = "#372158"
    

    if(counta >=22){
        window.location.href = "./index.html"
    }else{
        escogerPreguntas(counta)
        desordenar(pregunta)
    }

}

 let btns = [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
]

function escogerPreguntas(p){

// console.log(p);
preguntas.forEach((element)=>{
    
pregunta = element[p]

select_id("PreguntaPrincipal").innerHTML = pregunta.title
select_id("title").innerHTML = pregunta.title
select_id("btn1").innerHTML = pregunta.response
select_id("btn2").innerHTML = pregunta.incorrecta1
select_id("btn3").innerHTML = pregunta.incorrecta2
select_id("btn4").innerHTML = pregunta.incorrecta3



desordenar(pregunta)
})
}

function desordenar(pregunta){
    posibles_respuestas = [
    pregunta.response,
    pregunta.incorrecta1,
    pregunta.incorrecta2,
    pregunta.incorrecta3
]

posibles_respuestas.sort(()=> Math.random()-0.5)

select_id("btn1").innerHTML = "A. " +posibles_respuestas[0]
select_id("btn2").innerHTML = "B. " +posibles_respuestas[1]
select_id("btn3").innerHTML = "C. " +posibles_respuestas[2]
select_id("btn4").innerHTML = "D. " +posibles_respuestas[3]

}

function correcta() {
    for (const btn of btns) {
        const newStr = btn.textContent.slice(3)
        if(newStr == pregunta.response){
            btn.style.backgroundColor = "#24681d"
        }

    }
    
}

function select_id(id) {
    return document.getElementById(id)
}

function styles(id) {
    return select_id(id).style
}

/////////////////////////////////////////////////////

function tiempo(){

    detenerContadores()

    let time = 60

    stop = setInterval(() => {

        time = time -1 
        
        temp.textContent = "00:" + time

        if(time<10){
            temp.textContent = "00:0" + time
        }

        if(time<0){

            temp.textContent = "Tiempo"
            desactivarBotones()
            clearInterval(stop)
            mensajeEmoji()
            // plus
            emojiMensaje.textContent = "SE TE ACABO EL TIEMPO!"
            emoji.classList.add('emojiTiempo')
            correcta()
            desactivarComodines()
        }
    
    }, 1000);
    
}

let stop2 = 0
let stop3 = 0

function tiempoComodin(){

    detenerContadores()

    let time = 60

        stop2 = setInterval(() => {
        
        contComodin.textContent = "02:00"
        
        time = time -1 

        if(contComodin.textContent = "02:00"){
            contComodin.textContent = "01:" + time
        }
        
        if(time<10){
            contComodin.textContent = "01:0" + time
        }

        if(time<0){
            contComodin.textContent = "01:00"
        }

        if(contComodin.textContent === "01:00"){
            clearInterval(stop2)
            segundos()
        }
    
    }, 1000);
    
}

function segundos(){

    let time = 60

    stop3 = setInterval(() => {
        temp.innerHTML = contComodin.textContent
        time = time -1 
        
        contComodin.textContent = "00:" + time

        if(time<10){
            contComodin.textContent = "00:0" + time
        }

        if(time<0){
            
            contComodin.textContent = "Tiempo"
            clearInterval(stop3)
            desactivarBotones()
            btnSiguiente.style.display = "flex"
            // plus
            emojiMensaje.textContent = "SE TE ACABO EL TIEMPO!"
            emoji.classList.add('emojiTriste')
            correcta()
            desactivarComodines()
        }
    
    }, 1000);
}

function detenerContadores() {
    clearInterval(stop)
    clearInterval(stop2)
    clearInterval(stop3)
}