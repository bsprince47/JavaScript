## **What is `BigInt`?**

- **`BigInt`** is a built-in data type in JavaScript for representing integers **larger than the maximum safe integer** supported by the `Number` type.
- The maximum safe integer for `Number` is **`2^53 - 1` (9007199254740991)**.
- `BigInt` allows you to safely handle and perform operations on numbers beyond this limit.

## **How to Create a `BigInt`**

1. **Using the `n` Suffix:**
    
```jsx
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber); // 123456789012345678901234567890n
```
    
2. **Using the `BigInt` Constructor:**
    
```jsx
let bigNumber = BigInt("123456789012345678901234567890");
console.log(bigNumber); // 123456789012345678901234567890n
```
    

## **Cannot Mix `BigInt` and `Number`:**

- You cannot directly mix `BigInt` and `Number` in operations.
- Example:
    
```jsx
let num = 5;
let big = 10n;
console.log(num + big); // TypeError: Cannot mix BigInt and other types
```
    
- **Solution:** Explicit conversion using `BigInt()` or `Number()`:
    
```jsx
console.log(BigInt(num) + big); // 15n
console.log(Number(big) + num); // 15
```
    

## **Incompatible with `Math` Functions**

- Most `Math` methods do not work with `BigInt`:
    
```jsx
let big = 10n;
console.log(Math.sqrt(big)); // TypeError: Cannot convert BigInt to number
``` 
    
- **No Decimal Support**
    - `BigInt` cannot represent decimal values:
        
```jsx
console.log(10.5n); // SyntaxError: Invalid or unexpected token
```
        

## JSON does not support `BigInt` directly:

```jsx
let big = 123n;
console.log(JSON.stringify(big)); // Error: BigInt cannot be serialized
```

- **Workaround:** Convert `BigInt` to string before serialization:
    
```jsx
let big = 123n;
console.log(JSON.stringify(big.toString())); // '"123"'
```
    

## **Conversion Between `BigInt` and `Number`**

1. **`BigInt` to `Number`**
    
```jsx
let big = 123n;
let num = Number(big);
console.log(num); // 123
```
    
2. **`Number` to `BigInt`**
    
```jsx
let num = 123;
let big = BigInt(num);
console.log(big); // 123n
```