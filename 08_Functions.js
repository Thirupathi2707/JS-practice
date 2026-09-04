function greet() {
    return "Hello World!";
}
console.log(greet());

//Passing an argument

function greet1(name) {
    console.log("Hello " + name)
}

greet1("Thiru")

//adding

function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20));

//Subtracting

function sub(c, d) {
    return c - d;
}

console.log(sub(30, 20));

//Checking Even or Odd

function evenOrOdd(e) {
    if (e % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
console.log(evenOrOdd(7));

console.log(evenOrOdd(2));

//square

function square(f) {
    return f * f;
}

console.log(square(5));
console.log(square(15));

//maximum number

function maxNumber(g, h) {
    if (g > h) {
        return g;
    }
    else {
        return h;
    }
}
console.log(maxNumber(18, 10))

//counting characters
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("hello"));

//reversing a string
function reverseString(str1) {
    let strReverse = "";
    for (let i = str1.length - 1; i >= 0; i--) {
        strReverse += str1[i];
    }
    return strReverse;
}


console.log(reverseString("hello"));

function countVowels(str2) {
     let count = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] == 'a' || str2[i] == 'e' || str2[i] == 'i' || str2[i] == 'o' || str2[i] == 'u') {
            count++;
        }
    }
     return count;
}

console.log(countVowels("javascript")); 