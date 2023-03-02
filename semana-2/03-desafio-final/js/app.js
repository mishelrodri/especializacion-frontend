const tabla = document.querySelector('.tabla');
const input = document.querySelector('#tfEntrada');
const btnAgregar = document.querySelector("#btnAgregar");
const btnJugar = document.querySelector('#btnJugar');
const inputJuego = document.querySelector('#tfCantidad');
const error = document.querySelector('.error');
const resultado = document.querySelector('#resultado');
const valores = document.querySelector('#valores');
const btnCargar = document.querySelector('#btnCargar');
const btnLimpiar = document.querySelector('#btnLimpiar');
// Cragamos la data
const cargarData = () => {
    fetch('/data/data.json').then(data => data.json()).then((data) => {
        cargarTabla(data);
    });
}

cargarData();

// Creamos una Tr
const renderFila = (nombre) => {
    const $tr = document.createElement('tr'),
        $td1 = document.createElement('td'),
        $td2 = document.createElement('td'),
        $btn = document.createElement('button');

    $td1.textContent = nombre;
    $btn.textContent = 'Borrar';
    $btn.classList.add('btn', 'btn-primary', 'borrar');
    $td2.append($btn);
    $tr.append($td1, $td2);
    tabla.appendChild($tr);
}

// renderizamos todas las tr
const cargarTabla = (data) => {
    data.forEach(elem => {
        renderFila(elem.nombre);
    });
}

const ganadores = () => {
    const limite = document.querySelectorAll('tr');
    return generarRandoms(limite.length - 1);
    // console.log(generarRandoms(limite.length - 1))
}

const generarRandoms = (number) => {
    // console.log(Math.random * number)
    return Math.floor(Math.random() * number + 1);
}

// Eventos

// Ingersar un nuevo valor
btnAgregar.addEventListener('click', (e) => {
    renderFila(input.value);
    input.value = '';
});

// Eliminar una Fila
tabla.addEventListener('click', (e) => {
    if (!e.target.matches('.borrar')) return;
    e.target.closest('tr').remove();
});

btnJugar.addEventListener('click', () => {
    resultado.textContent = '';
    valores.textContent = '';
    if (inputJuego.value == '') {
        resultado.textContent = 'Escribe en el Input!'
        return;
    }
    resultado.textContent = ''


    const trs = document.querySelectorAll('tr');

    if (inputJuego.value > (trs.length - 1)) {
        resultado.textContent = 'Error';
        return;
    }

    if (inputJuego.value < 2 || inputJuego.value > 5) {
        error.textContent = 'Cantidad entre 2 y 5';
        error.classList.remove('hidden');
        return;
    }

    error.classList.add('hidden');
    const numGanadores = inputJuego.value;
    const num = [];
    for (let i = 0; i < numGanadores; i++) {
        num.push(ganadores());
    }
    // console.log(num);
    // console.log(isDuplicado(num))
    valores.textContent = num.sort(function (a, b) {
        return a - b;
    });

    if (isDuplicado(num)) {
        error.textContent = 'Error valores duplicados';
        error.classList.remove('hidden');
        return;
    }
    resultado.textContent = '🎉 Grupo Armado';

    num.forEach((elem) => {
        trs[elem].style.backgroundColor = '#7aa6a7';
    });

    inputJuego.value = '';
});

btnCargar.addEventListener('click', () => {
    tabla.innerHTML = "";
    cargarData();
});

btnLimpiar.addEventListener('click', () => {
    tabla.innerHTML = "";
});

//saber si estan duplicados
const isDuplicado = (arr) => {
    return new Set(arr).size < arr.length;
}
