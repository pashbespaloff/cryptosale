const burgerMenuButton = document.querySelector(".header__burger-menu-button"),
      burgerMenuCloseButton = document.querySelector(".burger-menu-window__close");

const toggleBurgerMenu = (option) => {
  const menu = document.querySelector(".header__burger-menu-window");

  if (option === "open") {
    menu.classList.replace("invisible", "visible");
    setTimeout(() => {
      menu.classList.replace("off", "on");
    }, 10);

  } else if (option === "close") {
    menu.classList.replace("on", "off");
    setTimeout(() => {
      menu.classList.replace("visible", "invisible");
    }, 360);
  }
}

burgerMenuButton.addEventListener("click", () => toggleBurgerMenu("open"));
burgerMenuCloseButton.addEventListener("click", () => toggleBurgerMenu("close"));