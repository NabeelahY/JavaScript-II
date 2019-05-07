// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let num = [23, 90, 190, 567, 345, 34, 85, 987, 10297, 1854, 865];

function divisibleByTwo() {
  const twos = num.filter((no) => no % 2 === 0);
  console.log(`These number(s) are divisible by 2 (${twos})`);

  function divisibleByThree() {
    const threes = twos.filter((no) => no % 3 === 0)
    console.log(`These number(s) are divisible by 2 and 3 (${threes})`);

  }
  divisibleByThree();
}
divisibleByTwo();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;
  
  const increment = () => {
    num++;
    return num;
  }

  return increment;
};

// Example usage: 
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
