// Validate email input and show appropriate alert / warning
const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
}

const removeAlert = () => {
    const errorImg = document.querySelector('#error-img');
    const errorMsg = document.querySelector('#error-message');

    setTimeout(() => {
        errorImg.remove();
        errorMsg.remove()}, 3000);
    
}

const clearField = () => {
    document.querySelector('#email-field').value = '';
}

const validation = () => {
    const errorImg = document.querySelector('#error-img');
    const errorMsg = document.querySelector('#error-message');
    const inputMessage = document.querySelector('.input-message');
    const email = document.querySelector('#email-field').value;

    if (email === '' || !validate(email)) {
        errorMsg.classList.remove('hide');
        errorImg.classList.add('invalid');
        inputMessage.classList.add('invalid');
        clearField();
        removeAlert();
    } else {
        inputMessage.classList.add('message-success');
        inputMessage.textContent = 'Your email address has been saved!';
        errorMsg.classList.remove('hide');
        clearField();
    }
    
}

document.querySelector('#submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    validation();
});