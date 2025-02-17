# Object.defineProperty() vs. Object.defineProperties()

## 1️⃣ Object.defineProperty()
Thsi methods defines a single property with specific attributes like writable, enumerable, and configurable.

```js
const user = {};

Object.defineProperty(user, "name", {
    value : "Alice",
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(user.name); // Alice

user.name = "Best";
console.log(user.name) // Alce
```
### Key Takeaways
- writable: false → Property value cannot be changed.
- enumerable: true → Property shows up in loops like for...in or Object.keys().
- configurable: false → Property cannot be deleted or redefined.



## 2️⃣ Object.defineProperties()
This method lets you define multiple properties at once.
```js
const person = {};
Object.defineProperties(person, {
    firstName: {
        value: "John",
        writable: true
    },
     lastName: {
        value: "Doe",
        writable: false
    },
    age: {
        value: 30,
        enumerable: true
    }
})

console.log(person.firstName); // Outputs: John
console.log(person.lastName); // Outputs: Doe

person.lastName = "Smith"; // Will not change because writable: false
console.log(person.lastName); // Still "Doe"

console.log(Object.keys(person)); // Outputs: ["age"] (since only `age` is enumerable)
```


## Practical Example: Making an Immutable Object
```js
const user = {};

Object.defineProperties(user, {
  id: { value: 123, writable: false, configurable: false },
  username: { value: "john_doe", writable: false },
  password: { value: "hashed_password", enumerable: false }
});

console.log(Object.keys(user)); // Outputs: ["username"] (password is hidden)
user.id = 456; // Won't change
delete user.id; // Won't work
console.log(user.id); // Still 123
```