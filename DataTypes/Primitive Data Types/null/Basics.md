## What Exactly Is null?
null is a primitive value that represents the intentional absence of an object or value. It is commonly used when a variable is expected to hold an object but currently has no value.

Unlike undefined, which means "not assigned," null is an explicit assignment, meaning the developer intentionally set the variable to have no value.

## Historical Quirk: typeof null === "object"
One of JavaScript’s longest-standing bugs is that typeof null returns "object". This is because of how JavaScript was originally implemented.

### Why does typeof null return "object"?
JavaScript represents data types as binary tags internally:

Objects are identified with a binary prefix of 000.
null was incorrectly assigned the same prefix (000), making JavaScript think it is an object.

### Will this ever be fixed?
No. Since millions of JavaScript applications depend on this behavior, changing it would break existing code. So, it’s kept as a quirk.

#### Alternative Check: Instead of typeof, use strict equality (===) to check for null:

```js
let x = null;
console.log(x === null); // true ✅ (Correct way to check)
```

## Differences Between `null` and `undefined`  
| Feature              | null (Empty Value)                          | undefined (Not Assigned)                     |
|----------------------|---------------------------------------------|----------------------------------------------|
| Type                 | Primitive (typeof null === "object")        | Primitive (typeof undefined === "undefined") |
| Meaning              | Intentional absence of value                | Variable exists but has no assigned value    |
| Set by Developer?    | Yes, explicitly set as null                 | Usually happens when a variable is declared but not assigned |
| Example Usage        | `let user = null;` (User object exists but has no value) | `let age; console.log(age); // undefined`    |


## Checking for null Properly
The best way to check if a variable is null

```js
if (variable === null) {
  console.log("Variable is null");
}
```

Avoid using typeof because of the "object" issue.

To check for both null and undefined (since they both represent "no value"), use:

```js
if (variable == null) { // Loose equality (==) checks for both null and undefined
  console.log("Variable is either null or undefined");
}
```

Or use:

```js
if (variable === null || variable === undefined) {
  console.log("Variable is either null or undefined");
}
```

## Use Cases of null
### Default Placeholder for Objects
Sometimes, null is used to indicate that an object or value should exist but hasn’t been set yet.

```js
let user = null; // User object will be assigned later
// Later in the code...
user = { name: "Alice", age: 25 };
```

### Resetting a Variable
If you want to "clear" a variable instead of deleting it:

```js
let user = { name: "Alice" };
user = null; // User data is reset, but variable still exists
```
This can help free memory in large applications.

## Function Returns null When No Valid Result Exists
```js
function findUser(username) {
  let users = ["alice", "bob"];
  return users.includes(username) ? username : null;
}

console.log(findUser("alice")); // "alice"
console.log(findUser("eve"));   // null (User not found)
```
Here, null is used as a signal that no valid result was found.

## Interaction of null With Other Data Types
### Arithmetic Operations With null
null is converted to 0 in mathematical operations:

```js
console.log(null + 1); // 1
console.log(null * 5); // 0
console.log(null - 10); // -10
console.log(10 / null); // Infinity (10 / 0)
```
So, JavaScript treats null as 0 when used in math.

### Comparison With Other Values
```js
console.log(null == 0);  // false
console.log(null > 0);   // false
console.log(null >= 0);  // true (Weird behavior!)
```
This happens because:

- null is converted to 0 in numeric comparisons.
- But null == 0 is false because == does not convert null to 0.
### Using null in Boolean Contexts
null is falsy in boolean checks:

```js
if (null) {
  console.log("This won't run");
} else {
  console.log("null is falsy"); // ✅ Runs
}
```
### Handling null Properly
#### Using Default Values With the Nullish Coalescing Operator (??)
?? returns the right-hand value only if the left-hand value is null or undefined.

```js
let username = null;
let displayName = username ?? "Guest"; // "Guest" (default value)
console.log(displayName);
```
This is better than || because || also treats 0 and "" as falsy.

#### Avoiding null Errors With Optional Chaining (?.)
```js
let user = null;
console.log(user?.name); // undefined (Does NOT throw an error)
```
Without ?., accessing user.name would throw an error.

## Should You Use null in JavaScript?
JavaScript itself rarely assigns null automatically (it usually gives undefined). So, when should you use null?

- ✅ Use null when you want to explicitly indicate that a value is missing.  
- ❌ Avoid overusing null—sometimes undefined is better for "not set" values.

