import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let info = {};

initForm();

form.addEventListener('change', throttle(event => {
    info[event.target.name] = event.target.value;
    localStorage.setItem('feedbackFormState', JSON.stringify(info))
}, 500))


form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    formData.forEach((value, name) => console.log(value, name));

    info = {};
    localStorage.removeItem('feedbackFormState');
});
   

function initForm() {
    let parseForm = localStorage.getItem('feedbackFormState');
    if (parseForm) {
        parseForm = JSON.parse(parseForm);
        console.log(parseForm);
        Object.entries(parseForm).forEach(([name, value]) => {
            info[name] = value;
            form.elements[name].value = value;
        })
    }
}
