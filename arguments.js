function sum(...args) {
    let total = 0;
    return function _adder(num) {
        total += num;
        console.log(total);
    }
} 

function sum(...args) {
    let total = 0;
    args.forEach(function(num) {
        total += num;
    });
    console.log(total);
}

Function.prototype.myBind = function (ctx, ...bindargs) {
    let func = this;

    return function (...callargs) {
        return func.call(ctx, ...bindargs, callargs);
    }
};

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");