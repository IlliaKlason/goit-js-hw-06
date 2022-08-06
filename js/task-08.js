const form = document.querySelector(".login-form");
const inputEmail = document.querySelector("[type = 'email']");
const inputPassword = document.querySelector("[type = 'password']");


form.addEventListener('submit', submit)

function submit(elements) {
   elements.preventDefault()
   // const {
   //    elements: { email, password },
   // } = elements.target

   if (inputEmail.value === '' || inputPassword.value === '') {
      return alert('All fields must be filled!')
   }
   const userInfo = {
      email: inputEmail.value,
      password: inputPassword.value
   }

   console.log(userInfo)
   elements.target.reset()
}