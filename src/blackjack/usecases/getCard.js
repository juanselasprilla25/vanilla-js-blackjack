/**
 * This functions allows to get a new card
 * @param {Array<String>} deck
 * @returns {String} - Returns a card from the deck
 */
export const getCard = (deck) => {

    if (!deck || deck.length === 0) {
        console.error('There is no cards in the deck');
        throw ('There is no cards in the deck');
    }
    return deck.pop()
}