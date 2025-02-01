
# Variable Scope: Global
## Global Scope
 A variable declared outside of any function or block is accessible throughout the entire program.
```JavaScript
var globalVar = 'I am global';
function showVar() {
  console.log(globalVar);  // Accessible globally
}
showVar();
```

## Local Scope / Function Scope
 A variable declared inside a function or block is accessible only within that function/block.
```JavaScript
function myFunction() {
  var localVar = 'I am local';
  console.log(localVar);  // Accessible only within this function
}
console.log(localVar);  // Error: localVar is not defined
```

## Block Scope
`let` and `const` are block-scoped, meaning they are only accessible within the block `({})` in which they are declared.
```JavaScript
if (true) {
  let blockScopedVar = 'Inside block';
  console.log(blockScopedVar);  // Accessible inside the block
}
console.log(blockScopedVar);  // Error: blockScopedVar is not defined
```

## Outer Scope
 The outer scope is the global scope or any scope `that encloses other` scopes (like functions or blocks). Variables declared in the outer scope are accessible by all inner scopes within it. It is sometimes called the `parent scope` or `global scope`. The outer scope can access variables from inner scopes only if those variables are explicitly passed out or returned.
```JavaScript
// Outer Scope
var outerVar = 'I am in the outer scope';

function outerFunction() {
  // Inner Scope
  console.log(outerVar);  // Accessing outer scope variable inside inner scope
}

outerFunction();
```

## Inner scope
 is a `nested scope` that resides within another scope, such as inside a function or a block. Variables declared in the inner scope are `only accessible` within that scope. The inner scope is often referred to as the `child scope`. It can access variables from the outer scope (known as lexical scoping), but the outer scope cannot directly access variables from the inner scope unless explicitly returned or passed out.
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