import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

function checkStorage() {
  if (localStorage.getItem('feedbackFormState')) {
      const parseForm = localStorage.getItem('feedbackFormState');
      const parsedData = JSON.parse(parseForm);
      form.elements.email.value = parsedData.email || '';
      form.elements.message.value = parsedData.message || '';
  }
}

checkStorage();

let info = {};

form.addEventListener(
  'change',
  throttle(event => {
    info[event.target.name] = event.target.value;
    localStorage.setItem('feedbackFormState', JSON.stringify(info));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;
  if (email.value === '' || message.value === '') {
    return alert('Please, fill in all fields!');
  } else {
    let parseForm = localStorage.getItem('feedbackFormState');
    if (parseForm) {
      parseForm = JSON.parse(parseForm);
      console.log(parseForm);
    }
    event.currentTarget.reset();
  }
  info = {};
  localStorage.removeItem('feedbackFormState');
});
