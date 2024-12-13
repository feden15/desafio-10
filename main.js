import './style.css'

let gatoUno = '😺'
let gatoDos = '😸'
let gatoTres = '😹'

let botonUno = document.getElementById('gato-uno')
let botonDos = document.getElementById('gato-dos')
let botonTres = document.getElementById('gato-tres')

let contenedor = document.createElement('div')
document.body.appendChild(contenedor)

let gatos = document.createElement('p')

botonUno.addEventListener('click', function() {
    if (contenedor.textContent == '') {
        contenedor.textContent = gatoUno
        console.log(contenedor.textContent);
    } else {
        contenedor.textContent = (contenedor.textContent + gatoUno)
        console.log(contenedor.textContent);
    }
    }
)

botonDos.addEventListener('click', function() {
    if (contenedor.textContent == '') {
        contenedor.textContent = gatoDos
        console.log(contenedor.textContent);
    } else {
        contenedor.textContent = (contenedor.textContent + gatoDos)
        console.log(contenedor.textContent);
    }
    }
)

botonTres.addEventListener('click', function() {
    if (contenedor.textContent == '') {
        contenedor.textContent = gatoTres
        console.log(contenedor.textContent);
    } else {
        contenedor.textContent = (contenedor.textContent + gatoTres)
        console.log(contenedor.textContent);
    }
    }
)
