const testiSlides = document.querySelectorAll('.testi-slide');
const testiDots = document.querySelectorAll('.testi-dot');
let testiCurrentSlide = 0;

document.getElementById('testi-nextSlide').addEventListener('click', function() {
    testiMoveToSlide(testiCurrentSlide + 1);
});

document.getElementById('testi-prevSlide').addEventListener('click', function() {
    testiMoveToSlide(testiCurrentSlide - 1);
});

testiDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        testiMoveToSlide(index);
    });
});

function testiMoveToSlide(slideIndex) {
    // Wrap around the slide index if it exceeds the bounds
    if (slideIndex < 0) {
        slideIndex = testiSlides.length - 1;
    } else if (slideIndex >= testiSlides.length) {
        slideIndex = 0;
    }

    // Remove active class from all slides and dots
    testiSlides.forEach(slide => slide.classList.remove('testi-active'));
    testiDots.forEach(dot => dot.classList.remove('testi-active'));

    // Add active class to the current slide and dot
    testiSlides[slideIndex].classList.add('testi-active');
    testiDots[slideIndex].classList.add('testi-active');

    // Update the current slide index
    testiCurrentSlide = slideIndex;
}

// Auto slide (optional)
setInterval(() => {
    testiMoveToSlide(testiCurrentSlide + 1);
}, 5000); // Slide every 5 seconds









// const testiSlides = document.querySelectorAll('.testi-slide');
// const testiDots = document.querySelectorAll('.testi-dot');
// let testiCurrentSlide = 0;

// document.getElementById('testi-nextSlide').addEventListener('click', function() {
//     testiMoveToSlide(testiCurrentSlide + 1);
// });

// document.getElementById('testi-prevSlide').addEventListener('click', function() {
//     testiMoveToSlide(testiCurrentSlide - 1);
// });

// testiDots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         testiMoveToSlide(index);
//     });
// });

// function testiMoveToSlide(slideIndex) {
//     if (slideIndex < 0) {
//         slideIndex = testiSlides.length - 1;
//     } else if (slideIndex >= testiSlides.length) {
//         slideIndex = 0;
//     }

//     testiSlides.forEach(slide => slide.classList.remove('testi-active'));
//     testiDots.forEach(dot => dot.classList.remove('testi-active'));

//     testiSlides[slideIndex].classList.add('testi-active');
//     testiDots[slideIndex].classList.add('testi-active');

//     testiCurrentSlide = slideIndex;
// }

// // Auto slide (optional)
// setInterval(() => {
//     testiMoveToSlide(testiCurrentSlide + 1);
// }, 5000); // Slide every 5 seconds
