## **What is a Symbol?**

- **Symbol** is a primitive data type introduced in ES6.
- It is **unique** and **immutable**, meaning each Symbol value is distinct and cannot be changed after creation.
- Symbols are used to create **unique property keys** for objects, preventing property name collisions.

## **How to Create a Symbol**

- You create a Symbol using the `Symbol()` function:
    
```jsx
let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1 === sym2); // false (unique values)
```
    
- You can provide an **optional description** for debugging purposes:
    
```jsx
let sym = Symbol("mySymbol");
console.log(sym); // Symbol(mySymbol)
```
    

## **Using Symbols as Object Property Keys**

- Symbols are primarily used as unique keys in objects:
    
```jsx
let sym = Symbol("id");
let obj = {
    [sym]: 123,
    name: "John",
};
console.log(obj[sym]); // 123
```