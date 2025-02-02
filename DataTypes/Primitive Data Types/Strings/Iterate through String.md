# Iterate Through String



### For loop
    
```jsx
let str = "Hello";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]); // H, e, l, l, o
}
```
    
### For...of loop
    
```jsx
for (let char of str) {
    console.log(char); // H, e, l, l, o
}
```