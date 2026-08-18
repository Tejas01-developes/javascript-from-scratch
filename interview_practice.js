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


// const person={
//   name:'tejas',
//  [ "tejas age"]:21
// }

// let city=person;
// city["tejas age"]="vadodara"
// // city="vadodara"
// // person.city="vadodara"

// console.log(city)


// const name = 'Lydia Hallie';

// console.log(!typeof name === 'object');
// console.log(!typeof name === 'string');

// function getName(name) {
//   const hasName = name
//   console.log(hasName)
// }

// getName("tejas")

// const getList = ([x, ...y]) => [x, y]
// const getUser = user => ({ name: user.name, age: user.age })

// const list = [1, 2, 3, 4]
// const user = { name: "Lydia", age: 21 }

// console.log(getList(list))
// console.log(getUser(user))

// index.js
// console.log('running index.js');
// import { sum } from './sum.js';
// console.log(sum(1, 2));

// // sum.js
// console.log('running sum.js');
// export const sum = (a, b) => a + b;


// const info = {
//   [Symbol('a')]: 'b',
// };

// console.log(info)
// console.log(Object.keys(info))

// const a=[1,2,3,4]


// for(var i=0; i < 8; i++){
//   a.push(i)
// }
// console.log(a)


// const obj1={
// name:"Tejas"
// }

// function adddetail(){
//  const obj2={obj1,age:21}
//  console.log(obj2)
// }
// adddetail()
// obj1()

// obj1=()=>{
//   let name="tejas"
//   console.log(name)
// }


// function obj1(name){
//  this.name=name
//  console.log(this.name)
// }

// const define=new obj1("tejas")
// console.log(typeof define)

// let obj={name:"tejas"}

// const member=[obj]
// obj.name="Pinal"
// console.log(member)


// function compareMembers(person1, person2 = person) {
//   if (person1 !== person2) {
//     console.log('Not the same!');
//   } else {
//     console.log('They are the same!');
//   }
// }

// const person = { name: 'Lydia' };
// // const person2p="Lydia"
// compareMembers(person,person2p);


// function sumValues(x, y, z) {
//    const sum=x + y + z;
//    console.log(sum)
// }

// sumValues(...[1,2,3])


const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};

console.log(mouse[bird["size"]])