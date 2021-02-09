"use strict"

document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById('form');
  form.addEventListener("submit", formSend);
})

for (let elem of document.querySelectorAll('.popap__button')) {
  elem.addEventListener('click', () => elem.closest('.popap').classList.remove('_active'))
}

function formSend(event) {
  event.preventDefault();

  let isError = false;
  let req = document.querySelectorAll('._req');

  for (let elem of req) {
    elem.classList.remove('_err');
    if (elem.type == "tel") {

      if (!isPhone(elem)) {
        isError = true;
        elem.classList.add('_err');
      }

    } else if (elem.type == "checkbox") {

      if (elem.checked == false) {
        isError = true;
        elem.classList.add('_err');
      }

    } else if (!elem.value) {
      isError = true;
      elem.classList.add('_err');
    }
  }

  if (isError) {
    document.getElementById('popap-false').classList.add('_active')
  } else {
    for (let elem of req) {
      elem.value = '';
    }
    document.getElementById('popap-true').classList.add('_active');
  }
}

function isPhone(elem) {
  return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(elem.value)
}
