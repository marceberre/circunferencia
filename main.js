let valor = document.getElementById('valor_ingresado');
let error = document.getElementById('error');

error.style.display = "none";

const boton = document.querySelector('#btn_calcular');

let cuadro = document.getElementById('cuadro');

cuadro.style.display = "none";

boton.addEventListener('click', () => {

    if (valor.value <= 0) {
        error.style.display = "block";
        exit;
    } else {
        error.style.display = "none";
        cuadro.style.display = "block";

        // Cálculo del perímetro 
        let perimetro = 2 * Math.PI * valor.value;
        document.getElementById('perim').innerHTML = perimetro.toFixed(2);

        // Cálculo del área
        let area = Math.PI * (valor.value ** 2);
        document.getElementById('area').innerHTML = area.toFixed(2);
    }
});

function borrar() {
    valor.value = '';
    cuadro.style.display = "none";
    valor.focus();
}

let refresh = document.getElementById('btn-reintentar');
refresh.addEventListener('click', _ => {
    location.reload();
})