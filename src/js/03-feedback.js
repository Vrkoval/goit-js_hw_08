const { functions } = require('lodash');

const feedbackForm = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', saveInputInLocalStorege);
feedbackForm.addEventListener('submit', onSubmitBtn);

let dataLocalKey = {};

if (localStorage.getItem(LOCAL_KEY)) {
  const localKeyName = localStorage.getItem(LOCAL_KEY);
  dataLocalKey = JSON.parse(localKeyName);
}

if (localStorage.getItem(LOCAL_KEY)) {
  if (dataLocalKey.email !== undefined) {
    feedbackForm[0].value = dataLocalKey.email;
  }

  if (dataLocalKey.message !== undefined) {
    feedbackForm[1].value = dataLocalKey.message;
  }
}

function saveInputInLocalStorege(e) {
  dataLocalKey[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataLocalKey));
}

function onSubmitBtn(e) {
  e.preventDefault();
  if (dataLocalKey.email === undefined) {
    alert;
  }

  if (dataLocalKey.email !== undefined) {
    console.log(`Email ${dataLocalKey.email}`);

    if (dataLocalKey.message !== undefined) {
      console.log(`Message ${dataLocalKey.message}`);
    }

    dataLocalKey = {};
    localStorage.removeItem(LOCAL_KEY);
    e.currentTarget.reset();
  }
}
