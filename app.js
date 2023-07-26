document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
    {
        name: "Fries",
        img:"Images/fries.png"
    },
    {
        name:"CheeseBurger",
        img:"Images/cheeseburger.png"
    },
    {
        name:"Hotdog",
        img:"Images/hotdog.png"
    },
    {
        name:"MilkShake",
        img:"Images/milkshake.png"
    },
     {
        name:"Pizza",
        img:"Images/pizza.png"
    }, 
    {
        name:"IceCream",
        img:"Images/ice-cream.png"
    }, 
    {
        name: "Fries",
        img:"Images/fries.png"
    },
    {
        name:"CheeseBurger",
        img:"Images/cheeseburger.png"
    },
    {
        name:"Hotdog",
        img:"Images/hotdog.png"
    },
    {
        name:"MilkShake",
        img:"Images/milkshake.png"
    },
     {
        name:"Pizza",
        img:"Images/pizza.png"
    }, 
    {
        name:"IceCream",
        img:"Images/ice-cream.png"
    }, 
]


cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIDs = []
const cardsWon = []


function createBoard(){

    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'Images/blank.png')
        card.setAttribute('data-id', i)
        console.log(card, i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
function checkMatch(){

    const cards = document.querySelectorAll('img')
    const optionOneId =  cardChosenIDs[0]
    const optionTwoId = cardChosenIDs[1]

    console.log('check for match')

    if(optionOneId == optionTwoId){
        cards[optionOneId[0]].setAttribute('src', 'Images/blank.png')
        cards[optionTwoId[0]].setAttribute('src', 'Images/blank.png')
        alert('You have clicked the same image twice')
    }

    else if(cardChosen[0] == cardChosen[1]){
        alert('You found a match')
        cards[optionOneId[0]].setAttribute('src', 'Images/white.png')
        cards[optionTwoId[1]].setAttribute('src', 'Images/white.png')
        cards[optionOneId[0]].removeEventListener('click', flipCard)
        cards[optionTwoId[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)

    }
    else{
        cards[optionOneId[0]].setAttribute('src', 'Images/blank.png')
        cards[optionTwoId[0]].setAttribute('src', 'Images/blank.png')

        alert('Better Luck next time')
    }


    cardChosen = []
    cardChosenIDs = []

    resultDisplay.textContent = cardsWon.length

    if (cardsWon.length == (cardArray.length/2)){
        // const resultDisplay = document.querySelector('#result')
        resultDisplay.textContent = 'Congratulations! You have won.'
    }
}

function flipCard(){
    // console.log(cardArray)
    let cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIDs.push(cardId)
    console.log(cardChosenIDs)
    // console.log('clicked', cardId)
    console.log(cardChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.length ===2 )
{
    setTimeout(checkMatch, 500)
}
}
createBoard()

})