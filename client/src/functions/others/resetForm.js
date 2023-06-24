const selector = document.querySelector.bind(document)

const resetForm = _ => {
    selector('#name') && (selector('#name').value = '')
    selector('#email').value = ''
    selector('#password').value = ''
    selector('#rePassword') && (selector('#rePassword').value = '')
}

export default resetForm