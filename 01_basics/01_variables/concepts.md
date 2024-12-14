# Concepts which are used in Learning
[Declaration / Initialization](#declaration-and-initialization)  
[Temporal Dead Zone](#temporal-dead-zone-tdz)  



## Declaration and Initialization
### Declaratioin
> A declaration is the creation of a variable. This is when you tell JavaScript that a variable exists and what its name is.
```JavaScript
var z;
let x;
const y;
```
- `var z` When declare z with var, it is hoisted and assigned and initial value of `undefined`.
- `let x;` This tells JavaScript that you are creating a variable named x.
- `const y` It also create variable but if you immediately It will throw error.

### Initialization
> Initiazation is the process of assigning and initial value to a variable. This happend right after a declaration.
```JavaScript
var a = 10;
let b = 20;
const z = 30;
```


## Temporal Dead Zone (TDZ)
> `Temporal Dead Zone` refers to the period between the entering of the scope (like a block or function) and the actual declaration and initialization of a variabe declared with `let or const`.   
> During this period accessing the variable results in a `RefernceError`.  

> The TDZ is a mechanism to prevent using variables before they are initialized, helping to avoid bugs and making the code more predictable.  

### Hoisting
- `var` The variable is hoisted and intialized to `undefined`.
- `let` and `const` The variable are hoisted but not initialized. They stay in the Temporal Dead Zone (TDZ) until they are initialized.
### Initialization
- `var` Initialized with undefined.
- `let` and `const` Remain in the TDZ and cannot be accessed before they are explicity intialized.

```JavaScript
console.log(x);  // ✔️ undefined (var is hoisted and initialized to undefined)
var x = 5;

console.log(y); //  ❌ ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z);  // ❌ ReferenceError: Cannot access 'z' before initialization
const z = 15;

```

