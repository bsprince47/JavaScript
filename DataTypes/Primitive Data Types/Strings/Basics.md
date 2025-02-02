
# String Basics


## How to Create String
### What is String
 A string is a sequence of characters used to represent text.  
 - Strings are enclosed in:
    - **Single quotes**: `'BSPrince47'`
    - **Double quotes**: `"BSPrince47"`
    - **Template literals**: `BSPrince47` (introduced in ES6).


### String Constructor
Using the String constructor (not recommended as it creates an object):
```JavaScript
let strObj = new String("BSPrince47");
```

## Strings Are Immutable
You cannot change a string's content directly. Instead, you create a new string:

```jsx
let str = "Hello";
str[0] = "h"; // Does nothing
console.log(str); // 'Hello'
```

## String Properties
### length 
Returns the number of characters in the string.

```jsx
let str = "BSPrince47";
console.log(str.length);
```

## Unicode and Strings

- JavaScript strings are **encoded in UTF-16**, allowing you to work with Unicode characters, including emojis and special symbols.
- To include special Unicode characters:
    
```jsx
let heart = "\u2764"; // Unicode for ♥
console.log(heart); // ♥
let smiley = "\u{1F600}"; // Unicode for 😀
console.log(smiley); // 😀
```
    
- Use the **`codePointAt()`** method to get the Unicode code point of a character:

```jsx
let str = "😀";
console.log(str.codePointAt(0)); // 128512
```