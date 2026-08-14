// 1.
//  const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
//   });
  
//   const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
//   });
  
//   Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

  // op "two"


//   2.

// function* generatorOne() {
//     yield ['a', 'b', 'c'];
//   }
  
//   function* generatorTwo() {
//     yield* ['a', 'b', 'c'];
//   }
  
//   const one = generatorOne();
//   const two = generatorTwo();
  
//   console.log(one.next().value);
//   console.log(two.next().value);

//   op ['a', 'b', 'c'] and a


// const myPromise = Promise.resolve(1);

// (async () => {
//   try {
//     console.log(await myPromise);
//   } catch {
//     throw new Error(`Oops didn't work`);
//   } finally {
//     console.log('Oh finally!');
//   }
// })();


// var a="tejas"
// age=21

// console.log(delete a)
// console.log(delete age)


// function getItems(fruitList, args, ...favoriteFruit) {
//     return [...fruitList, args, favoriteFruit]
//   }
  
//   console.log(getItems(["banana", "apple"], "pear", "orange"))


// const user={
// emaill:"t@gmail.com",
// update:function(email){
//     this.emaill=email
// }
// }

// user.update("tt@gmail.com")

// console.log(user.emaill)


// [1, 2, 3, 4].reduce((x, y) => console.log(x, y));

// console.log('i want pizza'[0])


function getinfo(one,two,three){
console.log(one)
console.log(two)
console.log(three)
}
const person="Tejas"
const age=21
getinfo `age of ${person} ${age}`