# Modifying String




### toUpperCase() and toLowerCase() 
Changes case.
    
```jsx
console.log(str.toUpperCase()); // 'FOCUS, WORLD!'
console.log(str.toLowerCase()); // 'focus, world!'
```
    
### trim()
Removes whitespace from both ends of the string.
    
```jsx
let str = "  BSPrince47  ";
console.log(str.trim()); // 'BSPrince47'
```
    
### replace() and replaceAll()
Replaces substring(s).
    
```jsx
console.log(str.replace("World", "JavaScript")); // 'Focus, JavaScript!'
console.log(str.replaceAll("o", "0")); // 'F0cus, W0rld!'
```

### split()
Splits a string into an array based on a delimiter.
    
```jsx
let str = "apple,banana,cherry";
console.log(str.split(",")); // ['apple', 'banana', 'cherry']
```
    
### concat()
Combines multiple strings.
    
```jsx
let str1 = "Focus";
let str2 = "World";
console.log(str1.concat(", ", str2)); // 'Focus, World'
```

### padStart() and padEnd()
```jsx
let str = "5";
console.log(str.padStart(3, "0")); // '005'
console.log(str.padEnd(3, "0")); // '500'
```


### repeat()
```jsx
let str = "Hi!";
console.log(str.repeat(3)); // 'Hi!Hi!Hi!'
```