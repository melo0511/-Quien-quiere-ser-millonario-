import {preguntas} from "./preguntas.js";
let posibles_respuestas;
let pregunta;
let stop = 0
let time = 60

//Puntajes

let buenas = 0
let malas = 0

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

const longitud = []

const capaPregunta = document.querySelector('.capaPregunta')
const PreguntaPrincipal = document.getElementById('PreguntaPrincipal')

const containerPregunta = document.createElement('div')

const btnContinuar = document.createElement('button')

containerPregunta.classList.add('containerPregunta')
btnContinuar.classList.add('btnContinuar')

const btnSiguiente = document.getElementById('btnSiguiente')

window.addEventListener("DOMContentLoaded",escogerPreguntas(0))

window.addEventListener('DOMContentLoaded',()=>{

    btnSiguiente.style.display = "none"

    activarBotones()

    capaPregunta.appendChild(containerPregunta)
    capaPregunta.appendChild(btnContinuar)

    select_id("PreguntaPrincipal").innerHTML = pregunta.title
    btnContinuar.textContent = "Continuar"
})

btnContinuar.addEventListener('click',()=>{
    clearInterval(stop)
    tiempo()
    capaPregunta.style.display = "none"
    PreguntaPrincipal.style.display = "none"
})

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")

const publico = document.getElementById("comodinP")
const telefono = document.getElementById("comodinT")

const temp = document.getElementById("count")

btn1.addEventListener('click',()=>{
    clearInterval(stop)
    desactivarBotones()

    if(posibles_respuestas[0] == pregunta.response){
        btns[0].style.backgroundColor = "lightgreen";
        btnSiguiente.style.display = "flex"
        reseteo()
    }else{
        btns[0].style.backgroundColor = "red";
        comodines() 
    }
    
})

btn2.addEventListener('click',()=>{
    clearInterval(stop)
    desactivarBotones()

    if(posibles_respuestas[1] == pregunta.response){
        btns[1].style.backgroundColor = "lightgreen";
        btnSiguiente.style.display = "flex"
        reseteo()
    }else{
        btns[1].style.backgroundColor = "red";
        comodines()
    }
      
})

btn3.addEventListener('click',()=>{
    clearInterval(stop)
    desactivarBotones()

    if(posibles_respuestas[2] == pregunta.response){
        btns[2].style.backgroundColor = "lightgreen";
        reseteo()
    }else{
        btns[2].style.backgroundColor = "red";
        comodines()
    }
   
})

btn4.addEventListener('click',()=>{
    clearInterval(stop)
    desactivarBotones()

    if(posibles_respuestas[3] == pregunta.response){
        btns[3].style.backgroundColor = "lightgreen";
        reseteo()
    }else{
        btns[3].style.backgroundColor = "red";
        comodines()
    }
        
})

publico.addEventListener("click",()=>{
   
    clearInterval(stop)
    tiempo()
    setInterval(() => {
        publico.style.borderColor = "white"

    }, 1000);
    

})

function comodines (){
   publico.style.borderColor = "rgb(13, 255, 0)"
   telefono.style.borderColor = "rgb(13, 255, 0)"


    setTimeout(() => {
        reiniciar()
        clearInterval(stop)
    }, 3000);
}

let counta = 0;

function reseteo () {
    setTimeout(() => {
        reiniciar()
        clearInterval(stop)
    }, 3000);  
}

const TotalBuenas = document.getElementById('TotalBuenas')
const TotalMalas = document.getElementById('TotalMalas')

function reiniciar() {

    TotalBuenas.textContent = "Total Buenas: "+buenas
    TotalMalas.textContent = "Total Malas: "+malas

    clearInterval(stop)
    temp.textContent = "01:00";

    capaPregunta.style.display = "flex"
    PreguntaPrincipal.style.display = "flex"
    
    activarBotones()

    counta++
    // console.log(counta);
    for (const btn of btns) {
        btn.style.background = "#502158";
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

select_id("btn1").innerHTML = posibles_respuestas[0]
select_id("btn2").innerHTML = posibles_respuestas[1]
select_id("btn3").innerHTML = posibles_respuestas[2]
select_id("btn4").innerHTML = posibles_respuestas[3]
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
            malas++

            reiniciar()
            clearInterval(stop)
            tiempo()  

        }
    
    }, 1000);
    
}