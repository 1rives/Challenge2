/**
 * Primer parcial - Practicas Profesionalizantes III
 *
 * @file   Funciones utilizadas en el script principal (main.js)
 * @author Gonzalo Rives
 */

/**
 * Resuelve una expresión matemática
 * 
 * Usar la función eval() es inseguro, por lo que se recurrirá 
 * a una libreria externa para realizar los calculos. 
 * 
 * @param {String}            expression   Expresión a resolver
 *
 * @returns {String}          Resultado de la expresión, devuelve falso en 
 *                            error.
 */
function calculate(expression) {
    try {
        var result = eval(expression);
        return result;
    } catch {
        return false;
    }
}

/**
 * Agrega al visor un carectér, siendo este un número u operador.
 * 
 * @param {Char}              value           Caractér a agregar
 * @param {HTMLDivElement}    visorElement    Elemento del visor
 */
function appendToVisor(value, visorElement) {
    visorElement.innerText += value;
}

/**
 * Reemplaza el valor actual del visor de la calculadora
 * 
 * @param {Any}               value           Dato a mostrar
 * @param {HTMLDivElement}    visorElement    Elemento del visor
 */
function setVisorValue(value, visorElement) {
    visorElement.innerText = value;
}

/**
 * Reemplaza la expresión del resultado previo
 * 
 * @param {String}            value               Expresión a mostrar
 * @param {HTMLDivElement}    calcVisorElement    Elemento del visor de cálculo
 */
function setCalcVisorValue(value, calcVisorElement) {
    calcVisorElement.innerText = value;
}


/**
 * Limpia los valores previos del visor
 * 
 * Se reemplazará todo lo ingresado en el visor por su valor 
 * por defecto correspondiente (0 y caractér vacio).
 * 
 * @param {HTMLDivElement}    visorElement       Elemento del visor
 * @param {HTMLDivElement}    calcVisorElement   Elemento del visor de cálculo
 */
function clearAllVisor(visorElement, calcVisorElement) {
    visorElement.innerText = '0';
    calcVisorElement.innerText = '⠀'
}

/**
 * Limpia los valores previos del visor para cálculos
 * 
 * Se reemplazará todo lo ingresado en el visor por el valor
 * por defecto, este siendo un caractér especial.
 * 
 * @param {HTMLDivElement}    calcVisorElement   Elemento del visor de cálculo
 */
function clearCalcVisor(calcVisorElement) {
    calcVisorElement.value = '⠀';
}