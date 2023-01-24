const DrawMessage = 'Sorry, it is a draw. Try once again.',
    failedMessage = 'You lost. Try once again.',
    successMessage = 'You win. Play again.'

/**
 * 
 * @param {Array<Number>} pointsArray 
 * @param {Number} machineIndexTurn 
 * @param {Number} userIndexTurn 
 * @returns {MessageEvent}
 */
export const getWinner = (pointsArray, machineIndexTurn, userIndexTurn) => {
    if (!pointsArray) throw new Error('pointsArray is required')
    if (machineIndexTurn == null || machineIndexTurn == undefined) throw new Error('machineIndexTurn is required')
    if (userIndexTurn == null || userIndexTurn == undefined) throw new Error('userIndexTurn is required')

    if (pointsArray[machineIndexTurn] > 21) {
        return showMessage(successMessage);
    }

    if (pointsArray[userIndexTurn] > 21) {
        return showMessage(failedMessage);
    }

    if (pointsArray[machineIndexTurn] === pointsArray[userIndexTurn]) {
        return showMessage(DrawMessage);
    }
    return showMessage(failedMessage);
}

const showMessage = (message) => {
    console.warn(message);
    setTimeout(() => { alert(message) }, 100)
}