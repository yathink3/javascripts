/********************************************************************************************************************
 * @Execution : default node : cmd> extendedDeckOfCards.js
 * @Purpose : to study objectOriented programs
 * @description: Extend the DeckOfCards program to create a Player Object having Deck of Cards, and having ability to Sort by Rank and maintain the cards in a Queue implemented using Linked List.
 *               Do not use any Collection Library.Further the Player are also arranged in Queue.Finally Print the Player and the Cards received by each Player.
 * @overview: extended DeckOfCards
 * @author : yathin k <yathink3@gmail.com>
 * @version : 1.0
 * @since : 29-july-2019
 *******************************************************************************************************************/


//importing queue
let queue = require('./utility/queue');
//importing  deckOfCardsManagement
let deck = require('./utility/deckOfCardsManagement');
//collecting cards and shuffled
cards = deck.shuffle(deck.getCards());
//cards are distributed in queue in 4X9
console.log(deck.distributeInQueue(cards, 4, 9, queue).getArray());