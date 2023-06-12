let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;
let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider--width').style.width = `${sliderWidth * totalSlides}px`
document.querySelector('.slider--controls').style.width = `${sliderWidth}px`
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`

// Functions
function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    updateMargin();
}

function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let newMargin = (currentSlide * document.body.clientWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`
}