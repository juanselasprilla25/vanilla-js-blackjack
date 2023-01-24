/**
 * Assign value of the cards using the following: 
 * * 2 to 10 => The number represents the value
 * *    A    => Has a value of: 11
 * * J, Q, K => Has a value of: 10
 * @param {String} card 
 * @returns {Number} 
 * It uses regex to get the digits of the cards and excludes the letters C-D-H-S
 */
export const getCardValue = (card) => {

    if (!card) throw new Error('card is required')
    const cardNumberRegex = /\d?[^C|D|H|S]/,
        cardValue = cardNumberRegex.exec(card)[0];
    if (isNaN(cardValue)) {
        return (cardValue === 'A') ? 11 : 10
    }
    else {
        return parseInt(cardValue)
    }
}