//Do the below programs in anonymous function & IIFE

// a.Print odd numbers in an array

(function (Array) {
    for (var i = 0; i < Array.length; i++) {
        if (Array[i] % 2 != 0) {
            console.log(Array[i])
        }
    }
})([1, 2, 3, 4])

// b.Convert all the strings to title caps in a string array

(function (str) {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
})("convert all the strings to title caps in a string array");

// c.Sum of all numbers in an array

(function (Array) {
    var sum = 0;
    for (var i = 0; i < Array.length; i++) {
        sum = sum + Array[i];
    }
    return sum;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//d. Return all the prime numbers in an array 

(function (Array) {
    myArray = Array.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    });
    console.log(Array);
})([1, 2, 3, 4, 6, 7,10,15,19])

// e.Return all the palindromes in an array

let Inp=["12321","abdfh","12345","75657"];
(function(Input){
    let Palindromes=[];
    for(let i in Input){
        let RevJoin=Input[i].split("").reverse().join("");
        if(Input[i]===RevJoin){
            Palindromes.push(Input[i]);
        }
    }
    console.log(Palindromes);
})(Inp);

// f.Return median of two sorted arrays of the same size

var Arr1=[1,4,6,8,9];
var Arr2=[3,5,2,7,10];
if(Arr1.length===Arr2.length){
    var Arr=[...Arr1,...Arr2]
    var Input=Arr.sort((a,b)=> a-b);
    (function(InArr){
        var Len=InArr.length;
        var LenMid1= Len/2;
        var LenMid2= (LenMid1-1);
        if(Len%2===0){
            console.log((InArr[LenMid1]+InArr[LenMid2])/2) ;
        }
        
    })(Input);
}else{
    console.log("Two Array sizes are different");
}

// g.Remove duplicates from an array

(function (Array) {
    let duplicateValues = [...new Set(Array)];
    console.log(duplicateValues);
})(['9', '6', '8', '4', '7', '4'])

// h.Rotate an array by k times
let InputArr=[1,2,2,4,6] ;
(function(e,k){
    k=k%e.length;
    let Remove=e.splice(-k);
    e.unshift(...Remove);
     console.log(e);
    
 })(InputArr,3);