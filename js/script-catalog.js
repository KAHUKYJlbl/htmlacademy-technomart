// in cart

let popupCartAdded = document.querySelector('.pop-up__cart_added');
let popupCartAddedButton = document.querySelectorAll('.in-cart');
let popupCartAddedX = popupCartAdded.querySelectorAll('button');
console.log(popupCartAddedX);

let addToCart = function(button) {
  button.addEventListener('click', function() {
    popupCartAdded.classList.remove('pop-up');
  });
};

for (i=0; i < popupCartAddedButton.length; i++) {
  addToCart(popupCartAddedButton[i]);
};


for (i=0; i < popupCartAddedX.length; i++) {
  popupCartAddedX[i].addEventListener('click', function() {
    popupCartAdded.classList.add('pop-up');
  });
};

document.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    popupCartAdded.classList.add('pop-up');
  }
});
