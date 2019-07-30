//creating rank array and stored based on their rank
let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
//shuffle will shuffle the data based on random no generated
shuffle = (array) => array.sort(() => Math.random() - 0.5)
//getcards will return the entire 52 cards 
getCards = () => {
    let suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
    let cards = [];
    rank.forEach(ranks => suit.forEach(suits => cards.push(ranks + " of " + suits)))
    return cards;
}
//distributeinqueue will distribute the cards in queue format
distributeInQueue = (cards, n, k = parseInt(52 / n) + 1, format) => {
    try {
        let person = new format();
        for (i = 0; i < n; i++) {
            let single = new format();
            for (j = i; j < i + n * k && j < 52; j = j + n)
                single.insert(cards[j]);
            single.sort(rank);
            person.insert(single.getArray());
        }
        return person;
    } catch (e) {
        return "cards are out of bound"
    }

}
//distributeinarray will distribute the element in array
distributeInArray = (cards, n, k = parseInt(52 / n) + 1) => {
    try {
        let distArray = [];
        for (i = 0; i < n; i++) {
            let person = [];
            for (j = i; j < i + n * k && j < 52; j = j + n)
                person.push(cards[j])
            distArray.push(person);
        }
        return distArray;
    } catch (e) {
        return "cards are out of bound"
    }
}

//exporting the functions
module.exports={shuffle,getCards,distributeInArray,distributeInQueue}