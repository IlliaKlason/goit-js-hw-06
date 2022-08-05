const textInput = document.querySelector('#name-input')
const textOutput = document.querySelector('#name-output')

textInput.addEventListener('input', e => {
   textOutput.textContent = textInput.value

   if (textInput.value.trim() === '') {
      textOutput.textContent = 'Anonymous'
   }
})