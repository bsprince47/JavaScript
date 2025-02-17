# Object.preventExtensions(), Object.seal(), and Object.freeze()

## 1️⃣ Object.preventExtensions(obj)
🔹 Prevents adding new properties but allows modifying and deleting existing ones.

```js
const user = { name: "Alice" };

Object.preventExtensions(user);

user.age = 25; // ❌ Won't be added
delete user.name; // ✅ Allowed
user.name = "Bob"; // ✅ Allowed

console.log(user); // { name: "Bob" }
console.log(Object.isExtensible(user)); // false
```
#### Use Case:
✔ When you want to stop new properties from being added but still allow modifications.


## 2️⃣ Object.seal(obj)
🔹 Prevents adding and deleting properties but allows modifying existing ones.

```js
const car = { brand: "Tesla" };

Object.seal(car);

car.model = "Model 3"; // ❌ Won't be added
delete car.brand; // ❌ Won't be deleted
car.brand = "Ford"; // ✅ Allowed

console.log(car); // { brand: "Ford" }
console.log(Object.isSealed(car)); // true
```
#### Use Case:
✔ When you want to preserve the object's structure but still allow value updates.



## 3️⃣ Object.freeze(obj)
🔹 Completely locks the object—no adding, deleting, or modifying properties.

```js
const settings = { theme: "dark" };

Object.freeze(settings);

settings.mode = "light"; // ❌ Won't be added
delete settings.theme; // ❌ Won't be deleted
settings.theme = "light"; // ❌ Won't change

console.log(settings); // { theme: "dark" }
console.log(Object.isFrozen(settings)); // true
```
#### Use Case:
✔ When you want a fully immutable object that cannot be modified in any way.

