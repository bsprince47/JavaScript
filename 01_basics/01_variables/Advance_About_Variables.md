

[Variable Hoisting with `var`, `let`, and `const`](#variable-hoisting-with-var-let-and-const)  
[Variable Scope: Global, Local, and Block Scope](#variable-scope-global-local-and-block-scope)  
[Lexical Scope](#Lexical-Scope)  
[Variable Shadowing](#variable-shadowing)  
[Re-declaration Rules](#re-declaration-rules)  
[Variables and Strict Mode](#variables-and-strict-mode)  
[Assigning and Re-assigning Variables](#assigning-and-re-assigning-variables)  
[Variable Lifetime and Garbage Collection](#variable-lifetime-and-garbage-collection)  
[Best Practices for Working with Variables](#best-practices-for-working-with-variables)  


## Variable Hoisting with `var`, `let`, and `const`
- Variables declared with `var` are hoisted to the top of their scope (global or function scope). During hoisting, they are automatically initialized to `undefined`. However, the developer-assigned value is not applied until the code execution reaches the initialization line.
```JavaScript
console.log(x); // undefined
var x = 10;
```

`let` and `const`: Both `let` and `const` are hoisted, but they remain in the Temporal Dead Zone (TDZ) until the code execution reaches their actual declaration line. They cannot be accessed before initialization.
```JavaScript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
```

## Variable Scope: Global, Local, and Block Scope
- Global Scope: A variable declared outside of any function or block is accessible throughout the entire program.
```JavaScript
var globalVar = 'I am global';
function showVar() {
  console.log(globalVar);  // Accessible globally
}
showVar();
```

- Local Scope / Function Scope: A variable declared inside a function or block is accessible only within that function/block.
```JavaScript
function myFunction() {
  var localVar = 'I am local';
  console.log(localVar);  // Accessible only within this function
}
console.log(localVar);  // Error: localVar is not defined
```

- Block Scope: `let` and `const` are block-scoped, meaning they are only accessible within the block `({})` in which they are declared.
```JavaScript
if (true) {
  let blockScopedVar = 'Inside block';
  console.log(blockScopedVar);  // Accessible inside the block
}
console.log(blockScopedVar);  // Error: blockScopedVar is not defined
```

- Outer Scope: The outer scope is the global scope or any scope `that encloses other` scopes (like functions or blocks). Variables declared in the outer scope are accessible by all inner scopes within it. It is sometimes called the `parent scope` or `global scope`. The outer scope can access variables from inner scopes only if those variables are explicitly passed out or returned.
```JavaScript
// Outer Scope
var outerVar = 'I am in the outer scope';

function outerFunction() {
  // Inner Scope
  console.log(outerVar);  // Accessing outer scope variable inside inner scope
}

outerFunction();
```

- Inner scope: is a `nested scope` that resides within another scope, such as inside a function or a block. Variables declared in the inner scope are `only accessible` within that scope. The inner scope is often referred to as the `child scope`. It can access variables from the outer scope (known as lexical scoping), but the outer scope cannot directly access variables from the inner scope unless explicitly returned or passed out.
```JavaScript
function innerFunction() {
  // Inner Scope
  var innerVar = 'I am in the inner scope';
  
  // Accessing inner scope variable outside would normally be not allowed
  return innerVar;  // Returning innerVar to the outer scope
}

// Outer Scope
var outerVar = innerFunction();
console.log(outerVar);  // Accessing the inner scope variable after it's returned

```

## Lexical Scope
- In lexical scope, a function has access to variables and other functions defined in its parent scope, grandparent scope, and so on, all the way up the chain. This means that no matter how deep the nesting of functions goes, an inner function can always access the variables of its outer functions because of the lexical scope chain.
- **Lexical scope** refers to how variables are resolved based on their **physical location** in the source code.
- A function's scope is determined by where it is **declared**, not where it is **called**.

### Key Points:
- **Inner functions** can access variables from their **parent functions** (outer functions), and so on, up the chain.
- **Global variables** are accessible throughout the program.
- Lexical scope creates a **scope chain** where each function can access variables from its parent and outer scopes.

### Example:
```javascript
function outer() {
    let outerVar = "I'm from outer function";

    function inner() {
        console.log(outerVar); // Accessible due to lexical scope
    }

    inner();
}

outer(); // Output: "I'm from outer function"
```

## Variable Shadowing
- Shadowing occurs when a variable declared within a certain scope (such as a function or block) has the same name as a variable in an outer scope, "shadowing" or hiding the outer variable.

```javascript
let x = 10;
function shadowExample() {
  let x = 20;  // Shadows the outer x
  console.log(x);  // Output: 20
}
shadowExample();
console.log(x);  // Output: 10
```
### Potential Pitfalls of Shadowing
- Accidental Hiding: Shadowing can make the code less readable and can cause confusion if the same variable name is used repeatedly in nested scopes.
- Accessing Outer Variables: If you need to access an outer variable that is shadowed, you might need to rename variables to avoid shadowing.

## Re-declaration Rules
`var`: Variables declared with `var` can be re-declared within the same scope, which can lead to unexpected behavior.


```javascript
var x = 5;
var x = 10;  // Allowed, but not recommended
console.log(x);  // Output: 10
```
- `let` and `const`: You cannot re-declare a variable with the same name in the same scope using `let` or `const`. Attempting to do so will throw an error.


```javascript
let y = 5;
let y = 10;  // Uncaught SyntaxError: Identifier 'y' has already been declared
```

```javascript
const z = 10;
const z = 20;  // Error: Identifier 'z' has already been declared
```

## Variables and Strict Mode
> In strict mode `('use strict';)`, JavaScript enforces a stricter set of rules for variable declarations, such as requiring variables to be declared before they are used.
```javascript
x = 10;  // Global variable (implicitly attached to window)
console.log(window.x);  // Output: 10
```

```javascript
'use strict';
x = 10;  // Error: x is not defined
```
Without 'use strict';, JavaScript would allow x to be implicitly created as a global variable.
- Yes, add 'use strict'; explicitly in non-module, older-style scripts to avoid issues.
- No need to add 'use strict'; in ES6+ modules or modern frameworks where strict mode is already enforced.



## Assigning and Re-assigning Variables
`let`: You can assign a value to a variable and re-assign it later.

```javascript
let a = 5;
a = 10;  // Re-assigning is allowed
console.log(a);  // Output: 10
```
- `const`: Variables declared with `const` cannot be re-assigned, but if they hold objects or arrays, you can modify their contents.


```javascript
const b = 10;
b = 15;  // Error: Assignment to constant variable.
```
- But for objects or arrays:

```javascript
const person = { name: 'Alice' };
person.name = 'Bob';  // This is allowed as it's modifying the object's property
console.log(person.name);  // Output: Bob
```


## Variable Lifetime and Garbage Collection
- Lifetime: A variable's lifetime is the period of time during which it exists in memory. This is tied to its scope. Variables within a function only exist during the function’s execution.
- Garbage Collection: JavaScript uses garbage collection to automatically free memory that is no longer in use. When a variable goes out of scope and is no longer referenced, it becomes eligible for garbage collection.





---

## Best Practices for Working with Variables:
- Always declare variables using let or const to avoid accidental global variables and issues with hoisting.
- Use const by default, and only use let if you need to reassign a variable.
- Avoid variable shadowing to prevent confusion and potential errors in your code.
- Declare variables at the top of your scope to improve readability and maintainability.
- Use meaningful names for variables to make your code more understandable.
- Be careful with hoisting and understand the behavior of var, let, and const to avoid runtime errors.
