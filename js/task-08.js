const form = document.querySelector(".login-form");
//  let inputEmail = document.querySelector("[type = 'email']");
// let inputPassword = document.querySelector("[type = 'password']");
form.addEventListener('submit', submit)

function submit(elements) {
   elements.preventDefault()
   const {
      elements: { email, password },
   } = elements.target

   if (email.value === '' || password.value === '') {
      return alert('Привет Илья')
   }
   const userInfo = {
      email: email.value,
      password: password.value
   }

   console.log(userInfo)
   elements.target.reset()
}