

# Special Numbers

## **`Infinity`** 
Represents positive infinity. It is returned when a number exceeds the maximum limit.
```javaScript
let infinityValue = 1 / 0;
console.log(infinityValue); // Infinity
```
## **`-Infinity`** 
Represents negative infinity.
```javaScript
let negInfinity = -1 / 0;
console.log(negInfinity); // -Infinity
```
## **`NaN`** 
(Not a Number) Represent unrepresentable value.
```javaScript
let result = 0 / 0;
console.log(result); // NaN

let invalidNumber = Number("Number");
console.log(invalidNumber); // NaN
```
## **`BigInt`** 
Although not strictly part of the Number type, the BigInt type allows for the representation of very large integers (beyond Number.MAX_SAFE_INTEGER).
```javaScript
const bigIntValue = 123456789012345678901234567890n;
console.log(bigIntValue); // 123456789012345678901234567890n
```