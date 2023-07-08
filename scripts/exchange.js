const body = document.querySelector(".body"),
      exchangeAgreeCheckbox = document.querySelector(".exchange__agree-checkbox"),
      exchangeButton = document.querySelector(".exchange__button"),
      modalWindow = document.querySelector(".modal-window"),
      modalCloseButton = document.querySelector(".modal-window__close"),
      modalText = document.querySelector(".modal-window__text"),
      modalStandardText = "This is for demonstration purposes only.",
      modalExchangeSuccessText = "Your money has been exchanged.<br><br>Thank you for using our service!";





/* empty links binding */
const links = document.querySelectorAll('[href="#"'),
      buttons = document.querySelectorAll("BUTTON:not(.exchange__button, .header__burger-menu-button, .exchange__swap)");
links.forEach(link => link.addEventListener("click", () => toggleModal("open", modalStandardText)));
buttons.forEach(link => link.addEventListener("click", () => toggleModal("open", modalStandardText)));





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

// exchangeButton.addEventListener("click", () => toggleModal("open", modalExchangeSuccessText));
modalCloseButton.addEventListener("click", () => toggleModal("close"));
modalWindow.addEventListener("click", (e) => {if (e.target === modalWindow) toggleModal("close")});

exchangeAgreeCheckbox.addEventListener("change", () => {
  exchangeButton.disabled = (exchangeAgreeCheckbox.checked === false) ? true : false
});










/* exchange component */
const getDataCurrency = async() => {
	// let url = 'https://v6.exchangerate-api.com/v6/6d90771bf7d7e8bd09657c9a/latest/USD';
	// let response = await fetch(url);
	// return await response.json()
	return {
    "result": "success",
    "documentation": "https://www.exchangerate-api.com/docs",
    "terms_of_use": "https://www.exchangerate-api.com/terms",
    "time_last_update_unix": 1653264001,
    "time_last_update_utc": "Mon, 23 May 2022 00:00:01 +0000",
    "time_next_update_unix": 1653350401,
    "time_next_update_utc": "Tue, 24 May 2022 00:00:01 +0000",
    "base_code": "USD",
    "conversion_rates": {
      "USD":1,
      "EUR":0.9468,
      "AED":3.6725,
      "AFN":90.3330,
      "ALL":114.3400,
      "AMD":457.3893,
      "ANG":1.7900,
      "AOA":416.0034,
      "ARS":118.3803,
      "AUD":1.4156,
      "AWG":1.7900,
      "AZN":1.6996,
      "BAM":1.8516,
      "BBD":2.0000,
      "BDT":86.4531,
      "BGN":1.8516,
      "BHD":0.3760,
      "BIF":2023.7871,
      "BMD":1.0000,
      "BND":1.3788,
      "BOB":6.8769,
      "BRL":4.9109,
      "BSD":1.0000,
      "BTN":77.9908,
      "BWP":12.2025,
      "BYN":3.1381,
      "BZD":2.0000,
      "CAD":1.2814,
      "CDF":1993.3441,
      "CHF":0.9748,
      "CLP":838.6265,
      "CNY":6.7088,
      "COP":4048.6401,
      "CRC":671.6117,
      "CUP":24.0000,
      "CVE":104.3907,
      "CZK":23.3333,
      "DJF":177.7210,
      "DKK":7.0629,
      "DOP":55.2602,
      "DZD":145.8808,
      "EGP":18.2801,
      "ERN":15.0000,
      "ETB":51.7544,
      "FJD":2.1651,
      "FKP":0.8014,
      "FOK":7.0629,
      "GBP":0.8014,
      "GEL":2.9025,
      "GGP":0.8014,
      "GHS":7.9321,
      "GIP":0.8014,
      "GMD":53.9519,
      "GNF":8826.5332,
      "GTQ":7.6708,
      "GYD":208.6848,
      "HKD":7.8536,
      "HNL":24.4879,
      "HRK":7.1331,
      "HTG":112.2287,
      "HUF":362.8390,
      "IDR":14574.3385,
      "ILS":3.3744,
      "IMP":0.8014,
      "INR":77.8898,
      "IQD":1456.0431,
      "IRR":42050.5420,
      "ISK":131.4361,
      "JEP":0.8014,
      "JMD":154.8155,
      "JOD":0.7090,
      "JPY":128.0929,
      "KES":116.6156,
      "KGS":82.3628,
      "KHR":4048.8684,
      "KID":1.4160,
      "KMF":465.7584,
      "KRW":1271.5803,
      "KWD":0.2996,
      "KYD":0.8333,
      "KZT":426.5671,
      "LAK":14669.7504,
      "LBP":1507.5000,
      "LKR":353.4155,
      "LRD":153.2965,
      "LSL":15.8384,
      "LYD":4.8153,
      "MAD":9.9007,
      "MDL":19.0736,
      "MGA":3997.2013,
      "MKD":58.3439,
      "MMK":1835.9669,
      "MNT":3125.5429,
      "MOP":8.0896,
      "MRU":36.3531,
      "MUR":42.3765,
      "MVR":15.4120,
      "MWK":818.7111,
      "MXN":19.8696,
      "MYR":4.3680,
      "MZN":64.2618,
      "NAD":15.8384,
      "NGN":415.3307,
      "NIO":35.8305,
      "NOK":9.7488,
      "NPR":124.7853,
      "NZD":1.5608,
      "OMR":0.3845,
      "PAB":1.0000,
      "PEN":3.7366,
      "PGK":3.5237,
      "PHP":52.1821,
      "PKR":200.2248,
      "PLN":4.3695,
      "PYG":6896.2711,
      "QAR":3.6400,
      "RON":4.6698,
      "RSD":111.1573,
      "RUB":60.6947,
      "RWF":1050.8521,
      "SAR":3.7500,
      "SBD":7.9469,
      "SCR":13.3113,
      "SDG":451.3498,
      "SEK":9.9509,
      "SGD":1.3788,
      "SHP":0.8014,
      "SLL":12904.2883,
      "SOS":577.0485,
      "SRD":20.9160,
      "SSP":440.2604,
      "STN":23.1948,
      "SYP":2508.6940,
      "SZL":15.8384,
      "THB":34.5273,
      "TJS":12.4892,
      "TMT":3.4979,
      "TND":2.9944,
      "TOP":2.3154,
      "TRY":15.9401,
      "TTD":6.7844,
      "TVD":1.4160,
      "TWD":29.5760,
      "TZS":2323.1783,
      "UAH":29.5848,
      "UGX":3649.7073,
      "UYU":40.5753,
      "UZS":11137.7736,
      "VES":4.8743,
      "VND":23169.6396,
      "VUV":116.4800,
      "WST":2.6609,
      "XAF":621.0112,
      "XCD":2.7000,
      "XDR":0.7435,
      "XOF":621.0112,
      "XPF":112.9746,
      "YER":250.4490,
      "ZAR":15.8366,
      "ZMW":17.0670,
      "ZWL":242.0516
    }
	}
};

const exchangeForm = document.querySelector(".exchange__form"),
      givenAmount = document.querySelector(".exchange__given-currency-input"),
      givenCurrency = document.querySelector(".exchange__given-currency-selector"),
      receivedAmount = document.querySelector(".exchange__received-currency-input"),
      receivedCurrency = document.querySelector(".exchange__received-currency-selector"),
      exchangeRate = document.querySelector(".exchange__rate-output"),
      comission = document.querySelector(".exchange__comission-output"),
      swapCurrenciesButton = document.querySelector(".exchange__swap"),
      firstSliderRadioButton = document.querySelector(`.slider-buttons__radio[id="slide-1"]`);

let state = {
  givenAmount: 0,
  receivedAmount: 0,
  givenCurrency: "USD",
  receivedCurrency: "USD",
  rates: {},
  checkbox: false,

  rate: {
    givenCurrency: "USD",
    factor: 1,
    receivedCurrency: "USD"
  },

  commission: {
    commissionAmount: 0,
    commissionCurrency: "USD"
  }
};





const init = async() => {
	// 1 — getting the data
	// production
	// const request = await getDataCurrency();
	// const dataCurrency = request.json();

	// test
	const dataCurrency = await getDataCurrency();

	// 2 — processing the data
	state.rates = dataCurrency.conversion_rates;
	
  // 3 — checking localStorage
	if (!localStorage.getItem("latestApplications")) {
    const latestApplications = [];
		localStorage.setItem("latestApplications", JSON.stringify(latestApplications));
  }

  // 4 — filling html with the data
	for (let key in state.rates) {
		const option = document.createElement("option");
		option.classList.add("currency-option");
		option.value = key;
		option.textContent = key;

		const optionClone = option.cloneNode(true);

		givenCurrency.append(option);
		receivedCurrency.append(optionClone);
	}

  const latestApplications = JSON.parse(localStorage.getItem("latestApplications")),
        apps = [
          latestApplications[latestApplications.length - 1],
          latestApplications[latestApplications.length - 2],
          latestApplications[latestApplications.length - 3],
          latestApplications[latestApplications.length - 4],
        ];
  
  for (let i = 0; i < apps.length; i++) {
    const app = apps[i];

    if (app) {
      let appTime = document.querySelector(`.slide-${i + 1}__exchange-time`),
          appGiven = document.querySelector(`.slide-${i + 1}__given`),
          appReceived = document.querySelector(`.slide-${i + 1}__received`);
      
      appTime.innerHTML = app.time;
      appGiven.innerHTML = `${app.givenAmount} <span>${app.givenCurrency}</span>`;
      appReceived.innerHTML = `${app.receivedAmount} <span>${app.receivedCurrency}</span>`;
    }
  };

  exchangeAgreeCheckbox.checked = false;
  firstSliderRadioButton.checked = true;

  render();

  // 5 — unblock the ui
  givenAmount.removeAttribute("disabled");
	givenCurrency.removeAttribute("disabled");
	receivedCurrency.removeAttribute("disabled");
}

init();





/* calculating functions */
const calcCommission = () => {
	const factor = state.rate.factor,
        givenAmount = state.givenAmount,
        percent = (givenAmount * factor) / 100;

	state.commission.commissionAmount = percent.toFixed(4);
};

const calcFactor = () => {
	const givenCurrency = state.givenCurrency,
        receivedCurrency = state.receivedCurrency,
        givenCurrencyRate = state.rates[givenCurrency],
        receivedCurrencyRate = state.rates[receivedCurrency],
        factor = receivedCurrencyRate / givenCurrencyRate;

	state.rate.factor = factor.toFixed(4);
};

const calcReceivedAmount = () => {
	state.receivedAmount = (state.givenAmount * state.rate.factor - state.commission.commissionAmount).toFixed(4);
};





/* render function */
const render = (option) => {
  if (option === "swap-currencies") {
    const givenCurrencyClone = givenCurrency.value;
    givenCurrency.value = receivedCurrency.value;
    receivedCurrency.value = givenCurrencyClone;
  };

	exchangeRate.innerHTML = 
  `<p>1&nbsp;<span class="exchange__rate-currency-1 gray">${state.rate.givenCurrency}</span>&nbsp;=&nbsp;<span class="exchange__rate-value">${state.rate.factor}</span>&nbsp;<span class="exchange__rate-currency-2 gray">${state.rate.receivedCurrency}</span></p>`;

	comission.innerHTML = !isNaN(state.commission.commissionAmount)
    ? `<p class="exchange__comission-value">${state.commission.commissionAmount}&nbsp;<span class="exchange__comission-currency gray">${state.rate.receivedCurrency}</span></p>`
    : "";

	receivedAmount.value = !isNaN(state.receivedAmount) ? state.receivedAmount : "";
}





/* event handlers */
const updateState = (e) => {
  switch(e.target.id) {
    case("given-amount"):
      state.givenAmount = e.target.value;
      break;

    case("given-currency"):
      state.givenCurrency = e.target.value;
      state.rate.givenCurrency = state.givenCurrency;
      break;

    case("received-currency"):
      state.receivedCurrency = e.target.value;
      state.rate.receivedCurrency = state.receivedCurrency;
      break;

    case("swap-currencies"):
      const givenCurrencyClone = state.givenCurrency;
      const rateGivenCurrencyClone = state.rate.givenCurrency;

      state.givenCurrency = state.receivedCurrency;
      state.receivedCurrency = givenCurrencyClone;
      state.rate.givenCurrency = state.rate.receivedCurrency;
      state.rate.receivedCurrency = rateGivenCurrencyClone;
      render("swap-currencies");
      break;
    
    default:
      console.log("Sorry, the exchange cannot be processed");
  }

  calcFactor();
	calcCommission();
	calcReceivedAmount();
	render();
};





const clearInput = (input) => {
  const value = input.value;
  let numbersValue = "";

  for (let i = 0; i < value.length; i++) {
    let symbol = value[i];
    if (symbol === ",") symbol = ".";
    if (value[0] === "0" || value[0] === ".") numbersValue = numbersValue.substring(1);
    if (!isNaN(Number(symbol)) || symbol === ".") numbersValue += symbol;
  };

  let output = numbersValue.split(".");
  output = output.shift() + (output.length ? "." + output.join("") : "");

  input.value = output;
  return output;
};





const exchange = () => {
  if (state.givenAmount > 0) {
    const now = new Date();

    let day = now.getDate();
    if (day < 10) day = `0${day}`;

    let month = now.getMonth();
    if (month < 10) month = `0${month}`;

    let hours = now.getHours();
    if (hours < 10) hours = `0${hours}`;

    let minutes = now.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;

    const application = {
      givenAmount: state.givenAmount,
      givenCurrency: state.givenCurrency,
      receivedAmount: state.receivedAmount,
      receivedCurrency: state.receivedCurrency,
      time: `${day}.${month}.${now.getFullYear()}, ${hours}:${minutes}`
    };

    let latestApplications = JSON.parse(localStorage.getItem("latestApplications"));
    latestApplications = [...latestApplications, application];
    localStorage.setItem("latestApplications", JSON.stringify(latestApplications));

    toggleModal("open", modalExchangeSuccessText);
    
    setTimeout(() => init(), 666);
  }
};





exchangeForm.addEventListener("submit", (e) => e.preventDefault());
givenAmount.addEventListener("input", () => clearInput(givenAmount));
givenAmount.addEventListener("input", updateState);
givenCurrency.addEventListener("change", updateState);
receivedCurrency.addEventListener("change", updateState);
swapCurrenciesButton.addEventListener("click", updateState);
exchangeButton.addEventListener("click", exchange);