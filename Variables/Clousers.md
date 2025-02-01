# Clousers

## What is a Closure?
> A closure happens when a function remembers the variables from its outer scope even after that outer function has finished executing.

### Simple Example
```JavaScript
function outerFunction() {
    let count = 0;  // This variable is inside outerFunction's scope

    return function innerFunction() { 
        count++;  // innerFunction remembers 'count'
        console.log(count);
    };
}

const increment = outerFunction(); // outerFunction executes and returns innerFunction
increment(); // 1
increment(); // 2
increment(); // 3
```

- Here, count is not directly accessible outside outerFunction, but innerFunction remembers and updates it because of closure.

### Closures in setTimeout
```JavaScript
function delayedMessage(msg, delay) {
    setTimeout(function() {
        console.log(msg);  // Closure remembers 'msg' and 'delay'
    }, delay);
}

delayedMessage("Hello after 2 sec!", 2000);
```
- Even though delayedMessage finishes executing, the inner function still has access to msg and delay when setTimeout runs.

## Making a Private Counter
```JavaScript
function createCounter() {
    let count = 0; 

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        }
    };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
```
- The variable count is private—it can only be accessed by increment and decrement.

## Manually Push to Garbage Collection
```JavaScript
let increment = outerFunction(); // Closure keeps 'count' in memory
increment(); // 1
increment(); // 2

increment = null; // Now, no references exist → Garbage collection happens
```
- When we set increment = null, JavaScript removes the reference to the closure, allowing it to be garbage collected.