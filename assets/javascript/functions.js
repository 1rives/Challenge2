/**
 * Primer parcial - Practicas Profesionalizantes III
 *
 * @file   Funciones utilizadas en el script principal (main.js)
 * @author Gonzalo Rives
 */

// Variables

/**
 * Clase específica del botón para operadores
 * 
 * @type {String} 
 */
const buttonOperatorClass = 'calculator__key--operator';

/**
 * Resuelve una expresión matemática
 * 
 * Usar la función eval() no está recomendada, por lo que se 
 * recurrirá a la libreria Math.js para realizar los calculos. 
 * Devuelve el mensaje de error al encontrarse uno.
 * 
 * @param {String}            expression   Expresión a resolver
 *
 * @returns {String}          Resultado de la expresión
 */
function calculate(expression) {
    try {
        var result = math.evaluate(expression);
        return result;
    } catch(ex) {
        return ex.message;
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

/**
 * Agrega el resultado previo al principio del visor
 * 
 * Se agregará al inicio de todo quedando primero, antes
 * que el operador previamente seleccionado.
 * 
 * @example De "-" a "50-"
 * 
 * @param {HTMLDivElement}    visorElement       Elemento del visor   
 * @param {String}            previousAnswer     Respuesta anterior                 
 */
function addResultToVisorStart(visorElement, previousAnswer) {
    visorElement.insertAdjacentText("afterbegin", previousAnswer);
}

/**
 * Devuelve si el botón en cuestión es el de un operador matemático
 * 
 * @param {HTMLButtonElement}  buttonElement          Elemento del botón en cuestión
 * @constant {String}          buttonOperatorClass    Constante con el nombre de clase de
 *                                                    los operadores matemáticos
 *
 * @returns {Boolean}          Verdadero por botón de operador, null si no lo es                          
 */
function isAnOperatorButton(buttonElement) {
    return buttonElement.className.match(buttonOperatorClass);
}

/**
 * Devuelve si el contenido del visor está vacio
 * 
 * Mediante el innerText del elemento visor (Resultado/result) se busca 
 * un valor en la primera posición sin importar el tipo del mismo.
 * 
 * @param {HTMLDivElement}    visorElement       Elemento del visor
 *
 * @returns {Boolean}         Verdadero por valor existente                       
 */
function isVisorEmpty(visorElement) {
    return parseInt(visorElement.innerText[0]);
}