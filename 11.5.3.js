function sum(firstNum) {
  return function (secondNum) {
    return firstNum + secondNum;
  };
}

const result = sum(6);
console.log(result(2));