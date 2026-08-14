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


// function getinfo(one,two,three){
// console.log(one)
// console.log(two)
// console.log(three)
// }
// const person="Tejas"
// const age=21
// getinfo `age of ${person} ${age}`


// const teams = [
//   { name: 'Team 1', members: ['Paul', 'Lisa'] },
//   { name: 'Team 2', members: ['Laura', 'Tim'] },
// ];

// function* getMembers(members) {
//   for (let i = 0; i < members.length; i++) {
//     yield members[i];
//   }
// }

// function* getTeams(teams) {
//   for (let i = 0; i < teams.length; i++) {
//     // ✨ SOMETHING IS MISSING HERE ✨
//   }
// }

// const obj = getTeams(teams);
// obj.next(); // { value: "Paul", done: false }
// obj.next(); // { value: "Lisa", done: false }