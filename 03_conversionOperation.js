let score = "33abc";

console.log(typeof score); // string
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isloggedIn = true;

let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn); // true

let someNumber = 0;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber); // string


