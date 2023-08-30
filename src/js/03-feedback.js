import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

function checkStorage() {
  const email = document.getElementById('email');
  const message = document.getElementById('message');
 const parseForm = localStorage.getItem('feedbackFormState');
    if (localStorage) {
     
        const parsedData = JSON.parse(parseForm);
      email.value = parsedData.email;
      message.value = parsedData.message;
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
      // Object.entries(parseForm).forEach(([name, value]) => {
      //     info[name] = value;
      //     form.elements[name].value = value;
      // })
    }
    event.currentTarget.reset();
  }

  // const formData = new FormData(form);
  // formData.forEach((value, name) => console.log(value, name));

  info = {};
  localStorage.removeItem('feedbackFormState');
});

// function initForm() {
//     let parseForm = localStorage.getItem('feedbackFormState');
//     if (parseForm) {
//         parseForm = JSON.parse(parseForm);
//         console.log(parseForm);
//         Object.entries(parseForm).forEach(([name, value]) => {
//             info[name] = value;
//             form.elements[name].value = value;
//         })
//     }
// }
