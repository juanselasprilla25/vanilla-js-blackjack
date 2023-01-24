import { createDeck, createImage, getCard, getCardValue, getWinner } from './usecases'

/**
 * * Date: January 2023
 * * Github: @juanselasprilla25
 * * @author: JuanSe Lasprilla
 * * @version: 2.3.1 
 * * @description: Vanilla javascript Blackjack game 
 */

'use strict'

let deck = [],
    userPointsArray = new Array(2).fill(0);

const cardTypes = ['C', 'D', 'H', 'S'],
    specialCards = ['A', 'J', 'Q', 'K'],
    userIndexTurn = 0,
    machineIndexTurn = 1,
    btnNewGame = document.querySelector('#btn-NewGame'),
    btnGetCard = document.querySelector('#btn-GetCard'),
    btnStopGame = document.querySelector('#btn-StopGame'),
    gamerCardsContainer = document.querySelector('#container-gamerCards'),
    machineCardsContainer = document.querySelector('#container-machineCards'),
    usersPointsLabels = document.querySelectorAll('small');


const initializeGame = () => {
    resetGame();
    deck = createDeck(cardTypes, specialCards);
}

const resetGame = () => {
    console.clear();

    userPointsArray = userPointsArray.map((user) => user = 0);

    gamerCardsContainer.innerHTML = [];
    machineCardsContainer.innerHTML = [];

    usersPointsLabels.forEach((user) => user.innerText = 0);

    btnGetCard.disabled = false;
    btnStopGame.disabled = false;
}

const userPoints = (card, user) => {
    userPointsArray[user] += getCardValue(card);
    usersPointsLabels[user].innerText = userPointsArray[user];
    return userPointsArray[user];
}

const machineTurn = () => {
    btnGetCard.disabled = true;
    btnStopGame.disabled = true;
    do {
        const machineCard = getCard(deck)
        userPoints(machineCard, machineIndexTurn)
        const newImgCard = createImage(machineCard)
        machineCardsContainer.append(newImgCard)
    } while (userPointsArray[machineIndexTurn] < userPointsArray[userIndexTurn])

    getWinner(userPointsArray, machineIndexTurn, userIndexTurn);
}

const userTurn = () => {
    const userCard = getCard(deck)
    userPoints(userCard, userIndexTurn)
    const newImgCard = createImage(userCard)
    gamerCardsContainer.append(newImgCard)

    if (userPointsArray[userIndexTurn] > 21 || userPointsArray[userIndexTurn] === 21) {
        machineTurn();
    }
}

btnNewGame.addEventListener('click', () => {
    initializeGame();
})

btnGetCard.addEventListener('click', () => {
    userTurn();
})

btnStopGame.addEventListener('click', () => {
    machineTurn()
})

