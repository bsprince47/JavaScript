
# Number

- [Basic Representation](#basic-representation)
- [Operations](#operations)
- [Precision Issues](#precision-issues)
- [Mathematical Functions](#mathematical-functions)


## Basic Representation
> JavaScript numbers can be used to represent both integers and floating point numbers.
```javaScript
let x = 42; // Integer
let y = 3.14; // Floating-point number
```


## Operations
- Numbers can be used with all the basic aritmetic operations.
```javaScript
let sum = 5 + 10; // 15
let diff = 10 - 4; // 6
let product = 3 * 6; // 18
let quotient = 12 / 4; // 3
let remainder = 10 % 3; // 1
```

## Precision Issues
> Since JavaScript numbers are stored as floating-point values, they can sometimes have precision issues, especially with decimal arithmetic. To avoid these issues, developers often round numbers when precision is important.
```javaScript
let result = 0.1 + 0.2;
console.log(result); // 0.30000000000000004
```

## Mathematical Functions
> JavaScript provides a number of built-in mathematical functions through the `Math` object.
```javaScript
let absValue = Math.abs(-5); // 5
let powerValue = Math.pow(2, 3); // 8
let sqrtValue = Math.sqrt(16); // 4
let roundValue = Math.round(4.7); // 5
let floorValue = Math.floor(4.7); // 4
let ceilValue = Math.ceil(4.3); // 5
let randomValue = Math.random(); // Random number between 0 and 1
and ..........
```



