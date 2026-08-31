var name = "Doraemon";
var name1 = "Nobita";
var name2 = "Suzuka";
var name3 = "Sunio";

console.log(name1);
console.log(name2);


console.log(name1 + name2);// string concatination
console.log(name1[3]);
console.log(name2[3]);

console.log(name2.length)// string length   

const gameName = new String('Doraemon')

console.log(gameName[5]);
console.log(gameName.__proto__);

// Define a string variable 
let A = 'mind power soul';

// Use the slice() method to extract a substring
let b = A.slice(0, 5); //slice(start, end) start at starting index and end at before ending  index
let c = A.substring(6, 9);
let d = A.slice(10);

// Output the value of variable
console.log(b);
console.log(c);
console.log(d);

let str = "mind power soul";

let part = str.replace("power", "strength"); // replace(old, new)
console.log(part);

console.log(str.toUpperCase()); // convert to uppercase
console.log(str.toLowerCase()); // convert to lowercase 
