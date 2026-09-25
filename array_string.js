
// 1.two sum


// const map=new Map()

// map.set("name","tejas")

// console.log(map.get("name"))

// const a=[2,7,11,15]
// const target=9

// const map=new Map()

// for(let i=0;i <= a.length; i++){
// const needed=target - a[i]
// if(map.has(needed)){
//     console.log([map.get(needed),i]);
//     break
// }else{
//     map.set(a[i],i)
// }

// }


const prices = [7,1,5,3,6,4]

let minprise=prices[0]
let maxprofit=0

for(i=1; i < prices.length; i++){
const profit=prices[i] - minprise

if(profit > maxprofit){
maxprofit=profit
}
if(prices[i] < minprise){
    minprise=prices[i]
}

}

console.log(maxprofit)


