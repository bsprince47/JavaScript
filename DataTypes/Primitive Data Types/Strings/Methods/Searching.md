# Searching Mehthods of String


### indexOf()
 Finds the first occurrence of a substring.
    
```jsx
let str = "Focus, World!";
console.log(str.indexOf("World")); // 7
```
    
### lastIndexOf()
Finds the last occurrence of a substring.
    
```jsx
console.log(str.lastIndexOf("o")); // 8
```
    
### includes() 
Checks if a substring exists in the string.
    
```jsx
console.log(str.includes("World")); // true
```
    
### startsWith() and endsWith()
Checks if the string starts or ends with a specific substring.
    
```jsx
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true
```