let cardFront = document.querySelector('.card--front')
let cardBack = document.querySelector('.card--back')

function cardTransitonOn() {
    if(cardFront.style.display ='grid') {
        cardFront.style.display = 'none'
        cardBack.style.display = 'grid'
    }

}
function cardTransitonOff() {
    if(cardFront.style.display ='none') {
        cardFront.style.display = 'grid'
        cardBack.style.display = 'none'
    }
}

document.querySelectorAll('.aposta-card').forEach((card) => {
    card.addEventListener('mouseover', cardTransitonOn)
    card.addEventListener('mouseout', cardTransitonOff)
})