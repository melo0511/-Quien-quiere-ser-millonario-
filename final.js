import {puntaje,buenas,malas} from "./app.js";

const reiniciar = document.getElementById('reiniciar')
const pPuntaje = document.getElementById('pPuntaje')
const pBuenas = document.getElementById('pBuenas')
const pMalas = document.getElementById('pMalas')

pPuntaje.textContent = "Total de puntaje: "+puntaje
pBuenas.textContent = "Total de preguntas buenas: "+buenas
pMalas.textContent = "Total de preguntas malas: "+malas

reiniciar.addEventListener('click',()=>{
    window.location.href = './index.html'
})

