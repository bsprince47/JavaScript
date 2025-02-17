# Class Syntax vs. Function Constructors (Under the Hood)

Both `ES6 classes` and `function constructors` achieve the same things __ creating objects with shared methods via the prototype. However, classes are just syntactic sugar over function constructors, making the code cleaner and easier to read.


## 1️⃣ Function Constructor Approach
Before ES6, objects were created using constructor functions
```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log("Hi my name is " + this.name);
}

const john = new Person("John", 25);
john.greet(); // // Outputs: Hi, my name is John.
```

### What Happens Under the Hood
- `Person` is a constructor function.
- `new Person()` creates new Object.
- The `this` inside `Person` refers to the new object.
- `Person.prototype.greet` is shared across all instances.

## 2️⃣ Class Syntax Approach  
With ES6, we can write the same things using classes
```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("hi my name is " + this.name);
    }
}

const john = new Person("John", 25);
john.greet(); // hi my name is john.
```

### What Happens Under the Hood?
Even though this looks different, JavaScript still uses prototypes behind the scenes
```js
console.log(typeof Person); // function (because classes are special functions!)
console.log(Person.prototype.greet === john.__proto__.greet); // true

```

- Classes are just functions internally.
- Methods in a class (greet()) are actually added to Person.prototype, just like in function constructors.
- Unlike function constructors, class methods are non-enumerable (not listed in for...in loops).