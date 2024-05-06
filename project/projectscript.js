

function showNav () {
    document.getElementById("navlinks").style.display = "block";
}
function hideNav () {
    document.getElementById("navlinks").style.display = "none";
}





// Keep track of the current slide
let currentSlideIndex = 0;

// Function to display the correct slide
function displaySlide(index) {
    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll('.dot');

    // Loop through all slides and hide them
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Loop through dots and reset the active state
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    // Ensure the index is within the slide range
    if (index >= slides.length) {
        currentSlideIndex = 0; // Start from the beginning
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1; // Go to the last slide
    } else {
        currentSlideIndex = index;
    }

    // Display the current slide
    slides[currentSlideIndex].style.display = 'block';
    dots[currentSlideIndex].classList.add('active');
}

// Change the slide by a given increment
function changeSlide(step) {
    displaySlide(currentSlideIndex + step);
}

// Set the slide to a specific index
function setSlide(index) {
    displaySlide(index);
}

// Initialize the slideshow when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displaySlide(currentSlideIndex); // Start by displaying the first slide
});



