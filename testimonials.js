// progress bar start
const filled=document.querySelector('.filled');

function update(){
    filled.style.width=`${((window.scrollY) / (document.body.scrollHeight-window.innerHeight)*100)}%`
    requestAnimationFrame(update);
}
update();



// progress bar end

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function nextSlide() {
  showSlides(slideIndex += 1, 'right'); // Slide to the right
}

function prevSlide() {
  showSlides(slideIndex -= 1, 'left'); // Slide to the left
}

// Thumbnail controls
function currentSlide(n) {
  showSlides(slideIndex = n, null); // Directly show slide n
}

function showSlides(n, direction) {
  let slides = document.getElementsByClassName("testi1-testimonial-slide");
  let dots = document.getElementsByClassName("testi1-dot");

  // Wrap around slides
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Reset all slides and dots
  for (let i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none"; // Hide all slides
    slides[i].classList.remove('testi1-active-slide'); // Remove active class
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Remove active class from dots
  }

  // Show the current slide
  const currentSlide = slides[slideIndex - 1];
  currentSlide.style.display = "block"; // Display the current slide
  currentSlide.classList.add('testi1-active-slide'); // Add active class

  // Add sliding transition
  const mask = document.querySelector('.testi1-testimonial-mask');
  if (direction) {
    mask.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`; // Slide effect based on direction
  }

  // Activate the corresponding dot
  dots[slideIndex - 1].className += " active"; // Set active dot
}

// Optional: Set up event listeners for the pagination dots with smooth scrolling
document.querySelectorAll('.testi1-dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide(index + 1); // Navigate to the clicked slide
    // Smooth scrolling to the top of the testimonials section
    document.querySelector('.testi1-testimonial-component').scrollIntoView({ behavior: 'smooth'});
  });
});



