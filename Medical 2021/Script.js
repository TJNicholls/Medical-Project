var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show slides
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var radios = document.getElementsByName("slide-btn");

    // Reset all slides to hide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // If the slide index exceeds the number of slides, set it to 1
    if (n > slides.length) {
        slideIndex = 1;
    }

    // If the slide index is less than 1, set it to the last slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Set the display of the current slide to block
    slides[slideIndex - 1].style.display = "block";

    // Set the corresponding radio button as checked
    radios[slideIndex - 1].checked = true;
}

// Automatic slideshow
var autoSlideIndex = 0;
autoShowSlides();

function autoShowSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    
    // Reset all slides to hide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    autoSlideIndex++;
    
    // If the auto slide index exceeds the number of slides, reset it to 1
    if (autoSlideIndex > slides.length) {
        autoSlideIndex = 1;
    }

    // Set the display of the current auto slide to block
    slides[autoSlideIndex - 1].style.display = "block";

    // Wait for 4 seconds and then show the next slide
    setTimeout(autoShowSlides, 4000);
}
