import { shuffle } from "../helpers/shuffle";
/**
 * Creates the deck with the numbers and letter cards.
 * @param {Array<String>} cardTypes - (i.e) ['C', 'D', 'H', 'S']
 * @param {Array<String>} specialCards - (i.e) ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} - Returns a new array of deck
 * * xC = ____ of Clubs (Treboles)
 * * xD = ____ of Diamonds (Diamantes)
 * * xH = ____ of Hearts (Corazones)
 * * xS = ____ of Spades (Espadas)
 * * It does not have jockers.
 */
export const createDeck = (cardTypes, specialCards) => {
    if (!cardTypes || cardTypes.length === 0) throw new Error('CardTypes is required as a array of string')
    if (!specialCards) throw new Error('SpecialCards is required')
    let deck = [];
    let cardValue = undefined;
    for (let number = 2; number <= 10; number++) {
        for (let card of cardTypes) {
            cardValue = `${number}${card}`
            deck.push(cardValue)
        }
    }

    for (let type of cardTypes) {
        for (let card of specialCards) {
            cardValue = `${card}${type}`
            deck.push(cardValue)
        }
    }
    deck = shuffle(deck)
    return deck
}