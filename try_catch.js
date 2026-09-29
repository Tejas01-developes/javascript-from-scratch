const a=24
try{
if(a < 21){
    return console.log(`age is ${a}`);
}
}catch(err){
throw new Error(err)
}finally{
console.log("finally executed")
}