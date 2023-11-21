//Do the below programs in arrow functions
// a.Print odd numbers in an array

const Arr = [1, 27, 22, 40, 21, 36, 57,10,17,12,11];
function OddNumbers(array) {
    return array.filter(number => {
        return number % 2 !== 0;
    });
}
console.log(OddNumbers(Arr));

// b.Convert all the strings to title caps in a string array

function titleCaps(str) {
    return str.split(' ').map((word) => {
        return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
}

console.log(titleCaps("hello everyone welcome to the new world"));

// c.Sum of all numbers in an array

let arrNum = [1, 2, 3, 4, 5, 6, 7,];
let sumOfNum = 0;
arrNum.forEach(value => {
    sumOfNo += value;
});
console.log(sumOfNum);

// d.Return all the prime numbers in an array

let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15]
function findPrime(Array) {
    Array = Array.filter((Numbers) => {
        for (var i = 2; i <= Math.sqrt(Numbers); i++) {
            if (Numbers % i === 0) {
                return false;
            }
        }
        return true;
    });
    console.log(Array);
}
findPrime(Numbers);

// e.Return all the palindromes in an array

const palinWords = (words) =>
    words.filter((word) =>
        word.split("").reverse().join("") === word
    );
console.log(palinWords(["abc", "mom", "madam", "1001","tat"]));