// Falsely
// there are 7 condiitions of the falsely values like 
// - false 
// - 0 and -0
// - 0n n means BigInt
// - ""
// - null    The intentional absence of a value.
// - undefined
// -NaN

// eg:-
if (0) {
    console.log("This will NEVER run because 0 is falsy.");
}

if ("") {
    console.log("This will NEVER run because an empty string is falsy.");
}

// truthy values:-

// the values which does not fall under the falsely are all truthy

