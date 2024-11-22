function calcular() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const operador = document.getElementById('operador').value;
    let resultado;

    switch (operador) {
        case 'suma':
            resultado = operando1 + operando2;
            break;
        case 'resta':
            resultado = operando1 - operando2;
            break;
        case 'multiplica':
            resultado = operando1 * operando2;
            break;
        case 'divide':
            if (operando2 !== 0) {
                resultado = operando1 / operando2;
            } else {
                resultado = 'Error: División por cero';
            }
            break;
        default:
            resultado = 'Operación no válida';
    }

    document.getElementById('resultado').value = resultado;
}