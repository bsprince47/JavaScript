# JavaScript Boolean Basics

## Boolean Definition

- A Boolean in JavaScript represents one of two values:
    - `true`
    - `false`

```jsx
let isActive = true;
let isComplete = false;
```

## Return Boolean in Functions

- Functions can return Boolean values:

```jsx
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false
```