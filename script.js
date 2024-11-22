function initCarousel(carouselContentId, dotClass, interval = 3000) {
  const carouselContent = document.getElementById(carouselContentId);
  const dots = document.querySelectorAll(`.${dotClass}`);
  const items = carouselContent.children;
  let currentSlideIndex = 0;

  // Clone slides for seamless looping
  Array.from(items).forEach((item) => {
    const clone = item.cloneNode(true);
    carouselContent.appendChild(clone);
  });

  function updateCarousel() {
    const offset = -currentSlideIndex * 100;
    carouselContent.style.transform = `translateX(${offset}%)`;
    carouselContent.style.transition = "transform 0.5s ease-in-out";

    // Update active dot
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlideIndex % dots.length);
    });
  }

  function nextSlide() {
    currentSlideIndex++;

    // Reset carousel when the last slide is reached
    if (currentSlideIndex >= items.length) {
      setTimeout(() => {
        carouselContent.style.transition = "none";
        carouselContent.style.transform = `translateX(0)`;
        currentSlideIndex = 0;
      }, 500);
    }

    updateCarousel();
  }

  function setCurrentSlide(index) {
    currentSlideIndex = index;
    updateCarousel();
  }

  // Auto-slide every interval
  setInterval(nextSlide, interval);

  return { nextSlide, setCurrentSlide };
}

// Initialize carousels
const carousel1 = initCarousel("courcel_content_z1", "dot");
const carousel2 = initCarousel("carouselContent_refer", "dot_refer");

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

// Farm fresh picks loop
const home_parent_card = document.getElementById("home_parent_card_z1");
const home_child_card = document.getElementById("home_child_card_z1");
for (let i = 0; i <= 5; i++) {
  const clone = home_child_card.cloneNode(true);
  home_parent_card.appendChild(clone);
}
home_child_card.remove();
