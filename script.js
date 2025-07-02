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
const boxCount = imgsPickList.length

//build the tile
for (let i = 0; i < boxCount; i++) {
  const randomIndex = Math.floor(Math.random() * imgsPickList.length) //picks a random index from the array
  const color = imgsPickList[randomIndex] //we get the color from the index
}

//to loop through the list
const cardElements = []
const cardImgs = []
const flippedCards = []

function creatCards() {
  for (let i = 0; i < imgsPickList.length; i++) {
    // create card
    const cardEl = document.createElement('div')
    cardEl.classList.add('card')
    const img = document.createElement('img')
    cardEl.append(img)
    // add card to cards array
    cardElements.push(cardEl)
    // add image filename path to cardImages array
    cardImgs.push(imgsPickList[i])
    cardsContainer.append(cardEl)
  }
}

function flipCards(index) {
  flippedCards.push(index)
  console.log(flippedCards)
  const img = cardImgs[index]
  event.target.setAttribute('style', `background-color: ${img}`) // event.target finds the HTML element <div> we need to style

  if (flippedCards.length === 2) {
    let card1 = cardElements[flippedCards[0]]
    console.log(card1.getAttribute('style'))
    let card2 = cardElements[flippedCards[1]]
    console.log(card2.getAttribute('style'))
    if (card1.getAttribute('style') === card2.getAttribute('style')) {
      flippedCards.length = 0 //it resets the indexes so we move to getting another two cards macthed
    } else {
      setTimeout(() => {
        card1.removeAttribute('style') //so it removes the style
        card2.removeAttribute('style')
        flippedCards.length = 0
      }, 1000) // the 1000 is to delay the cards flipping back
    }
  }
}

creatCards()
//the event lister
const cards = document.querySelectorAll('.cardImgs')

for (let i = 0; i < cardElements.length; i++) {
  cardElements[i].addEventListener('click', () => flipCards(i))
}

//toggle will help with the changing of images
//class = card flipped
