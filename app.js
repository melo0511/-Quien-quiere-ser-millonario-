import {preguntas} from "./preguntas.js";
let posibles_respuestas;
let pregunta;
let stop = 0

const body = document.getElementById('body')

//Puntajes

export let puntaje = 0
export let buenas = 0
export let malas = 0

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

const capaPregunta = document.createElement('section')
capaPregunta.classList.add('capaPregunta')

window.addEventListener("DOMContentLoaded",escogerPreguntas(0))

window.addEventListener('DOMContentLoaded',()=>{
    tiempo()
    activarBotones()
    body.appendChild(capaPregunta)
})

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")

// btn1.addEventListener('click',press(0))
// btn2.addEventListener('click',press(1))
// btn3.addEventListener('click',press(2))
// btn4.addEventListener('click',press(3))

btn1.addEventListener('click',()=>{
    clearInterval(stop)
    desactivarBotones()

    if(posibles_respuestas[0] == pregunta.response){
        btns[0].style.backgroundColor = "lightgreen";
        puntaje+=100
        buenas++
    }else{
        btns[0].style.backgroundColor = "red";
        malas++
    }
    
    setTimeout(() => {
        reiniciar()
        clearInterval(stop)
        tiempo()
    }, 3000);
    
})

btn2.addEventListener('click',()=>{
    clearInterval(stop)
    desactivarBotones()

    if(posibles_respuestas[1] == pregunta.response){
        btns[1].style.backgroundColor = "lightgreen";
        puntaje+=100
        buenas++
    }else{
        btns[1].style.backgroundColor = "red";
        malas++
    }
      
    setTimeout(() => {
        reiniciar()
        clearInterval(stop)
        tiempo()
    }, 3000);
})

btn3.addEventListener('click',()=>{
    clearInterval(stop)
    desactivarBotones()

    if(posibles_respuestas[2] == pregunta.response){
        btns[2].style.backgroundColor = "lightgreen";
        puntaje+=100
        buenas++

    }else{
        btns[2].style.backgroundColor = "red";
        malas++
    }
      
    setTimeout(() => {
        reiniciar()
        clearInterval(stop)
        tiempo()
    }, 3000);
})

btn4.addEventListener('click',()=>{
    clearInterval(stop)
    desactivarBotones()

    if(posibles_respuestas[3] == pregunta.response){
        btns[3].style.backgroundColor = "lightgreen";
        puntaje+=100
        buenas++
    }else{
        btns[3].style.backgroundColor = "red";
        malas++
    }
      
    setTimeout(() => {
        reiniciar()
        clearInterval(stop)
        tiempo()
    }, 3000);
})
let counta = 0;

function reiniciar() {

    console.log(puntaje);
    console.log(buenas);
    console.log(malas);
    
    activarBotones()

    counta++
    console.log(counta);
    for (const btn of btns) {
        btn.style.background = "#502158";
    }

    if(counta >=12){
        window.location.href = "./final.html"
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

        const count = document.getElementById('count')

        time = time -1 
        
        count.textContent = "00:" + time

        if(time<10){
            count.textContent = "00:0" + time
        }

        if(time<0){

            count.textContent = "Tiempo"

            reiniciar()
            clearInterval(stop)
            tiempo()  

        }
    
    }, 1000);
    
}