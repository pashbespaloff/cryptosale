const body = document.querySelector(".body"),
      exchangeAgreeCheckbox = document.querySelector(".exchange__agree-checkbox"),
      exchangeButton = document.querySelector(".exchange__button"),
      modalWindow = document.querySelector(".modal-window"),
      modalCloseButton = document.querySelector(".modal-window__close"),
      modalText = document.querySelector(".modal-window__text"),
      modalStandardText = "This is only for a demonstration",
      modalExchangeSuccessText = "Your money has been exchanged.<br><br>Thank you for using our service!";


/* modal window component */
const toggleModal = (option, text) => {
  const changeModalText = (text) => modalText.innerHTML = text;

  if (option === "open") {
    changeModalText(text);

    modalWindow.classList.replace("invisible", "visible");
    setTimeout(() => {
      modalWindow.classList.replace("off", "on");
    }, 10);

  } else if (option === "close") {
    modalWindow.classList.replace("on", "off");
    setTimeout(() => {
      modalWindow.classList.replace("visible", "invisible");
    }, 360);
  }
}

exchangeButton.addEventListener("click", () => toggleModal("open", modalExchangeSuccessText));
modalCloseButton.addEventListener("click", () => toggleModal("close"));
modalWindow.addEventListener("click", (e) => {if (e.target === modalWindow) toggleModal("close")});

exchangeAgreeCheckbox.addEventListener("change", () => {
  exchangeButton.disabled = (exchangeAgreeCheckbox.checked === false) ? true : false
});






/* links binding */
const links = document.querySelectorAll('[href="#"'),
      buttons = document.querySelectorAll("BUTTON:not(.exchange__button, .header__burger-menu-button)");
links.forEach(link => link.addEventListener("click", () => toggleModal("open", modalStandardText)));
buttons.forEach(link => link.addEventListener("click", () => toggleModal("open", modalStandardText)));






/* exchange component */
