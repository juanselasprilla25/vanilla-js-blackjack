/**
 * 
 * @param {String} imageName 
 * @returns {HTMLImageElement} newImgCard
 */
export const createImage = (imageName) => {
    if (!imageName) throw new Error('imageName is required')
    const newImgCard = document.createElement('img')
    newImgCard.src = `./assets/images/${imageName}.png`
    newImgCard.classList.add('img-card')
    return newImgCard
}
