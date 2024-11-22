// function initCarousel(carouselContentId, dotClass, interval = 3000) {
//   let currentSlideIndex = 0;
//   const carouselContent = document.getElementById(carouselContentId);
//   const dots = document.querySelectorAll(`.${dotClass}`);

//   function updateCarousel() {
//     const offset = -currentSlideIndex * 100;
//     carouselContent.style.transform = `translateX(${offset}%)`;

//     // Update active dot
//     dots.forEach((dot, index) => {
//       dot.classList.toggle("active", index === currentSlideIndex);
//     });
//   }

//   function nextSlide() {
//     currentSlideIndex = (currentSlideIndex + 1) % dots.length;
//     updateCarousel();
//   }

//   function setCurrentSlide(index) {
//     currentSlideIndex = index;
//     updateCarousel();
//   }

//   setInterval(nextSlide, interval);

//   return { nextSlide, setCurrentSlide };
// }

// const carousel1 = initCarousel("courcel_content_z1", "dot");
// const carousel2 = initCarousel("carouselContent_refer", "dot_refer");

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
