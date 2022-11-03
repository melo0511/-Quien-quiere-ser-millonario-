const btnNext = document.getElementById("btnNext")
const btnR = document.getElementById("btnR")

//Pregunta

const preguntaPrincipal = document.getElementById('preguntaPrincipal')

//Respuestas(botones)

const button1 = document.getElementById('a')
const button2 = document.getElementById('b')
const button3 = document.getElementById('c')
const button4 = document.getElementById('d')

//Partes

const header = document.getElementById('header')
const mid  = document.getElementById('mid')
const footer = document.getElementById('footer')

import {preguntas} from "./preguntas.js";

let count = 1;

window.addEventListener("DOMContentLoaded", data)
  btnNext.addEventListener('click',()=>{

    if(count>preguntas.length){
        count--
    }

    count++
    data()
  })

  btnR.addEventListener('click',()=>{
    count--
    if(count<1){
        count++
    }
    
    data()
  })

  function data(res) {
   
   console.log(count);
    preguntas.map((data)=>{
        if(count <= 1){
            console.log(data.Question1);
            


            preguntaPrincipal.textContent = data.Question1.title

            button1.textContent = data.Question1.a
            button2.textContent = data.Question1.b
            button3.textContent = data.Question1.c
            button4.textContent = data.Question1.d
           
        }
        if(count == 2){
            console.log(data.Question2);

            preguntaPrincipal.textContent = data.Question2.title

            button1.textContent = data.Question2.a
            button2.textContent = data.Question2.b
            button3.textContent = data.Question2.c
            button4.textContent = data.Question2.d
        }

    })
  }