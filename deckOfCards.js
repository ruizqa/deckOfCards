class Card{
    constructor(suit,string,num){
        this.suit= suit;
        this.string=string;
        this.num=num;
    }

    show(){
        console.log(`Card ${this.num} (${this.string}) ${this.suit}`)
    }

}

let suits=['Hearts', 'Clubs', 'Diamonds', 'Spades']
let cards={
    1:'One',
    2:'Two',
    3:'Three',
    4:'Four',
    5:'Five',
    6:'Six',
    7:'Seven',
    8:'Eight',
    9:'Nine',
    10:'Ten',
    11:'Jack',
    12:'Queen',
    13:'King'
}


list_cards=[]


class Deck{
    constructor(){
        this.cards= []
    }

    addCard(card){
        if(card instanceof Card){
            this.cards.push(card)
        }
    }

    reset(){
        this.cards.length =0;
        for(let i=0;i<suits.length;i++){
            for(number in cards){
                this.addCard(new Card(suits[i], cards[number],number))
            }
        }
    }

    shuffle() {
        let m = this.cards.length, t, i;

        while (m) {
        i = Math.floor(Math.random() * m--);
        t = this.cards[m];
        this.cards[m] = this.cards[i];
        this.cards[i] = t;
        }

    }

    deal(){
        let random = Math.floor(Math.random()*this.cards.length)
        let card = this.cards[random]
        this.cards.splice(random,1);
        return card;
    }




}


class Player{
    constructor(name){
        this.name = name;
        this.hand=[];
    }

    takeCard(deck){
        if(deck instanceof Deck){
            this.hand.add(deck.deal())
        }
    }

    discard(index){
        let card = this.hand[index]
        this.cards.splice(random,1);
    }

}