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

//  <!-- Direct From Farm category-->
let category_horizontal_move_loop = document.querySelector(
  ".category_horizontal_move"
);
let category_main_boxz1 = document.getElementById("category_main_boxz1");

for (let i = 0; i <= 5; i++) {
  const clone = category_main_boxz1.cloneNode(true);
  clone.style.display = "block";

  category_horizontal_move_loop.appendChild(clone);
}
category_main_boxz1.remove();
