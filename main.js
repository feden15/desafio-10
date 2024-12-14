import './style.css'

let gatoUno = '😺'
let gatoDos = '😸'
let gatoTres = '😹'
let caja = '📦'

let botonUno = document.getElementById('gato-uno')
let botonDos = document.getElementById('gato-dos')
let botonTres = document.getElementById('gato-tres')

let contenedor = document.createElement('div')
document.body.appendChild(contenedor)

let contadorUno = 0
let contadorDos = 0
let contadorTres = 0
let contadorCajas = 0

botonUno.addEventListener('click', function() {
    if (contadorUno <= 4) {
        contenedor.textContent = (contenedor.textContent + gatoUno)
        console.log(contenedor.textContent);
        contadorUno++
        contadorDos = contadorTres = 0
    } else {
        contenedor.textContent = caja
        for (let i=1; i<=contadorCajas; i++) {
            contenedor.textContent = contenedor.textContent + caja
        }
        contadorCajas++
        contadorUno = contadorDos = contadorTres = 0
    }
    }
)

botonDos.addEventListener('click', function() {
    if (contadorDos <= 4) {
        contenedor.textContent = (contenedor.textContent + gatoDos)
        console.log(contenedor.textContent);
        contadorDos++
        contadorUno = contadorTres = 0
    } else {
        contenedor.textContent = caja
        for (let i=1; i<=contadorCajas; i++) {
            contenedor.textContent = contenedor.textContent + caja
        }
        contadorCajas++
        contadorUno = contadorDos = contadorTres = 0
    }
    }
)

botonTres.addEventListener('click', function() {
    if (contadorTres <= 4) {
        contenedor.textContent = (contenedor.textContent + gatoTres)
        console.log(contenedor.textContent);
        contadorTres++
        contadorDos = contadorTres = 0
    } else {
        contenedor.textContent = caja
        for (let i=1; i<=contadorCajas; i++) {
            contenedor.textContent = contenedor.textContent + caja
        }
        contadorCajas++
        contadorUno = contadorDos = contadorTres = 0
    }
    }
)
