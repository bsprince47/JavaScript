
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

