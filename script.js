const cardsContainer = document.querySelector('.board')
const imgs = [
  'red',
  'blue',
  'yellow',
  'green',
  'purple',
  'teal',
  'pink',
  'orange'
]
const imgsPickList = [...imgs, ...imgs]
let shuffledList = []
const boxCount = imgsPickList.length
const resetButtonEl = document.querySelector('#resetButton')
const cards = document.querySelectorAll('.cardImgs')
let score = 0
const scoreDisplay = document.querySelector('.score')

const init = () => {
  score = 0
  result.innerHTML = ''
  shuffledList = []
  scoreDisplay.innerText = `Score: ${score}`
  //build the tile
  for (let i = 0; i < boxCount; i++) {
    const randomIndex = Math.floor(Math.random() * imgsPickList.length) //picks a random index from the array
    const color = imgsPickList[randomIndex] //we get the color from the index
    imgsPickList.splice(randomIndex, 1)
    console.log(imgsPickList)
    shuffledList.push(color)
  }
  console.log(shuffledList)

  creatCards()
}

//to loop through the list
const cardElements = []
const cardImgs = []
const flippedCards = []

function creatCards() {
  if (cards) {
    cardsContainer.innerHTML = ''
  }
  for (let i = 0; i < shuffledList.length; i++) {
    // create card
    const cardEl = document.createElement('div')
    cardEl.classList.add('card')
    const img = document.createElement('img')
    cardEl.append(img)
    // add card to cards array
    cardElements.push(cardEl)
    // add image filename path to cardImages array
    cardImgs.push(shuffledList[i])
    cardsContainer.append(cardEl)
  }

  //the event lister

  for (let i = 0; i < cardElements.length; i++) {
    cardElements[i].addEventListener('click', () => flipCards(i))
  }
}

function flipCards(index) {
  if (flippedCards.length === 2) return
  flippedCards.push(index)
  // console.log(flippedCards)
  const img = cardImgs[index]
  event.target.setAttribute('style', `background-color: ${img}`) // event.target finds the HTML element <div> we need to style

  if (flippedCards.length === 2) {
    // Disable cards
    let card1 = cardElements[flippedCards[0]]
    console.log(card1.getAttribute('style'))
    let card2 = cardElements[flippedCards[1]]
    console.log(card2.getAttribute('style'))
    if (card1.getAttribute('style') === card2.getAttribute('style')) {
      console.log('match')
      score++
      scoreDisplay.innerText = `Score: ${score}`
      flippedCards.length = 0 //it resets the indexes so we move to getting another two cards macthed
    } else {
      console.log('not a match')
      setTimeout(() => {
        card1.removeAttribute('style') //so it removes the style
        card2.removeAttribute('style')
        flippedCards.length = 0
      }, 1000) // the 1000 is to delay the cards flipping back
    }
  }

  checkForWinner()
}

const checkForWinner = () => {
  if (score >= imgs.length) {
    winner = true
    result.innerHTML = 'YOU WON!!!'
  }
}

resetButtonEl.addEventListener('click', init)
init()

//i let the colors show i the begggining
//i show the score
