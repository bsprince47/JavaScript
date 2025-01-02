
[Number.isInteger()](#numberisintegervalue)   
[Number.isFinite()](#numberisfinitevalue)  
[Number.isNaN()](#numberisnanvalue)  
[Number.isSafeInteger()](#numberissafeintegervalue)  
[Number.parseFloat()](#numberparsefloatstring)  
[Number.parseInt()](#numberparseintstring)  
[Number.toFixed()](#numbertofixeddigits)  
[Number.toExponential()](#numbertoexponentialfractiondigits)  
[Number.toPrecision()](#numbertoprecisionprecision)  
[Number.valueOf()](#numbervalueof)  
[Number.MAX_VALUE](#numbermax_value)  
[Number.MIN_VALUE](#numbermin_value)  
[Number.POSITIVE_INFINITY and Number.NEGATIVE_INFINITY](#numberpositive_infinity-and-numbernegative_infinity)  
[Number.NaN](#numbernan)  
[Number.prototype.toLocaleString()](#numberprototypetolocalestringlocalesoptions)  
[Number.prototype.toString()](#numberprototypetostringradix)  
[Extending the Number.prototype](#extending-the-numberprototype)


## Number.isInteger(value)
```javaScript
console.log(Number.isInteger(42));    // true
console.log(Number.isInteger(42.5));  // false
console.log(Number.isInteger('42'));  // false (string is not an integer)
console.log(Number.isInteger(NaN));  // false
```

## Number.isFinite(value)
```javaScript
console.log(Number.isFinite(42));    // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN));  // false
console.log(Number.isFinite('42')); // false (string is not a number)
```

## Number.isNan(value)
```javaScript
console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN(42));       // false
console.log(Number.isNaN('NaN'));    // false (string 'NaN' is not a valid NaN)
console.log(Number.isNaN(undefined));// false
```

## Number.isSafeInteger(value)
```javaScript
console.log(Number.isSafeInteger(42)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false (out of safe integer range)
console.log(Number.isSafeInteger('42')); // false (string is not an integer)
console.log(Number.isSafeInteger(NaN)); // false
```

## Number.parseFloat(string)
```javaScript
console.log(Number.parseFloat('42.5abc'));  // 42.5
console.log(Number.parseFloat('abc42.5'));  // NaN
console.log(Number.parseFloat('  3.14 '));  // 3.14
```

## Number.parseInt(string)
```javaScript
console.log(Number.parseInt('42.5abc'));  // 42
console.log(Number.parseInt('abc42.5'));  // NaN
console.log(Number.parseInt('1011', 2));  // 11 (binary to decimal)
console.log(Number.parseInt('42abc', 16)); // 66 (hexadecimal to decimal)
```

## Number.toFixed(digits)
- the result is in string
```javaScript
const num = 42.56789;
console.log(num.toFixed(2)); // '42.57'
console.log(num.toFixed(0)); // '43' (rounding)
console.log(num.toFixed(5)); // '42.56789' (no rounding needed)
```

## Number.toExponential(fractionDigits)
- the result is in string
```javaScript
const num = 12345;
console.log(num.toExponential(2));  // '1.23e+4'
console.log(num.toExponential(0));  // '1e+4'
```

## Number.toPrecision(precision)
- the result is in string
```javaScript
const num = 12345.6789;
console.log(num.toPrecision(5));  // '12346' (rounded to 5 significant digits)
console.log(num.toPrecision(3));  // '1.23e+4'
```

## Number.valueOf()
```javascript
const numObj = new Number(42);
console.log(numObj.valueOf()); // 42 (returns the primitive number value)
```
## Constant
### Number.MAX_VALUE
```javascript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
```

### Number.MIN_VALUE
```javascript
console.log(Number.MIN_VALUE); // 5e-324
```

### Number.POSITIVE_INFINITY and Number.NEGATIVE_INFINITY
```javascript
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
```

### Number.NaN
```javascript
console.log(Number.NaN);  // NaN
```

## Number.prototype.toLocaleString([locales[,options]])
```javaScript
const num = 1234567.89;

// Default locale
console.log(num.toLocaleString()); // '1,234,567.89' (in US English)

// Specific locale
console.log(num.toLocaleString('de-DE')); // '1.234.567,89' (in German)

// Currency formatting
console.log(num.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // '$1,234,567.89'
console.log(num.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })); // '￥1,234,568'
console.log(num.toLocaleString('en-PK', { style: 'currency', currency: 'PKR' })); // '₨1,234,568'
```

## Number.prototype.toString([radix])
```javaScript
const num = 255;

// Base 10 (decimal)
console.log(num.toString()); // '255'

// Base 16 (hexadecimal)
console.log(num.toString(16)); // 'ff'

// Base 2 (binary)
console.log(num.toString(2)); // '11111111'

// Base 8 (octal)
console.log(num.toString(8)); // '377'
```

## Extending the Number.prototype
```javaScript
Number.prototype.square = function() {
  return this * this;
};

console.log((5).square()); // 25
```


