/********************************************************************************************************************
 * @Execution : default node : cmd> deckOfCards.js
 * @Purpose : to study objectOriented programs
 * @description: Write a Program DeckOfCards.js, to initialize deck of cards having suit("Clubs", "Diamonds", "Hearts", "Spades") & 
 *              Rank("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace").Shuffle the cards using Random method and
 *              then distribute 9 Cards to 4 Players and Print the Cards the received by the 4 Players using 2 D Array
 * @overview: DeckOfCards
 * @author : yathin k <yathink3@gmail.com>
 * @version : 1.0
 * @since : 27-july-2019
 *******************************************************************************************************************/

//importing the deckOfCardsManagement
let deck = require('./utility/deckOfCardsManagement');
//collecting cards which are shuffuled
cards = deck.shuffle(deck.getCards());
//distribute the cards in 4X9 in 2d array
console.log(deck.distributeInArray(cards, 4, 9))