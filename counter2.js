/* 
counter:
  increment
  decrement
  reset
*/
// 1. function 
// 2. arrow 
// 3. class 

console.log('============= TRADITIONAL FUNCTION STYLE ==============')
const createCounter = function(n) {
  let count = n;
  function increment(){
    return ++count;
  }

  function decrement(){
    return --count;
  }
  function reset(){
    return count = n
  }
  return {
    increment, decrement, reset
  }
}
const counter = createCounter(20);
console.log(counter.increment()); // 21
console.log(counter.increment()); // 22
console.log(counter.decrement()); // 21
console.log(counter.reset()) // 20

console.log('============= ARROW FUNCTION STYLE==============')

const createArrowCounter = (n) => {
  let count = n;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => count = n
  }
}

const arrowCounter = createArrowCounter(20);
console.log(arrowCounter.increment()); // 21
console.log(arrowCounter.increment()); // 22
console.log(arrowCounter.decrement()); // 21
console.log(arrowCounter.reset()) // 20

console.log('============= CLASS BASED ==============')

class ClassCounter{
  constructor(n){
    this.n = n;
    this.count = n;
  }

  increment(){
    return ++this.count;
  }
  decrement(){
    return --this.count;
  }
  reset(){
    return this.count = this.n;
  }
}

const classCounter = new ClassCounter(20);
console.log(classCounter.increment()); // 21
console.log(classCounter.increment()); // 22
console.log(classCounter.decrement()); // 21
console.log(classCounter.reset()) // 20
