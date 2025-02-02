# Question Answer Part 1

## 1 Question
### What is the result of the following code?

```javaScript
console.log(0.1 + 0.2 === 0.3);
```

`false`
Explanation: Due to floating-point precision issues, `0.1 + 0.2` does not exactly equal `0.3`. It equals `0.30000000000000004`.  


## 2 Question
### What is the output of this code?

```javaScript
console.log(Number.isNaN("NaN"));
```

`false`
Explanation: `Number.isNaN()` checks if a value is **actually NaN** and of type number. Since `"NaN"` is a string, it returns `false`.



## 3 Question
### What is the value of `x` after the following code executes?

```jsx
let x = 10 / 0;
```

`Infinity`



## 4 Question
### What is the output of the following code?

```jsx
console.log(Number("123abc"));
```

`NaN` 
Explanation: The `Number()` function attempts to convert the entire string into a number. Since `"123abc"` contains invalid numeric characters (`abc`), it results in `NaN`.