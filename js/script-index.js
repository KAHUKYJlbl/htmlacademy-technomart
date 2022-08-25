// __pop-up message__

let popupMessage = document.querySelector('.pop-up__message');
let popupMessageButton = document.querySelector('.pop-up__message-button');
let popupMessageX = popupMessage.querySelector('.pop-up__message-x-button');

popupMessageButton.addEventListener('click', function () {
  popupMessage.classList.remove('pop-up');
});

popupMessageX.addEventListener('click', function () {
  popupMessage.classList.add('pop-up');
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    popupMessage.classList.add('pop-up');
  }
});

// __pop-up map__

let popupMap = document.querySelector('.pop-up__map');
let popupMapButton = document.querySelector('.pop-up__map-button');
let popupMapX = popupMap.querySelector('.pop-up__map-x-button');

popupMapButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.remove('pop-up');
});

popupMapX.addEventListener('click', function () {
  popupMap.classList.add('pop-up');
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    popupMap.classList.add('pop-up');
  }
});

// __promo slider__

let promoSlides = document.querySelectorAll('.promo__slider-item');
let controlButtons = document.querySelectorAll('.slider-controls__button');
let buttonForward = document.querySelector('.slider-controls__button-forward');
let buttonBackward = document.querySelector('.slider-controls__button-backward');

// если вдруг в разметке .slide-current не первый
let slideNumber;
for (i = 0; i < promoSlides.length; i++) {
  if (promoSlides[i].classList.contains('slide-current')) {
    slideNumber = i;
  };
};
controlButtons[slideNumber].classList.add('slider-controls__button_current');

// --ЗАМЫКАНИЕ-- переключаем слайды круглыми кнопочками
let controlButtonClick = function (buttonNumber) {
  controlButtons[buttonNumber].addEventListener('click', function () {
    promoSlides[slideNumber].classList.remove('slide-current');
    controlButtons[slideNumber].classList.remove('slider-controls__button_current');
    promoSlides[buttonNumber].classList.add('slide-current');
    controlButtons[buttonNumber].classList.add('slider-controls__button_current');
    slideNumber = buttonNumber;
    console.log(slideNumber);
  });
};

for (i = 0; i < controlButtons.length; i++) {
  controlButtonClick(i);
};

// переключаем слайды "стрелочкой назад"
buttonBackward.addEventListener('click', function () {
  promoSlides[slideNumber].classList.remove('slide-current');
  controlButtons[slideNumber].classList.remove('slider-controls__button_current');
  if (slideNumber === 0) {
    slideNumber = promoSlides.length - 1;
  } else {
    slideNumber--;
  };
  promoSlides[slideNumber].classList.add('slide-current');
  controlButtons[slideNumber].classList.add('slider-controls__button_current');
});

// переключаем слайды "стрелочкой вперед"
buttonForward.addEventListener('click', function () {
  promoSlides[slideNumber].classList.remove('slide-current');
  controlButtons[slideNumber].classList.remove('slider-controls__button_current');
  if (slideNumber === promoSlides.length - 1) {
    slideNumber = 0;
  } else {
    slideNumber++;
  };
  promoSlides[slideNumber].classList.add('slide-current');
  controlButtons[slideNumber].classList.add('slider-controls__button_current');
});

// __services__

let servicesButtons = document.querySelectorAll('.services__button');
console.log(servicesButtons);
let services = document.querySelectorAll('.services__item');
console.log(services);


// если вдруг в разметке .services__item_current не первый
let serviceNumber;
for (i = 0; i < servicesButtons.length; i++) {
  if (servicesButtons[i].classList.contains('services__button_current')) {
    serviceNumber = i;
  };
};
services[serviceNumber].classList.add('services__item_current');

// --ЗАМЫКАНИЕ-- переключаем сервисы
let serviceButtonClick = function (buttonNumber) {
  servicesButtons[buttonNumber].addEventListener('click', function () {
    services[serviceNumber].classList.remove('services__item_current');
    servicesButtons[serviceNumber].classList.remove('services__button_current');

    services[buttonNumber].classList.add('services__item_current');
    servicesButtons[buttonNumber].classList.add('services__button_current');

    serviceNumber = buttonNumber;
    console.log(serviceNumber);
  });
};

for (i = 0; i < servicesButtons.length; i++) {
  serviceButtonClick(i);
};
