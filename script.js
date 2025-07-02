// Variables

// Cached Elements

// Functions

// Event Listeners (DOM)

// 1. Try to get card to flip on click
// const cards = document.querySelectorAll('.card')

// cards.forEach((card) =>
//   card.addEventListener('click', () => {
//     card.style.backgroundColor = 'red'
//   })
// )

//...cards, ...cards , will allow us after to loop
//tilecount =.length helps with loop
const cardsContainer = document.querySelector('.board')
const imgs = [
  'red',
  'blue',
  'yellow',
  'green',
  'purple',
  'teal',
  'pink',
  'gold'
]
const imgsPickList = [...imgs, ...imgs]
const boxCount = imgsPickList.length

// let revealedCount = 0
// let activeTile = null
// let awaitingEndOfMove = false

//build the tile
for (let i = 0; i < boxCount; i++) {
  const randomIndex = Math.floor(Math.random() * imgsPickList.length) //picks a random index from the array
  const color = imgsPickList[randomIndex] //we get the color from the index
  console.log(color)
}
//to loop through the list
const cardElement = []
const cardImg = []

const imgEl = document.createElement('img')

//the event lister
const cards = document.querySelectorAll('.cardImg')

for (let i = 0; i < cardImg.length; i++) {
  cards[i].addEventListener('click', flipCards)
}

//toggle will help with the changing of images
//class = card flipped
