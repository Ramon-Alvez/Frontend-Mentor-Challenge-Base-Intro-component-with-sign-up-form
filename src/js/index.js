const inputs = document.querySelectorAll('input.required')
const emptyErrorMessages = document.querySelectorAll('span.empty-error')
const regexEmailMessage = document.querySelector('span.regex-error').classList
const form = document.getElementById('form')
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function addError(index) {
    inputs[index].classList.add('invalid')
    emptyErrorMessages[index].classList.add('show')
}
function removeError(index) {
    inputs[index].classList.remove('invalid')
    emptyErrorMessages[index].classList.remove('show')
}

function emailRegexTest() {
    if (inputs[2].value !== '') {
        if (!emailRegex.test(inputs[2].value)) {
            inputs[2].classList.add('invalid')
            regexEmailMessage.add('show')
        }
        else {
            inputs[2].classList.remove('invalid')
            regexEmailMessage.remove('show')
        }
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    inputs.forEach((input, index) => {
        if (input.value === '') addError(index)
        else removeError(index)
    });
    emailRegexTest()
})