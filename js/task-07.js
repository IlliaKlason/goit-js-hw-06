const inputLine = document.querySelector('#font-size-control')
const abracadabra = document.querySelector('#text')

inputLine.addEventListener('change', ({ currentTarget: { value } }) => {
   abracadabra.style.fontSize = `${value}px`
})