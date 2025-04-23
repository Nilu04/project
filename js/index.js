// Testimonial Carousel - Auto Slide
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((testimonial, idx) => {
    if (idx === index) {
      testimonial.style.display = 'block';
    } else {
      testimonial.style.display = 'none';
    }
  });
}

setInterval(() => {
  testimonialIndex = (testimonialIndex + 1) % totalTestimonials;
  showTestimonial(testimonialIndex);
}, 5000); // Change every 5 seconds

showTestimonial(testimonialIndex); // Show first testimonial initially

// Newsletter form validation
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = newsletterForm.querySelector('input[type="email"]').value;
  if (email) {
    alert(`Thank you for subscribing, ${email}!`);
    newsletterForm.reset(); // Clear the form after submission
  } else {
    alert('Please enter a valid email address.');
  }
});

// Course Search Bar
const searchButton = document.querySelector('.search-bar .btn');
searchButton.addEventListener('click', function() {
  const query = document.getElementById('course-search').value;
  if (query) {
    alert(`Searching for courses related to: ${query}`);
  } else {
    alert('Please enter a search term.');
  }
});
