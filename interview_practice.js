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


