// when we start the programm and run the code it fist register all the variable so it register the let and const assigned variables in the memory

// and then it locks it means it does not allow to manupliate it befor it is initialized 
// and if we call it before it is inetialized  it is called the temporal dead zone  

// example code:- 
{ 
    // --- PHASE 1 (Memory Scan) HAPPENED BEFORE THIS LINE ---
    // JS knows 'a' exists in memory, but it is locked.
    // 🛑 TDZ STARTS HERE at the top of the block.
    
    console.log("Doing other things..."); // TDZ is still active for 'a'
    
    // console.log(a); <-- If you uncomment this, it crashes.
    
    let a = 10; // 🟢 TDZ ENDS HERE. The memory is unlocked and '10' is saved.
    
    console.log(a); // Works perfectly! Prints 10.
  }