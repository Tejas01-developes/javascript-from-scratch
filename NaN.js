// in older way there was the bug 

isNaN(NaN); // true but in string like :-

isNaN("Hello"); // true how ?

// The engine tried to coerce "Hello" into a number (Number("Hello")), which resulted in NaN. It then checked that result and said, "Yes, that is NaN." It gives you false positives for strings, objects, and undefined variables.

var res=Number.isNaN({})  // return false as this is not the number
var res=Number.isNaN("hello") // return false as this is not the number
const res=Number.isNaN(undefined) // return false as this is not the number
const res=Number.isNaN(NaN) //true as NaN is number type so true
console.log(res)