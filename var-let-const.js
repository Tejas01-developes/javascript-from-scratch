var a=10
a=20

function fun(){
    console.log("1",a)
    a=50;
    console.log("2",a)
}
fun
console.log("3",a)




let=a=10
function fun1(){
    let a=20   // inside the function declared a variable is different from the outside variable a

    console.log(a)
}
console.log(a) // this will not work as let only works inside the scope like inside the same function like that
fun1()







const a=10  //here a declared is printed by outer console.log(a)
function fun2(){                                
    const a=20 //this is different from the outer const 
    console.log(a)
}                                 // js looks locally first then inside the function thta is why    const a=20  this inside function worked  although const a is declared outside also 
fun2()
console.log(a)




