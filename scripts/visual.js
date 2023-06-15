const dimHeader = () => {
  const dimmedEffect = document.querySelector(".header__dimmed-effect");
  let dimPoint = (window.innerHeight > 600) ? 40 : 30;

  (window.scrollY > dimPoint)
    ? dimmedEffect.classList.replace("off", "on")
    : dimmedEffect.classList.replace("on", "off");
};

window.addEventListener("scroll", dimHeader);