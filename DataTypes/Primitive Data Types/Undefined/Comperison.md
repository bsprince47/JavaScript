## **`undefined` in `==` and `===` Comparisons**

- **Equality (`==`)**: `undefined` is loosely equal to `null` in JavaScript, but not to other types (like numbers or strings).
    
    ```jsx
    console.log(undefined == null); // true
    console.log(undefined == 0); // false
    console.log(undefined == 'undefined'); // false
    ```
    
- **Strict Equality (`===`)**: `undefined` is **not strictly equal** to any other type, including `null`.
    
    ```jsx
    console.log(undefined === null); // false
    console.log(undefined === 'undefined'); // false
    console.log(undefined === undefined); // true
    ```