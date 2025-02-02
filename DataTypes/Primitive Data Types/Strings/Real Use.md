# Real World Use of JavaScript String

## Masking Sensitive Information

- Example: Masking part of a credit card number:
    
    ```jsx
    let card = "1234567812345678";
    console.log(card.slice(-4).padStart(card.length, "*")); // '************5678'
    ```

## Checking String Characteristics

Check if a string is empty or blank

```jsx
let isEmpty = (str) => str.trim().length === 0;
console.log(isEmpty("   ")); // true
```

## Check Present or Not

```jsx
let str = "JavaScript";
console.log(str.includes("Script")); // true
```


## Use of Symbol

- Reduce memory usage for repetitive strings using **symbols**:
    
    ```jsx
    let str1 = Symbol("Hello");
    let str2 = Symbol("Hello");
    console.log(str1 === str2); // false (unique instances)
    ```