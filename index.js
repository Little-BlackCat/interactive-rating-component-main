const numberList = document.querySelectorAll('.number')
const btmSubmit = document.querySelector('button')
const main = document.querySelector('main')
const section = document.querySelector('section')
const span = document.querySelector('span')

console.log(numberList)

let eventCount = 0;
// Function to handle the click event
function handleClick() {
  eventCount++;

  // Show the hidden element
  const hiddenElement = document.querySelector('span');
  hiddenElement.innerText = eventCount
}

numberList.forEach(function(element) {
  element.addEventListener('click', handleClick)
  element.addEventListener('click', () => {
    element.classList.remove('number-noclick')
    element.classList.add('number-click')
  })
})

const click = document.querySelectorAll('number-click')
console.log(click)

btmSubmit.addEventListener('click', () => { 
  main.classList.add('hidden')
  section.classList.remove('hidden')
})

section.addEventListener('click', ()=> {
  section.classList.add('hidden')
  main.classList.remove('hidden')
  eventCount = 0

  for (let number of numberList) {
    number.classList.add('number-noclick')
    number.classList.remove('number-click')
  }
})


