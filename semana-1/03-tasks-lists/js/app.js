
// botones
const $btnAgregar = document.querySelector('#btnAgregar');
const $btnLimpiar = document.querySelector('#btnLimpiar');
//input
const $input = document.querySelector('#inputEntrada');
const $tbody = document.querySelector('tbody');

//contador
let contador = 0;

// eventos

$btnAgregar.addEventListener('click', () => {
    if ($input.value === "") {
        alert('input vacio');
        return;
    };

    contador++;

    const $tr = document.createElement('tr');
    const $td1 = document.createElement('td');
    const $td2 = document.createElement('td');
    const $td3 = document.createElement('td');
    const $td4 = document.createElement('td');
    const $btnBorrar = document.createElement('button');
    $btnBorrar.textContent = 'Borrar';
    $btnBorrar.classList.add('btn-2', 'btn-primary');
    const $btnFinalizar = document.createElement('button');
    $btnFinalizar.classList.add('btn-2', 'btn-success');
    $btnFinalizar.textContent = 'Finalizar';

    $td1.textContent = contador;
    $td2.textContent = $input.value;
    $td3.appendChild($btnBorrar);
    $td4.appendChild($btnFinalizar);

    $tr.append($td1, $td2, $td3, $td4);

    $tbody.append($tr);
    $input.value = "";

});

$tbody.addEventListener('click', (e) => {
    if (e.target.classList[0] !== 'btn-2') return;

    if (e.target.classList[1] === 'btn-primary') {
        const $tr = e.target.closest('tr');
        // $tr.style.background = '#000';
        $tr.remove();
        if ($tbody.querySelectorAll('tr').length === 0) {
            contador = 0;
        }

        return;
    } else {
        const $tr = e.target.closest('tr');
        e.target.setAttribute('disabled', true);
        $tr.style.background = '#18122B';
        $tr.style.color = '#fff';
    }




});

