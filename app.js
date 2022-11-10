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

let countaP = 1

const longitud = []

const capaPregunta = document.querySelector('.capaPregunta')
const PreguntaPrincipal = document.getElementById('PreguntaPrincipal')
const posicionPregunta = document.getElementById('posicionPregunta')

const containerPregunta = document.createElement('div')

const btnContinuar = document.createElement('button')

const modal = document.querySelector('.modal');
const modalc = document.querySelector('.modal-container');
const close = document.querySelector(".close")

containerPregunta.classList.add('containerPregunta')
btnContinuar.classList.add('btnContinuar')

const capaemoji = document.querySelector('.capaemoji')
const emojiMensaje = document.createElement('h2')
const emoji = document.createElement('div')

capaemoji.classList.add('capaemoji')
emojiMensaje.classList.add('emojiMensaje')

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
    reseteo()
})

window.addEventListener("DOMContentLoaded",escogerPreguntas(0))

window.addEventListener('DOMContentLoaded',()=>{

    posicionPregunta.textContent = "Pregunta "+countaP

    capaemoji.style.display = "none"
    btnSiguiente.style.display = "none"

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

telefono.addEventListener("click",fAbrir)
publico.addEventListener("click",fAbrir)

const temp = document.getElementById("count")

//modaL
  close.addEventListener("click", fCerrar)
  
  function fCerrar() {
    clearInterval(stop2)
    clearInterval(stop3)
    tiempo()
    modal.classList.toggle('modal-close');
    setTimeout(function(){
        modalc.style.opacity ="0"
        modalc.style.visibility ="hidden"
    },400)
  }
  
  function fAbrir(e) {
    clearInterval(stop)
    e.preventDefault();
    modalc.style.opacity ="1"
    modalc.style.visibility ="visible"
    modal.classList.toggle ("modal-close");
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
    }else{
        btns[0].style.backgroundColor = "red";
        mensajeEmoji()
        emojiMensaje.textContent = "Incorrecto"
        emoji.classList.add('emojiTriste') 
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
    }else{
        btns[1].style.backgroundColor = "red";
        mensajeEmoji()
        emojiMensaje.textContent = "Incorrecto"
        emoji.classList.add('emojiTriste') 
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
    }else{
        btns[2].style.backgroundColor = "red";
        mensajeEmoji()
        emojiMensaje.textContent = "Incorrecto"
        emoji.classList.add('emojiTriste') 
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
    }else{
        btns[3].style.backgroundColor = "red";
        mensajeEmoji()
        emojiMensaje.textContent = "Incorrecto"
        emoji.classList.add('emojiTriste') 
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

    clearInterval(stop)
    temp.textContent = "01:00";

    capaPregunta.style.display = "flex"
    PreguntaPrincipal.style.display = "flex"
    posicionPregunta.style.display = "flex"
    
    activarBotones()

    counta++
    // console.log(counta);
    for (const btn of btns) {
        btn.style.background = "#372158";
    }

    if(counta >=12){
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

function select_id(id) {
    return document.getElementById(id)
}

function styles(id) {
    return select_id(id).style
}

/////////////////////////////////////////////////////

function tiempo(){

    let time = 60

    stop = setInterval(() => {

        time = time -1 
        
        temp.textContent = "00:" + time

        if(time<10){
            temp.textContent = "00:0" + time
        }

        if(time<0){

            temp.textContent = "Tiempo"
            temp.style.color = "white"

            clearInterval(stop)

        }
    
    }, 1000);
    
}

const contComodin = document.getElementById('contComodin')

telefono.addEventListener('click',tiempoComodin)

let stop2 = 0
let stop3 = 0

function tiempoComodin(){

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

        time = time -1 
        
        contComodin.textContent = "00:" + time

        if(time<10){
            contComodin.textContent = "00:0" + time
        }

        if(time<0){

            contComodin.textContent = "Tiempo"
            clearInterval(stop3)

        }
    
    }, 1000);
}
