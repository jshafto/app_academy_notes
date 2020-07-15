// parts of class
// name
// constructor: used to initialize an instance of the class
// used to communicate required data for initialization
// instance variable: the state of the thing
// instance methods: how the world interacts with the thing
//    accessors: get data from object
//    mutators change data of object

class Wallet {
    constructor(startAmount, cards) {
        this.balance = startAmount;
        this.cards = cards;
    }

    addMoney(amount) {
        // mutator
        this.balance += amount;
    }
    removeMoney(amount) {
        // mutator
        this.balance -= amount;
    }
    getBalance() {
        // accessor
        return this.balance;
    }
    putCardIn(card) {
        // mutator
        this.cards.push(card);
    }
    getCardOut(name) {
        // accessor
        const index = this.cards.findIndex(x => x.name === name);

        if (index === -1) return null;

        const card = this.cards[index];
        this.cards.splice(index, 1);
        return card;
    }
    getCardCount() {
        // accessor
        return this.cards.length;
    }
}


// use `new` keyword to make an instance of class

// do all objects need a class?
// no just the ones that have behavior/methods
// so cards can be a regular object
const wallet = new Wallet(101, []);
console.log(wallet.balance);
console.log(wallet.getBalance());
wallet.addMoney(100);
console.log(wallet.balance);
console.log(wallet.getBalance());
wallet.balance += 5;
console.log(wallet.balance);
console.log(wallet.getBalance())
