# Memroy Leaks in JavaScript Objects: Circular References & Clousers
Memory leaks happen when memory that is no longer needed isn't properly released, leading to unnecessary memory consumption, in JavaScript, memory is automatically managed by the garbage collector, but certain patterns can prevent garbage collection from working efficiently , causing memory leaks.


## Table of Contents

1. [Circular References in Objects](#1️⃣-circular-references-in-objects)
2. [Closures Holding References](#2️⃣-closures-holding-references)
3. [Detached DOM Elements](#3️⃣-detached-dom-elements)
4. [Timers & Intervals Holding References](#4️⃣-timers--intervals-holding-references)
5. [Global Variables Holding References](#5️⃣-global-variables-holding-references)
6. [Large Data Structures (Cache Misuse)](#6️⃣-large-data-structures-cache-misue)


## 1️⃣ Circular References in Objects
A circular reference occurs when two or more objects reference each other, preventing them from being garbage collected. Since JavaScript uses mark-and-sweep garbage collection, objects that are still "reachable" from the root scope won't be collected, even if they're not needed.


```js
function createCircularRef() {
    let objA = {};
    let objB = {};

    objA.ref = objB;  // objA references objB
    objB.ref = objA;  // objB references objA (cycle)

    return objA;
}

let leak = createCircularRef(); // Even if `leak` is set to null, objA and objB stay in memory.
```

✅ Fixing Circular References
- Manually break the reference
```js
leak.ref = null;
leak = null;
```

- Use WeakMap (preferred for temporary object tracking)
```js
let weakMap = new WeakMap();
let obj = {data: "important"};
weakMap.set(obj, {ref: obj}); // The value will be garbage collected when obj is unreachable.
obj = null; // No memory leak since WeakMap doesn't prevent GC.
```


## 2️⃣ Closures Holding References
Closures can unintentionally retain references to variables, keeping them in memory longer than necessary.
```js
function leakyFunction() {
    let large Array = new Array(100000).fill("leak");

    return function() {
        console.log(largeArray[0]);
    }
}

let leakyClosure = leakyFunction();
```
### 🔴 Why it’s a problem?
- The inner function retains a reference to largeArray. keeping in memory even if it's not needed.

### ✅ Fixing Closure Leaks
- Nullify large objects inside the outer function before returning the closure
```js
function betterFunction() {
    let largeArray = new Array(1000000).fill("noleak");

    let innerFunc = function() {
        console.log("Closure is working");
    }

    largeArray = null;
    return innerFunc;
}

let betterClosure = betterFunction();
```

## 3️⃣ Detached DOM Elements
If you store references to DOM elements after they are removed from the page, they will stay in memory.

```js
let button = document.getElementById("button");
button.addEventListener("click", function() {
    console.log("clicked");
})

// Later, the button is removed, but event listener keep it in memory
document.body.removeChild(button);
```

### 🔴 Why it’s a problem?
- The button variable still holds a reference to the DOM node preventing it from being garbage collected.


### ✅ Fixing Detached DOM Leaks
- Manually remove event listener before deleting elements:
```js
button.removeEventListener("click", someHandler);
button = null; // Allow GC
```

- Use event delegation instead of direct event listener
```js
document.body.addEventListener("click", function(event) {
    if(event.target.id === "myButton") {
        console.log("clicked");
    }
})
```


## 4️⃣ Timers & Intervals Holding References
Using setInterval or setTimeout without clearing them can cause memory leaks, especially if they reference objects.
```js
let obj = {message: "Hellow"};

setInterval(() => {
    console.log(obj.message);
},1000);
// The function captures obj preventing GC
```

### 🔴 Why it’s a problem?
- The interval function retains a reference to obj, keeping it alive.

### ✅ Fixing Timer Leaks
```js
let interval = setInterval(() => {
    console.log("Running...");
},1000);

setTimeout(() => {
    clearInterval(interval);
    interval = null; // Allow GC
}, 5000);
```

## 5️⃣ Global Variables Holding References
Variables declared without let, const , or var automatically become global, making them persist in memory.

```js
function createLeak() {
    leakedVar = "This is a memory leak"; // Becomes a global variable
}
createLeak();
```

### 🔴 Why it's a problem?
- leakedVar is now part of the global scope, meaning it will persist until the program ends.

### ✅ Fixing Global Leaks
- Always use let or const
```js
function createSafeFunction() {
    let safeVar = "This is safe";
}
```

## 6️⃣ Large Data Structures (Cache Misue)
Storing large objects in an in-memory cache (like an array or object) without removing unused items can lead to memory leaks.
```js
let cache = {};

function cacheData(key,value) {
    cache[key] = value; // Data keys growing indefinitely
}
```

### 🔴 Why it's problem?
- If no logic removes old data, memory usage will continuously increase.

### ✅ Fixing Large Data Leaks
- Use a size-limited cache
```js
let cache = new Map();

function cacheData(key,vlaue) {
    if(cache.size> 100) {
        let firstKey = cache.keys().next().value();
        cache.delete(firstKey);
    }

    cache.set(key.vlaue);
}
```

- Use WeakMap for automatic cleanup:
```js
let weakCache = new WeakMap();

function cacheObject(obj) {
    weakCache.set(obj, "some data");
}
```