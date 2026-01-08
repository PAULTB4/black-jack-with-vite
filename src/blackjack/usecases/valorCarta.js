/**
 * 
 * @param {String} carta example: 5H
 * @returns {Number} Retorna el valor de la carta, example: 5
 */
export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10 :
        valor * 1;
}