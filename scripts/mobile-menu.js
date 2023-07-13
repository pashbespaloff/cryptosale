const burgerMenuWindow = document.querySelector(".header__burger-menu-window"),
      burgerMenuButton = document.querySelector(".header__burger-menu-button"),
      burgerMenuCloseButton = document.querySelector(".burger-menu-window__close");

const openMenu = () => {
  burgerMenuWindow.classList.replace("invisible", "visible");
  setTimeout(() => {
    burgerMenuWindow.classList.replace("off", "on");
  }, 10);
};

const closeMenu = () => {
  burgerMenuWindow.classList.replace("on", "off");
  setTimeout(() => {
    burgerMenuWindow.classList.replace("visible", "invisible");
  }, 360);
};

burgerMenuButton.addEventListener("click", openMenu);
burgerMenuCloseButton.addEventListener("click", closeMenu);
burgerMenuWindow.addEventListener("click", (e) => (e.target === burgerMenuWindow) && closeMenu());