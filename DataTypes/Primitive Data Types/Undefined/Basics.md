
## **What is `undefined`?**

- **`undefined`** is a primitive data type in JavaScript, which indicates that a variable has been declared but has not yet been assigned a value.
- It is also the default value for uninitialized variables.

```jsx
let x;
console.log(x); // undefined
```

## **When Does `undefined` Occur?**

- **Uninitialized Variables**: When a variable is declared without being initialized, it is automatically assigned the value of `undefined`.
    
```jsx
let a;
console.log(a); // undefined
```

- **Function Return Value**: If a function does not return anything explicitly, it returns `undefined` by default.
    
```jsx
function test() {
    // no return statement
}
console.log(test()); // undefined
```
    
- **Accessing Non-Existing Object Properties**: If you try to access a property that doesn't exist in an object, the result is `undefined`.

```jsx
let obj = { name: "Alice" };
console.log(obj.age); // undefined
```

- **Out of Bounds Array Index**: If you access an array index that is out of range, it will return `undefined`.
    
```jsx
let arr = [1, 2, 3];
console.log(arr[5]); // undefined
```
    

## **Checking for `undefined`**

- You can check if a variable is `undefined` using either the strict equality operator (`===`) or by simply comparing it to the string `"undefined"`.
    
```jsx
let z;
if (z === undefined) {
    console.log("z is undefined");
}
```

- You can also use the **`typeof`** operator to check if a variable is undefined:

```jsx
let x;
console.log(typeof x === "undefined"); // true
```
    

## **`undefined` in Arrays**

- If an array element is not initialized, it will be `undefined`.
    
```jsx
let arr = [];
arr[2] = "JavaScript";
console.log(arr[0]); // undefined
```
    

## **`undefined` in JSON**

- **`undefined`** is not valid in **JSON**. If you try to stringify an object with `undefined`, it will be omitted.
    
```jsx
let obj = { name: "Alice", age: undefined };
console.log(JSON.stringify(obj)); // {"name":"Alice"}
```


## **`undefined` in Arithmetic Operations**

- **Conversion**: When `undefined` is involved in arithmetic operations (like addition, subtraction, etc.), it gets converted to `NaN` (Not-a-Number).
    
```jsx
let x = undefined;
console.log(x + 10); // NaN
console.log(x - 10); // NaN
console.log(x * 10); // NaN
console.log(x / 10); // NaN
```