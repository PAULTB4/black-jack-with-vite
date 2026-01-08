/**
 * 
 * @param {Array<String>} deck Tiene un arreglo de String: ["2H","AC", "QC", ...]] 
 * @returns {String} retorna una carta del deck
 */

export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
};