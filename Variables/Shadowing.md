
# Variable Shadowing
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
## Potential Pitfalls of Shadowing
- Accidental Hiding: Shadowing can make the code less readable and can cause confusion if the same variable name is used repeatedly in nested scopes.
- Accessing Outer Variables: If you need to access an outer variable that is shadowed, you might need to rename variables to avoid shadowing.