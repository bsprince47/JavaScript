
###### Question 1
What is the scope of a variable declared using `var`?

- [ ] Block scope  
- [X] Function scope  
- [ ] Global scope only  
- [ ] Module scope  

###### Details
A variable declared with `var` is function-scoped, meaning it is accessible throughout the entire function where it is defined, including within nested blocks.

---

###### Question 2
What will be the output of the following JavaScript code?
```js
console.log(hint); 
var hint = "Hello";
console.log(hint);
```
- [ ] ReferenceError
- [ ] "Hello" "Hello"
- [X] undefined "Hello"
- [ ] "Hello" undefined

###### Details
Due to hoisting, the `var` declaration is moved to the top, but its value is not initialized until the assignment line is reached. So, `console.log(hint)` before initialization returns `undefined`.

---

###### Question 3
Which of the following statements about `let` is true?

- [ ] `let` is function-scoped
- [X] `let` is block-scoped
- [ ] `let` variables can be redeclared in the same scope
- [ ] `let` is not hoisted

###### Details
Variables declared with `let` are block-scoped, meaning they exist only within the `{}` block they are defined in. Unlike `var`, they cannot be redeclared in the same scope. However, `let` is hoisted but remains in the temporal dead zone until initialization.

---

###### Question 4
What happens if you try to redeclare a variable using `let` in the same scope?
```js
let userId = "123";
let userId = "456";
```
- [ ] No error, the value is updated
- [ ] The first declaration is ignored
- [X] SyntaxError: Identifier 'userId' has already been declared
- [ ] The second declaration is ignored

###### Details
`let` does not allow redeclaration in the same scope, which leads to a SyntaxError.

---

###### Question 5
What will be the output of the following JavaScript code?
```js
const password = "SecurePass123";
password = "NewPass456";
console.log(password);
```
- [ ] "NewPass456"
- [X] TypeError: Assignment to constant variable
- [ ] undefined
- [ ] "SecurePass123"

###### Details
A `const` variable must be initialized at the time of declaration and cannot be reassigned. Attempting to do so results in a TypeError.
---

###### Question 6
Which of the following is true about `const` in JavaScript?

- [ ] `const` variables cannot be initialized
- [ ] `const` variables can be reassigned
- [X] `const` variables must be initialized at declaration
- [ ] `const` is function-scoped

###### Details
`const` requires an initial value at the time of declaration and cannot be reassigned later. However, for objects and arrays declared with `const`, their properties or elements can still be modified.

---
###### Question 7
Which of the following correctly describes hoisting behavior for `let` and `const`?

- [ ] `let` and `const` are not hoisted
- [ ] `let` is hoisted but `const` is not
- [ ] Both `let` and `const` are hoisted and initialized to undefined
- [X] Both `let` and `const` are hoisted but remain in the temporal dead zone until initialization

###### Details
Both `let` and `const` are hoisted but are not assigned a value until their declaration line is reached, which is known as the temporal dead zone.

---

###### Question 8
What is a closure in JavaScript?

- [ ] A function that executes immediately after being defined  
- [X] A function that remembers the variables from its outer scope even after the outer function has finished executing  
- [ ] A function that only executes inside a loop  
- [ ] A function that always returns another function  

###### Details
A closure occurs when an inner function retains access to its outer function’s variables even after the outer function has executed.

---

###### Question 9
What will be logged to the console?
```js
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const counter = makeCounter();
counter();
counter();
counter();
```
- [ ] 0, 1, 2
- [ ] 1, 1, 1
- [X] 1, 2, 3
- [ ] 0, 0, 0

###### Details
Each call to counter() increments the count variable, which is remembered due to closure.

---

###### Question 10
What happens when using closures with setTimeout?

- [ ] The function loses access to outer variables
- [X] The function remembers outer variables even after the outer function has executed
- [ ] The function executes immediately without delay
- [ ] Closures do not work inside setTimeout

###### Details
The inner function inside setTimeout forms a closure, keeping access to outer variables even when executed later.

---

###### Question 11
How can closures be used to create private variables?

- [X] By defining a variable inside a function and returning an object with methods that manipulate it
- [ ] By using let instead of var
- [ ] By defining variables in the global scope
- [ ] Both the first and second options

###### Details
Closures allow private variables by keeping them inside a function’s scope and exposing only the necessary methods.

---

###### Question 12
What will be the output of the following code?
```js
let counter = (function() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
})();

counter();
counter();
counter();
```
- [ ] 0, 1, 2
- [ ] 1, 1, 1
- [X] 1, 2, 3
- [ ] 0, 0, 0

###### Details
The IIFE (Immediately Invoked Function Expression) creates a closure that retains the count variable across multiple invocations.

---

###### Question 13
What happens when setting a closure reference to null?
```js
let increment = outerFunction();
increment();
increment();
increment = null;
```
- [ ] The closure continues to exist in memory indefinitely
- [ ] The function no longer works, but memory is not freed
- [X] The closure is removed from memory by JavaScript’s garbage collector
- [ ] JavaScript throws an error

###### Details
By setting increment = null, we remove all references to the closure, allowing JavaScript to reclaim memory through garbage collection.

---


###### Question 14
What is a variable declaration in JavaScript?

- [ ] Assigning a value to a variable  
- [ ] Removing a variable from memory  
- [X] Creating a variable and telling JavaScript it exists  
- [ ] Copying a variable’s value  

###### Details
A declaration is when you define a variable without necessarily assigning it a value. Example: `let x;` declares `x` but does not initialize it.

---

###### Question 15
Which of the following correctly describes variable initialization?

- [ ] Declaring a variable without assigning it a value  
- [X] Assigning an initial value to a declared variable  
- [ ] Removing a variable from scope  
- [ ] Using `const` instead of `var`  

###### Details
Initialization is when a variable is assigned a value for the first time, like `let b = 20;`.

---

###### Question 16
What happens if a `const` variable is declared without initialization?

- [ ] It is assigned undefined
- [X] It throws an error
- [ ] It is hoisted with null value
- [ ] It remains uninitialized but usable

###### Details
Unlike `var` and `let`, `const` must be initialized at the time of declaration; otherwise, JavaScript throws an error.

---

###### Question 17
What will be logged to the console?
```js
console.log(a);
var a = 10;
```
- [ ] 10
- [X] undefined
- [ ] ReferenceError
- [ ] null

###### Details
Due to hoisting, `var a` is moved to the top, but its value is not assigned until the assignment statement is executed. So, `console.log(a);` prints `undefined`.

---

###### Question 18
What will happen when running this code?
```js
console.log(b);
let b = 20;
```
- [ ] 20
- [ ] undefined
- [X] ReferenceError
- [ ] null

###### Details
Variables declared with `let` are hoisted but remain in the temporal dead zone until initialized. Accessing them before declaration results in a ReferenceError.

---

###### Question 19
Which of the following is true about variable hoisting in JavaScript?

- [X] `var` declarations are hoisted with an initial value of undefined
- [ ] `let` and `const` are hoisted with an initial value of undefined
- [ ] `const` variables are not hoisted at all
- [ ] Variables declared with `var` are not hoisted

###### Details
`var` variables are hoisted and assigned `undefined`. `let` and `const` are hoisted but remain in the temporal dead zone until initialized.

---


###### Question 20
What determines a variable's lifetime in JavaScript?

- [ ] The type of variable (`var`, `let`, or `const`)  
- [X] The variable’s scope and references  
- [ ] The amount of memory available  
- [ ] The execution speed of JavaScript  

###### Details
A variable’s lifetime is determined by its scope. Local variables exist only during function execution, while global variables persist as long as the application runs.

---

###### Question 21
What is garbage collection in JavaScript?

- [ ] A process that removes all variables from memory  
- [X] A process that automatically frees memory occupied by variables no longer referenced  
- [ ] A manual method for deleting variables  
- [ ] A process that prevents memory from being allocated  

###### Details
JavaScript’s garbage collector automatically removes variables from memory when they are no longer accessible.

---

###### Question 22
Which of the following variables is eligible for garbage collection after function execution?

```js
function test() {
    let a = 10;
}
test();
```
- [X] `a`
- [ ] `test`
- [ ] Neither `a` nor `test`
- [ ] Both remain in memory permanently

###### Details
Since `a` is declared inside `test()`, it only exists during function execution. After `test()` finishes, `a` is no longer referenced and becomes eligible for garbage collection.

---

###### Question 23
What will prevent a variable from being garbage collected?

- [X] Keeping at least one active reference to it
- [ ] Declaring it inside a function
- [ ] Using `const` instead of `let`
- [ ] Executing the function multiple times

###### Details
As long as a variable has at least one reference, it remains in memory and is not garbage collected.

---

###### Question 24
What will happen in the following code?

```js
function example() {
    let data = { value: "Important data" };
    return data;
}

let reference = example();
reference = null;
```
- [ ] The object `{ value: "Important data" }` is immediately garbage collected
- [ ] The object remains in memory forever
- [X] The object becomes eligible for garbage collection once `reference` is set to `null`
- [ ] The object is garbage collected when `example()` finishes executing

###### Details
The object is stored in memory as long as `reference` points to it. Once `reference` is set to `null`, no references exist, making it eligible for garbage collection.

---

###### Question 25
How can we manually push an object to garbage collection?

- [ ] Call `delete variableName;`
- [ ] Assign `undefined` to the variable
- [X] Assign `null` to the variable
- [ ] Use `console.clear();`

###### Details
Assigning `null` to a variable removes its reference to an object, allowing garbage collection to free up memory.

---


###### Question 26
What happens when you try to access a `var` variable before its declaration?

```js
console.log(a);
var a = 10;
```
- [X] undefined
- [ ] ReferenceError
- [ ] TypeError
- [ ] 10

###### Details
Variables declared with `var` are hoisted and initialized to `undefined`, so accessing them before assignment does not throw an error.

---

###### Question 27
What happens when you try to access a `let` variable before its declaration?

```js
console.log(b);
let b = 20;
```
- [ ] undefined
- [X] ReferenceError
- [ ] null
- [ ] 20

###### Details
`let` is hoisted but not initialized. It remains in the Temporal Dead Zone (TDZ) until the execution reaches the declaration.

---

###### Question 28
What will happen when running this code?

```js
console.log(c);
const c = 30;
```
- [ ] undefined
- [X] ReferenceError
- [ ] 30
- [ ] TypeError

###### Details
Like `let`, `const` variables are hoisted but remain in the Temporal Dead Zone (TDZ) until initialized. Accessing them before declaration results in a ReferenceError.

---

###### Question 29
Which of the following statements about hoisting is true?

- [X] `var` is hoisted and initialized to `undefined`
- [ ] `let` and `const` are not hoisted at all
- [ ] `const` variables are initialized to `null` during hoisting
- [ ] `let` is hoisted and initialized to `undefined`

###### Details
`var` is hoisted and initialized to `undefined`, while `let` and `const` are hoisted but remain uninitialized in the Temporal Dead Zone (TDZ).

---

###### Question 30
Which of the following code snippets will run without errors?

- [X]
```js
console.log(x); 
var x = 5;
```
- [ ]
```js
console.log(y);
let y = 10;
```
- [ ]
```js
console.log(z);
const z = 15;
```
- [ ]
```js
console.log(a);
const a;
```

###### Details
Only `var x` works because `var` is hoisted and initialized to `undefined`. The other cases involve `let` and `const`, which are in the Temporal Dead Zone or missing initialization.

---


###### Question 31
What is **lexical scope** in JavaScript?

- [ ] The scope that depends on where a function is called  
- [X] The scope that depends on where a function is declared  
- [ ] A dynamic way of resolving variables  
- [ ] A feature that only applies to `let` and `const`  

###### Details
Lexical scope means that a function's scope is determined by where it is **declared** in the code, not where it is called.

---

###### Question 32
What will be the output of the following code?

```js
function outer() {
    let message = "Hello from outer";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
```
- [X] "Hello from outer"
- [ ] undefined
- [ ] ReferenceError
- [ ] null

###### Details
The inner function has access to `message` because of lexical scope. It can access variables from its parent function.

---

###### Question 33
What happens when an inner function tries to access a variable from its parent function?

- [X] It successfully accesses the variable due to lexical scope
- [ ] It throws a ReferenceError
- [ ] It only works if the variable is declared using `var`
- [ ] The variable must be passed as an argument

###### Details
Lexical scope allows inner functions to access variables from their parent function, as long as they are declared in an accessible scope.

---

###### Question 34
Which of the following statements about lexical scope is true?

- [X] Inner functions can access variables from their outer function
- [ ] Outer functions can access variables from their inner function
- [ ] Lexical scope is determined at runtime
- [ ] `var` does not follow lexical scoping rules

###### Details
Lexical scope allows inner functions to access variables from outer functions, but not the other way around.

---

###### Question 35
What will be logged to the console?

```js
function grandparent() {
    let grandparentVar = "I am grandparent";

    function parent() {
        let parentVar = "I am parent";

        function child() {
            console.log(grandparentVar);
            console.log(parentVar);
        }

        child();
    }

    parent();
}

grandparent();
```
- [X] "I am grandparent" and "I am parent"
- [ ] "I am grandparent" and ReferenceError
- [ ] undefined and "I am parent"
- [ ] ReferenceError and ReferenceError

###### Details
The child function has access to both `parentVar` and `grandparentVar` due to lexical scope, even though they are declared in different functions.

---


###### Question 36
What will be the output of the following code?

```js
var x = 5;
var x = 10;
console.log(x);
```
- [ ] 5
- [X] 10
- [ ] SyntaxError
- [ ] ReferenceError

###### Details
Variables declared with `var` can be redeclared within the same scope, and the new value overwrites the previous one.

---

###### Question 37
What happens when you try to redeclare a `let` variable in the same scope?

```js
let y = 5;
let y = 10;
```
- [ ] 10
- [ ] 5
- [X] SyntaxError
- [ ] undefined

###### Details
Unlike `var`, `let` does not allow re-declaration in the same scope. Trying to do so results in a SyntaxError.

---

###### Question 38
Which of the following variable declarations will cause an error?

```js
var a = 10; 
var a = 20;
let b = 15; 
let b = 25;
const c = 30; 
const c = 40;
const obj = { name: "Alice" }; 
obj.name = "Bob";
```
- [ ] `var a = 10; var a = 20;`
- [X] `let b = 15; let b = 25;`
- [X] `const c = 30; const c = 40;`
- [ ] `const obj = { name: "Alice" }; obj.name = "Bob";`

###### Details
Both `let` and `const` do not allow redeclaration in the same scope. However, modifying object properties is allowed.

---

###### Question 39
What will be the output of the following code?

```js
const person = { name: 'Alice' };
person.name = 'Bob';
console.log(person.name);
```
- [ ] Alice
- [X] Bob
- [ ] Error
- [ ] undefined

###### Details
`const` prevents reassignment of the variable itself, but object properties can still be modified.

---

###### Question 40
Which statement about `const` variables is true?

- [ ] `const` variables can be reassigned after declaration
- [X] `const` variables cannot be reassigned, but their objects/arrays can be modified
- [ ] `const` allows re-declaration within the same scope
- [ ] `const` behaves the same as `var`

###### Details
`const` does not allow reassignment, but if it holds an object or array, the contents of that object/array can be modified.

---

###### Question 41
Which variable scope allows a variable to be accessed throughout the entire program?

- [X] Global Scope  
- [ ] Local Scope  
- [ ] Block Scope  
- [ ] Function Scope  

###### Details
A **global** variable is declared outside of any function or block and is accessible **everywhere** in the program.

---

###### Question 42
What will happen when you try to access a function-scoped variable outside the function?

```js
function test() {
    var localVar = "Hello";
}
console.log(localVar);
```
- [ ] "Hello"
- [ ] undefined
- [X] ReferenceError: localVar is not defined
- [ ] null

###### Details
Variables declared with `var` inside a function are function-scoped, meaning they cannot be accessed outside the function.

---

###### Question 43
What will be the output of the following code?

```js
if (true) {
    let blockScopedVar = "Inside block";
}
console.log(blockScopedVar);
```
- [ ] "Inside block"
- [X] ReferenceError: blockScopedVar is not defined
- [ ] undefined
- [ ] null

###### Details
Variables declared with `let` or `const` are block-scoped, meaning they are only accessible within the block `{}` they were declared in.

---

###### Question 44
Which statement about scope is true?

- [ ] Inner scopes cannot access variables from outer scopes
- [X] Inner scopes can access variables from outer scopes
- [ ] Outer scopes can access variables from inner scopes
- [ ] Global scope is limited to functions only

###### Details
Due to lexical scope, an inner function or block can access variables from its outer scope.

---

###### Question 45
What will be logged to the console?

```js
var outerVar = "I am in the outer scope";

function outerFunction() {
    console.log(outerVar);
}

outerFunction();
```
- [X] "I am in the outer scope"
- [ ] undefined
- [ ] ReferenceError
- [ ] null

###### Details
The function `outerFunction` has access to `outerVar` because it is declared in the outer (global) scope.

---

###### Question 46
How can an inner function pass a variable to the outer scope?

- [ ] It can directly access outer scope variables
- [X] It must return the variable or use an external reference
- [ ] It can modify global variables without returning anything
- [ ] It is not possible

###### Details
Inner scope variables cannot be accessed directly by an outer scope. They must be returned or stored in an external variable.

---


###### Question 47
What is **variable shadowing** in JavaScript?

- [ ] When a variable is **deleted** from memory  
- [X] When a **local variable** has the same name as a **global variable**, hiding the global variable  
- [ ] When a function reassigns a global variable  
- [ ] When JavaScript **hoists** a variable to the top of its scope  

###### Details
Variable shadowing occurs when a **local variable** has the same name as a **variable in an outer scope**, making the inner variable take precedence within its scope.

---

###### Question 48
What will be the output of the following code?

```js
let x = 5;

function example() {
    let x = 10; // Shadows global x
    console.log(x);
}

example();
console.log(x);
```
- [ ] 10 10
- [X] 10 5
- [ ] 5 5
- [ ] ReferenceError

###### Details
The inner `x` shadows the outer `x` inside the function. However, outside the function, the global `x` remains unchanged.

---

###### Question 49
Which of the following is true about variable shadowing?

- [X] A local variable with the same name as an outer variable hides the outer variable inside its scope
- [ ] The outer variable is deleted when shadowed
- [ ] Shadowing only occurs in `var` but not in `let` or `const`
- [ ] Shadowing causes a syntax error

###### Details
When a variable in a local scope has the same name as one in the outer scope, it hides (shadows) the outer variable inside that scope.

---

###### Question 50
What will be logged to the console?

```js
var name = "Alice";

function sayHello() {
    var name = "Bob"; // Shadowing global "name"
    console.log(name);
}

sayHello();
console.log(name);
```
- [X] Bob then Alice
- [ ] Alice then Bob
- [ ] Bob then Bob
- [ ] ReferenceError

###### Details
The variable `name` inside the function shadows the global `name`, but the global `name` remains unaffected outside.

---

###### Question 51
Which of the following can be a problem caused by variable shadowing?

- [ ] JavaScript prevents shadowing from happening
- [X] It can cause confusion when reading the code because different variables with the same name exist in different scopes
- [ ] It deletes the outer variable
- [ ] It results in a syntax error

###### Details
Shadowing can make code harder to read because the same variable name refers to different values in different scopes.

---


###### Question 52
What is the **Temporal Dead Zone (TDZ)** in JavaScript?

- [ ] A period when JavaScript variables cannot be deleted  
- [X] The time between entering the scope and the variable's declaration where it **cannot be accessed**  
- [ ] A period when variables can be used **before** being declared  
- [ ] The period after a function is executed  

###### Details
The **Temporal Dead Zone (TDZ)** is the time between when a variable enters the scope and when it is initialized, during which accessing the variable results in a **ReferenceError**.

---

###### Question 53
What will be the output of the following code?

```js
console.log(a);
let a = 10;
```
- [ ] undefined
- [ ] 10
- [X] ReferenceError
- [ ] null

###### Details
Since `let a` is in the Temporal Dead Zone until it is declared, trying to access it before initialization causes a ReferenceError.

---

###### Question 54
Which of the following statements is true about TDZ?

- [ ] `var` variables also experience TDZ
- [ ] Variables inside TDZ are initialized to `undefined`
- [X] `let` and `const` variables remain in TDZ until their declaration is executed
- [ ] TDZ only affects global variables

###### Details
`let` and `const` variables are hoisted, but they stay in the Temporal Dead Zone until their declaration is reached in execution.

---

###### Question 55
What will be printed when this code runs?

```js
function checkTDZ() {
    console.log(x);
    let x = 5;
}
checkTDZ();
```
- [ ] undefined
- [ ] 5
- [X] ReferenceError
- [ ] null

###### Details
`let x` is in the Temporal Dead Zone until the execution reaches its declaration. So, accessing `x` before initialization causes a ReferenceError.

---

###### Question 56
What is the difference between `var` and `let` in terms of hoisting and TDZ?

- [X] `var` is hoisted and initialized to `undefined`, while `let` is hoisted but remains in the Temporal Dead Zone until initialization
- [ ] Both `var` and `let` remain in TDZ
- [ ] `var` is not hoisted, while `let` is
- [ ] `let` can be used before declaration but `var` cannot

###### Details
`var` is hoisted and initialized to `undefined`, whereas `let` is hoisted but not initialized, staying in the Temporal Dead Zone until explicitly declared.

---
