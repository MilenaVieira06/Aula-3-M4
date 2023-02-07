const prompt = require("prompt-sync");
const input = prompt();

let myArray = [];

myArray.push(input("Digite uma palavra: "));
myArray.push(input("Digite outra palavra: "));
myArray.push(input("Digite mais uma palavra: "));
console.log(myArray.sort());
