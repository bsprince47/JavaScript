# Assigning and Re-assigning Variables
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