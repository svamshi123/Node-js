// function greet(){
//     console.log("Hello World!!");
// }
// greet();
// function greet(){
//     console.log("sai vamshi");
// }

let greet = require('./util').greet;

let add = require('./util').add;

greet();
let res = add(100,200);
console.log(res);