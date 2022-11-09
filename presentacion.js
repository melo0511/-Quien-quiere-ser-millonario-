const buttonP = document.getElementById('buttonP')

window.addEventListener('load',()=>{
    setInterval(() => {
        buttonP.textContent = "Click para comenzar"
    }, 1000);

    setInterval(() => {
        buttonP.textContent = ""
    }, 2000);
})

buttonP.addEventListener('click', ()=>window.location.href = "./indexPreguntas.html")