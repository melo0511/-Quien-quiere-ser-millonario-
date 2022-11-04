import {preguntas} from "./preguntas.js";
let posibles_respuestas;
let pregunta;
let stop = 0

const longitud = []
window.addEventListener("DOMContentLoaded",escogerPreguntas(0))

tiempo()

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")

// btn1.addEventListener('click',press(0))
// btn2.addEventListener('click',press(1))
// btn3.addEventListener('click',press(2))
// btn4.addEventListener('click',press(3))

btn1.addEventListener('click',()=>{
    if(posibles_respuestas[0] == pregunta.response){
        btns[0].style.backgroundColor = "lightgreen";
    }else{
        btns[0].style.backgroundColor = "red";
    }
    
    setTimeout(() => {
        reiniciar()
        clearInterval(stop)
        tiempo()
    }, 3000);
})

btn2.addEventListener('click',()=>{
    if(posibles_respuestas[1] == pregunta.response){
        btns[1].style.backgroundColor = "lightgreen";
    }else{
        btns[1].style.backgroundColor = "red";
    }
      
    setTimeout(() => {
        reiniciar()
        clearInterval(stop)
        tiempo()
    }, 3000);
})

btn3.addEventListener('click',()=>{
    if(posibles_respuestas[2] == pregunta.response){
        btns[2].style.backgroundColor = "lightgreen";

    }else{
        btns[2].style.backgroundColor = "red";
    }
      
    setTimeout(() => {
        reiniciar()
        clearInterval(stop)
        tiempo()
    }, 3000);
})

btn4.addEventListener('click',()=>{
    if(posibles_respuestas[3] == pregunta.response){
        btns[3].style.backgroundColor = "lightgreen";
    }else{
        btns[3].style.backgroundColor = "red";
    }
      
    setTimeout(() => {
        reiniciar()
        clearInterval(stop)
        tiempo()
    }, 3000);
})
let counta = 0;

function reiniciar() {
    
    
    counta++
    console.log(counta);
    for (const btn of btns) {
        btn.style.background = "#502158";
       
    }

    if(counta >=8){
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




    // let data = Object.entries(element)
// console.log(element[1]);
// console.log(data)

select_id("title").innerHTML = pregunta.title
select_id("btn1").innerHTML = pregunta.response
select_id("btn2").innerHTML = pregunta.incorreta1
select_id("btn3").innerHTML = pregunta.incorreta2
select_id("btn4").innerHTML = pregunta.incorreta3

desordenar(pregunta)
})
}

function desordenar(pregunta){
    posibles_respuestas = [
    pregunta.response,
    pregunta.incorreta1,
    pregunta.incorreta2,
    pregunta.incorreta3
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
        }
    
    }, 1000);
    
}