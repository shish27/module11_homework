var arr = [0, 0, 2, 3, 4, 5, 6];

var resultZ = 0;
var oddN = 0;
var evenN = 0;

function analysisArr() {
  for (var i = 0; i < arr.length, typeof arr[i] === "number" && !isNaN(arr[i]); i++) {
  //if (typeof arr[i] === "number" && !isNaN(arr[i]))  {
    if (arr[i] === 0) {resultZ ++}
    else if (arr[i] % 2 === 0) {evenN++} 
    else if (arr[i] % 2 !== 0) {oddN++}
  }


console.log('Нулевых значений: ' + resultZ);
console.log('Нечетных значений: ' + oddN);
console.log('Четных значений: ' + evenN);
}

console.log(analysisArr());