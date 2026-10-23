// const a=24
// try{
// if(a < 21){
//     return console.log(`age is ${a}`);
// }
// }catch(err){
// throw new Error(err)
// }finally{
// console.log("finally executed")
// }

// let a=10

// console.log(++a);


// console.log([] && "");

// const a=[{name:"Tejas",age:21},{name:"Jainam",age:18},{name:"Lucky",age:19},{name:"Pappu",age:20},{name:"Dhruv",age:20}]

// const map=new Map()
// for(let x of a){
//    map.set(x.name,x.age)
// }

// console.log(map);

// for(let [x,y] of map){
//     console.log(y);
// }




// for(let i=1; i<=15; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     }else if(i % 3 === 0){
//         console.log("Fizz");
//     }else if(i % 5 === 0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }


// let n=10
// let space=' '
// for(let i=0; i <= n; i++){
//     console.log(space.repeat(n - 1) + "*".repeat(2 * i + 1));
// }

// let n=2

// for(let i=1; i<=10; i++){
//     console.log(`${n}  x  ${i} = ${n*i}`)
// }

// const a=[3,6,8,4,9,0]

// a.forEach((i)=>{
// console.log(i);
// })

// const a=[3,6,8,4,9,0]

// console.log(a.findIndex);

// const a={
//     name:"tejas",
//     age:21
// }

// console.log(a["name"])

// let multiply;
// function count(n) {
//     if (n === 1) {
//         return 1;
//     }
    
// return n * count(n-1)

// }

// console.log( count(5))




// const map=new Map()


// map.set("tejas",21)
// map.set("pappu",20)
// map.set("lucky",20)
// map.set("jainam",19)



map.forEach(function(key,value){
    console.log(value,key);
})


for(let [key,value] of map){
console.log(value,key);
}



