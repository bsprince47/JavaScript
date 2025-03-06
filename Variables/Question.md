
###### Question 1
What is the scope of a variable declared using `var`?

- [ ] Block scope  
- [X] Function scope  
- [ ] Global scope only  
- [ ] Module scope  

###### Details
A variable declared with `var` is function-scoped, meaning it is accessible throughout the entire function where it is defined, including within nested blocks.


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


###### Question 3
Which of the following statements about `let` is true?

- [ ] `let` is function-scoped
- [X] `let` is block-scoped
- [ ] `let` variables can be redeclared in the same scope
- [ ] `let` is not hoisted

###### Details
Variables declared with `let` are block-scoped, meaning they exist only within the `{}` block they are defined in. Unlike `var`, they cannot be redeclared in the same scope. However, `let` is hoisted but remains in the temporal dead zone until initialization.


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


###### Question 6
Which of the following is true about `const` in JavaScript?

- [ ] `const` variables cannot be initialized
- [ ] `const` variables can be reassigned
- [X] `const` variables must be initialized at declaration
- [ ] `const` is function-scoped

###### Details
`const` requires an initial value at the time of declaration and cannot be reassigned later. However, for objects and arrays declared with `const`, their properties or elements can still be modified.


###### Question 7
Which of the following correctly describes hoisting behavior for `let` and `const`?

- [ ] `let` and `const` are not hoisted
- [ ] `let` is hoisted but `const` is not
- [ ] Both `let` and `const` are hoisted and initialized to undefined
- [X] Both `let` and `const` are hoisted but remain in the temporal dead zone until initialization

###### Details
Both `let` and `const` are hoisted but are not assigned a value until their declaration line is reached, which is known as the temporal dead zone.