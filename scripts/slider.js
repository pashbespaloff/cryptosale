const sliderButtons = document.querySelectorAll(".slider-buttons__radio"),
      applications = document.querySelectorAll(".latest-applications__app");

const moveSlide = (e) => {
  const slides = Array.from(applications);
  slides.forEach(slide => {
    slide.classList.add("animate-slide");
    slide.classList.remove("active-slide");
  });

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    if (slide.dataset.id === e.target.id) slide.classList.add("active-slide");
  };

  setTimeout(() => {
    slides.forEach(slide => slide.classList.remove("animate-slide"));
  }, 500);
};     

sliderButtons.forEach(button => button.addEventListener("click", moveSlide));