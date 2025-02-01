
# Re-declaration Rules
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
