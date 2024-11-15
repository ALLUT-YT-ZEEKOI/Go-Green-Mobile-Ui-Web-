let currentSlideIndex = 0;
const carouselContent = document.getElementById("courcel_content_z1");
const dots = document.querySelectorAll(".dot_z1");

function updateCarousel() {
  const offset = -currentSlideIndex * 100; // Offset for sliding effect
  carouselContent.style.transform = `translateX(${offset}%)`;

  // Update active dot
  dots.forEach((dot_z1, index) => {
    dot_z1.classList.toggle("active", index === currentSlideIndex);
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % dots.length;
  updateCarousel();
}

function setCurrentSlide(index) {
  currentSlideIndex = index;
  updateCarousel();
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
