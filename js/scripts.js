

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the carousel
    $('#imageSlider').carousel({
        interval: 3000, // Change image every 3 seconds
        ride: 'carousel'
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (contactForm.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // Form submission logic (e.g., AJAX request)
            alert('Form submitted successfully!');
        }
        contactForm.classList.add('was-validated');
    });
});

// Function to check if an element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to trigger animation when element is in viewport
function animateOnScroll() {
    var animatedElements = document.querySelectorAll('.animated-element');
    animatedElements.forEach(function(element) {
        if (isInViewport(element)) {
            element.classList.add('animate');
        }
    });
}

// Add scroll event listener to trigger animation
window.addEventListener('scroll', animateOnScroll);

// Trigger animation on page load
animateOnScroll();
