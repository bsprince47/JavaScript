# Object.getOwnPropertyDescriptor() vs. Object getOwnPropertyDescriptors()



## 1️⃣ Object.getOwnPropertyDescriptor(obj, prop)
Retrieves the descriptor for a specific property.

```js
const user = {};

Object.defineProperty(user, "name", {
  value: "Alice",
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));
/*
Outputs:
{
  value: 'Alice',
  writable: false,
  enumerable: true,
  configurable: false
}
*/
```

## 2️⃣ Object.getOwnPropertyDescriptors(obj)
Retrieves descriptors for all properties in an object.

```js
const person = {};

Object.defineProperties(person, {
  firstName: { value: "John", writable: false, enumerable: true },
  lastName: { value: "Doe", writable: true, enumerable: false }
});

console.log(Object.getOwnPropertyDescriptors(person));
/*
Outputs:
{
  firstName: {
    value: 'John',
    writable: false,
    enumerable: true,
    configurable: false
  },
  lastName: {
    value: 'Doe',
    writable: true,
    enumerable: false,
    configurable: false
  }
}
*/
```