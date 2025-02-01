
# Variable Lifetime and Garbage Collection
- Lifetime: A variable's lifetime is the period of time during which it exists in memory. This is tied to its scope. Variables within a function only exist during the function’s execution.
- Garbage Collection: JavaScript uses garbage collection to automatically free memory that is no longer in use. When a variable goes out of scope and is no longer referenced, it becomes eligible for garbage collection.

## Auto Move to Garbage Collection
```JavaScript
function example() {
   
}

example(); // After 5 seconds, can be cleaned up
```

## Manually Push to Garbage Collection
```JavaScript
function example() {

}

const refrence = example();  // because of this refrence it will not go auto in garbage collection
const refrence = null; // move it manually in garbage collection
```