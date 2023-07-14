/**
 * Primer parcial - Practicas Profesionalizantes III
 *
 * @file   Script responsable de dar funcionalidad a la calculadora
 * @author Gonzalo Rives
 * 
 * @todo   Cambiar la lógica de como se trabaja con los botones
 */

document.addEventListener('DOMContentLoaded', () => {

//// Variables

// Constantes
const expErrorMessage = 'ERROR';
const buttonOperatorClass = 'calculator__key--operator';

const buttons = document.querySelectorAll('.calculator__key');
const resultVisor = document.querySelector('.calculator__visor--result');
const calcResultVisor = document.querySelector('.calculator__visor--calc');

// Bandera para no agregar elementos al visor
// cuando no sea necesario.
let resetVisorFlag = true;

// Bandera para resetear todos los valores del visor
let resetAllFlag = false;

// Almacena el resultado exitoso superior
let previousAns = '';

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // Valor del botón presionado
            const buttonValue = button.innerText;
       
            // Primera bandera
            // Solo visor del cálculo
            if(resetVisorFlag) {
                setVisorValue(buttonValue, resultVisor);
                resetVisorFlag = false;
            } else {
                // Se agrega un número, operador o símbolo
                appendToVisor(buttonValue, resultVisor);
            }

            // Segunda bandera
            // Ambos valores del visor
            if(resetAllFlag) {
                clearAllVisor(resultVisor, calcResultVisor);
                resetAllFlag = false;
            }

            // Si ya se hizo un calculo y se apreta un operador
            // se agregará el resultado anterior al principio
            if(button.className.match(buttonOperatorClass) &&
                previousAns) {
                resultVisor.insertAdjacentText("afterbegin", previousAns);
            }

            // Si el boton apretado y el valor del visor son 0
            if(parseInt(resultVisor.textContent) === 0) {
                // No hace nada
                resetVisorFlag = true;
            }
            // Casos generales
            if (buttonValue === 'C') {
                // Reset de valores
                clearAllVisor(resultVisor, calcResultVisor);
                setVisorValue(0, resultVisor);

                previousAns = '';
                resetVisorFlag = true;

            } else if (buttonValue === '=') {
                // Calcular el resultado
                const expression = resultVisor.innerText.replace('=', '');
                const result = calculate(expression);

                // TODO: Arreglar error al intentar varias veces con misma expresión
                if(!result) {
                    setVisorValue(expErrorMessage, resultVisor);
                } else {
                    setVisorValue(result, resultVisor);
                    setCalcVisorValue(expression, calcResultVisor);

                    // Para uso posterior
                    previousAns = result;
                }
                
                resetVisorFlag = true;
            }
        });
    });

});