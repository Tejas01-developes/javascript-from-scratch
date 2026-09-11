class p1{
   constructor(name){
    this.name=name
   }
}

class p2 extends p1{
    constructor(n){
    super(n)
    }
    age=21
}

const p=new p2("tejas")
console.log(p.name)