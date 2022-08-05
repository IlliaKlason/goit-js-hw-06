const inputLine = document.querySelector('#font-size-control')
const textChange = document.querySelector('#text')

inputLine.addEventListener('change', ({ currentTarget: { value } }) => {
   textChange.style.fontSize = `${value}px`
})
