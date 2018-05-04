
var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    },
];


var cardsInPlay = [];

var playerScore = 0;

var checkForMatch = function () {

    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
        playerScore = playerScore + 2;
        document.getElementsByTagName("score")[0].innerHTML = playerScore;
    }
    else {
        alert("Sorry, try again.");
        playerScore = playerScore - 2;
        if (playerScore<0){playerScore=0}
        document.getElementsByTagName("score")[0].innerHTML = playerScore;
    }

};


var flipCard = function () {

    var cardId = this.getAttribute("data-id");

    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);

    this.setAttribute("src", cards[cardId].cardImage);

    if (cardsInPlay.length === 2 || cardsInPlay.length === 4) {
        checkForMatch();
    }
};



var createBoard = function () {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    }
};

var resetButton = function () {
    cardsInPlay = [];

    for (var i = 0; i < 4; i++) {
        document.getElementsByTagName("img")[i].setAttribute("src", "images/back.png");
    }
};

createBoard();

document.getElementById("reset").addEventListener("click", resetButton);
