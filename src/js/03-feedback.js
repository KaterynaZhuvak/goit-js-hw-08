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

function saveInfo() {
  let info = {
    email: '',
    message: '',
  };
  info.email = form.elements.email.value;
  info.message = form.elements.message.value;
  localStorage.setItem('feedbackFormState', JSON.stringify(info));
}

form.addEventListener('change', throttle(saveInfo, 500));

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
  localStorage.removeItem('feedbackFormState');
});
