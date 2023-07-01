const exchangeAgreeCheckbox = document.querySelector(".exchange__agree-checkbox"),
      exchangeButton = document.querySelector(".exchange__button"),
      modalCloseButton = document.querySelector(".modal-window__close"),
      modalText = document.querySelector(".modal-window__text"),
      modalExchangeSuccess = "Your money has been exchanged.<br><br>Thank you for using our service!";

const toggleModal = (option) => {
  const modalWindow = document.querySelector(".modal-window"),
        body = document.querySelector(".body");
  // modalText.innerHTML = modalExchangeSuccess;

  if (option === "open") {
    body.classList.add("no-scroll");
    modalWindow.classList.replace("invisible", "visible");
    setTimeout(() => {
      modalWindow.classList.replace("off", "on");
    }, 10);

  } else if (option === "close") {
    body.classList.remove("no-scroll");
    modalWindow.classList.replace("on", "off");
    setTimeout(() => {
      modalWindow.classList.replace("visible", "invisible");
    }, 360);
  }
}

exchangeButton.addEventListener("click", () => toggleModal("open"));
modalCloseButton.addEventListener("click", () => toggleModal("close"));

exchangeAgreeCheckbox.addEventListener("change", () => {
  exchangeButton.disabled = (exchangeAgreeCheckbox.checked === false) ? true : false
});