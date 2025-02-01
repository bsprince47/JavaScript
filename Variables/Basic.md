# Javascript Variables
```Javascript
var hint
let userId
const Password
```

[var variable](#var-variable)  
[let variable](#let-variable)  
[const variable](#const-variable)

## `var` variable
- `var` is a keyword that is used to `declare variables`. It has `function scope`, meaning it can accessible throughout the entire function in which it is defined, including wihtin `nested blocks`.    
- var is `hoisted to the top of its scope`, meaning its `declaration is processed` before any code is executed, but its value is `not initialized until` the code reaches the line where it is assigned.   
- This can sometimes lead to `unexpected behavior`, especially when declaring variables inside loops or conditionals. 
```Javascript
var Password = 'Random!873'
Password = 'Random!83242' 
Password = 'Random!83245' 

console.log(Password) // ✔️ Print value
```  





## `let` variable
`let` is a keyword used to declare `variables` in JavaScript.
- It has `block scope`, meaning it is limited to the block {} in which is defined, unlike var.   
- variables declared with let can be updated but `not redeclared` within the same scope.   
- it is `hoisted`, but like const, it remains in the **`temporal dead zone`** until the code execution reaches its declaration, preventing usage before initialization.   

This makes let ideal for scenarios where values need to change but scope control is crucial.
```Javascript
let userId = 'Random!873'
userId = 'Random!873' 

console.log(userId) // ✔️ Print 

let userId = 'newId' // ❌ Throw Errer
console.log(userId) // ❌ Throw Errer Identifier 'userId' has already been declared
```


## `const` variable
`const` is a keyword used to declare variable in JavaScript. variables declared with const have `block scope`, meaning they are accessible only within the block in which they are deifined.
- A const variable must be `initialized` at the time of `declaration` and `cannot be reassigned`.   
- However , if the variable holds an `object or array`, its properties or elements can still be modified.  
- let , const is also hoisted, but it is in a **`temporal dead zone`** until the declaration is encountered, preventing access before initialization.
```JavaScript
const Password = 'Random!873'
Password = 'Random!873' 


console.log(Password) // ❌ Throw Errer TypeError: Assignment to constant variable.
```