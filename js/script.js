var images = ["./assets/bg-new.jpg", "./assets/chickmanglur-scene.jpg", "./assets/rectangle-27.png"]

var imageChange = document.getElementById("box")

var i = 0;
setInterval(function() {
      imageChange.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 3000);

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slider');
    const totalSlides = slides.length;
    const slidesToShow = window.matchMedia("(min-width: 601px)").matches ? 3 : 1;

    for (let i = 0; i < totalSlides; i++) {
        if (i >= slideIndex && i < slideIndex + slidesToShow) {
            slides[i].style.display = 'block';
        } else {
            slides[i].style.display = 'none';
        }
    }
    const nextButton = document.querySelector('.next');
    nextButton.disabled = slideIndex + slidesToShow >= totalSlides;
    const prevButton = document.querySelector('.prev');
    prevButton.disabled = slideIndex === 0;
}

function prevSlide() {
    const slidesToShow = window.matchMedia("(min-width: 601px)").matches ? 3 : 1;
    slideIndex -= slidesToShow;
    if (slideIndex < 0) {
        slideIndex = 0;
    }
    showSlides();
}

function nextSlide() {
    const slidesToShow = window.matchMedia("(min-width: 601px)").matches ? 3 : 1;
    slideIndex += slidesToShow;
    showSlides();
}

showSlides();
