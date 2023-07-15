/**
 * Primer parcial - Practicas Profesionalizantes III
 *
 * @file   Script responsable de dar funcionalidad a la calculadora
 * @author Gonzalo Rives
 * 
 * @todo   Cambiar la lógica de como se trabaja con los botones
 */

document.addEventListener('DOMContentLoaded', () => {

    /**
     * Elemento con todos los botones disponibles mediante
     * la clase 'calculator__key'
     * 
     * @type {HTMLElement}
     */
    const buttons = document.querySelectorAll('.calculator__key');

    /**
     * Elemento contenedor del visor - Parte de resultados
     * 
     * @type {HTMLDivElement}
     */
    const resultVisor = document.querySelector('.calculator__visor--result');

    /**
     * Elemento contenedor del visor - Parte del historial de 
     * cálculos
     * 
     * @type {HTMLDivElement}
     */
    const calcResultVisor = document.querySelector('.calculator__visor--calc');

    /**
     * Almacena el resultado exitoso actual para
     * futuras validaciones
     * 
     * @type String
     */
    let previousAns = '0';

    /**
     * Bandera para no agregar elementos al visor cuando 
     * no sea necesario.
     * 
     * @type Bool
     */
    let resetVisorFlag = true;

    /**
     * Bandera para resetear todos los valores del visor
     * 
     * @type Bool
     */
    let resetAllFlag = false;

    /**
     * Mensaje mostrado en error de calculo
     * 
     * @type {String}
     */
    const expErrorMessage = 'Syntax Error';

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const buttonValue = button.innerText;
       
            //// Chequeos generales

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

            // Despues de un cálculo anterior, si el visor está vacio
            // y se apreta un operador, se agregará el resultado anterior
            if(isAnOperatorButton(button) && !isVisorEmpty(resultVisor) && previousAns) {
                addResultToVisorStart(resultVisor, previousAns);
            }

            //// Casos generales

            if (buttonValue === 'C') {
                // Reset de todos los valores
                clearAllVisor(resultVisor, calcResultVisor);
                setVisorValue('0', resultVisor);

                previousAns = '';

            } else if (buttonValue === '=') {
                // Calcular el resultado
                const expression = resultVisor.innerText.replace('=', '');
                const result = calculate(expression);

                if(typeof result === 'undefined') {
                    // Muestra resultado anterior si está vacio
                    setVisorValue(previousAns, resultVisor);
                } else if(result instanceof Error) {
                    // Muestra mensaje de error
                    setVisorValue(expErrorMessage, resultVisor);
                    alert(result.message);

                    resetVisorFlag = true;
                } else {
                    // Muestra resultado exitoso
                    setVisorValue(result, resultVisor);
                    setCalcVisorValue(expression, calcResultVisor);

                    // Para uso posterior
                    previousAns = result;
                    resetVisorFlag = true;
                }
            }
        });
    });

});