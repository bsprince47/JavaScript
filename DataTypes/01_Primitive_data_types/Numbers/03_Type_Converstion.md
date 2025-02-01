

[Auto Convert](#auto-convert)  
[By Method](#by-method)  
[Converting Booleans](#converting-booleans)  
[Converting `null` & `undefined`](#converting-null--undefined)  
[Converting Objects](#converting-objects)  
[`parseInt()` & `parseFloat()`](#parseint--parsefloat)  
[Unary Operator](#unary-operator)  


## Auto Convert
JavaScript automatically converts values to numbers in certain contexts, such as arithmetic operations.
```javaScript
console.log('5' - 1); // 4
console.log('hello' - 1);  // NaN
```

## By Method
```javaScript
console.log(Number('123.45'));// 123.45
console.log(Number('hello')); // NaN
```

## Converting Booleans
```javaScript
console.log(Number(true));  // 1
console.log(Number(false)); // 0
```

## Converting `null` & `undefined`
```javaScript
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
```

## Converting Objects
> When converting an object to a number, it calls the object's valueOf() method, and if that does not return a valid number, it calls toString(). Non-numeric objects will result in NaN.
```javascript
console.log(Number({})); // NaN (empty object does not convert to a number)
console.log(Number([1, 2, 3])); // NaN (array is converted to string, which is not a valid number)
console.log(Number([10])); // 10 (array with one numeric value converts correctly)
```

## `parseInt()` & `parseFloat()`
### parseInt()
> converts a string to an integer (ignoring the decimal part if present)
```javaScript
console.log(parseInt('123.45'));  // 123
console.log(parseInt('abc'));     // NaN 
console.log(parseInt('10px'));    // 10 
console.log(parseInt('px10'));    // NaN
```
### parseFloat()
> converts a string to a floating-point number (it doesn’t stop at the decimal point)
```javaScript
console.log(parseFloat('123.45'));  // 123.45
console.log(parseFloat('10.5abc')); // 10.5 (parses up to first non-numeric character)
console.log(parseFloat('abc'));     // NaN
console.log(parseInt('px10'));    // NaN
```

## Unary Operator
The unary plus (+) operator is a concise and fast way to convert a value to a number.
```javaScript
console.log(+('123')); // 123
console.log(+('n123')); // NaN
```



