
# Lexical Scope
- In lexical scope, a function has access to variables and other functions defined in its parent scope, grandparent scope, and so on, all the way up the chain. This means that no matter how deep the nesting of functions goes, an inner function can always access the variables of its outer functions because of the lexical scope chain.
- **Lexical scope** refers to how variables are resolved based on their **physical location** in the source code.
- A function's scope is determined by where it is **declared**, not where it is **called**.

## Key Points:
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