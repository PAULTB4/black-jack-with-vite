import _, { isArguments } from "underscore";

/**
 * 
 * @param {Array<String>} tiposCarta example: ['C', 'D', 'H', 'S'] 
 * @param {Array<String>} TiposEspeciales example: ['A', 'J', 'Q', 'K'] 
 * @returns  {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, TiposEspeciales) => {
    if (!tiposCarta || tiposCarta.length === 0) throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
    if (!TiposEspeciales || TiposEspeciales.length === 0) throw new Error('TiposEspeciales es obligatorio como un arreglo de string');

    let deck = []

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposCarta) {
        for (let esp of TiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

// export default crearDeck;