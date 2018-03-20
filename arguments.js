function sum() {
  let resultSum = 0;

  for (let i = 0; i < arguments.length; i++) {
    resultSum += arguments[i];
  }

  return resultSum;
}

function sumRest(...values) {

  return values.reduce((sumRestResult, el) => {
     return sumRestResult + el;
  });
}

// simple myBind with no args
Function.prototype.myBind = function (ctx, ...otherArgs) {
  return (...callTimeArgs) => this.apply(ctx, otherArgs.concat(callTimeArgs));
};

Function.prototype.myBind = function (ctx) {
  const bindArgs = Array.from(arguments).slice(1);

  const fn = this;

  return function () {
    const callArgs = Array.from(arguments);

    fn.apply(ctx, bindArgs.concat(callArgs));
  };
};

function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((totalSum, el) => totalSum + el);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

curriedSum(3)(1)(2)(3);

let sum = curriedSum(3);
sum(1);



Function.prototype.curry = function(numArgs) {
  let args = [];
  const fn = this;

  return function _curried(arg) {
    args.push(arg);
    console.log(args);

    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return Function.prototype.curry();
    }
  };

};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
sumThree.curry(3)(4)(20)(6); // == 30
