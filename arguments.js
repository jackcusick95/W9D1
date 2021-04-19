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


function curriedSum(numArgs) {
  let numbers = [];
  let sum = 0;

  return function _curriedSum(num) {
    numbers.push(num);
    sum += num;
    if (numbers.length === numArgs) {
      return console.log(sum);
    }
    return _curriedSum;
  };
}


// function curriedSum(numArgs) {
//   let numbers = [];

//   return function _curriedSum(num) {
//     numbers.push(num);
//     if (numbers.length === numArgs) {
//       numbers.sum
//       return console.log(sum);
//     };
// };
// }


Function.prototype.waitArgs = function (context, numArgs){
  let funArgs = [];
  let func = this;
  // count = 0

  return function (arg) {
    if (numArgs === funArgs.length+1) {
      funArgs.push(arg);
      return func.apply(context, funArgs)
    } else {
      funArgs.push(arg);
      // count += 1;
    };
  };

}
