## [[Prototype]] (Prototype Chain)
- Hidden internal property that links objects to other objects.
- Can be accessed using Object.getPrototypeOf(obj) or __proto__
- Used for inheritance between objects.

```js
const person = {
    greet() {
        console.log("deer");
    }
}
const user = {
    name: "random",
    __proto__: person
}

user.greet();
console.log(Object.getPrototypeOf(user) === person)
```

## .prototype (function prototype)
- Property of constructor functions (only for functions).
- Used to define methods that are shared across instances.
- Used in constructor functions and class-based inheritance.

```js
function User(name) {
    this.name = name;
}

User.prototype.greet = function() {
    console.log(`${this.name}`);
};

const user1 = new User("Alex");
user1.greet();

console.log(user1.__proto__ === User.prototype); // true
```

## Both
```js
function User(name) {
    this.name = name;
}

User.prototype.greet = function() {
    console.log(`${this.name}`);
};

const user1 = new User("Alex");

console.log(user1.__proto__ === User.prototype); // true
console.log(Object.getPrototypeOf(user1) === User.prototype) // true

user1.greet();
```




> [!NOTE]
> Instead of __proto__ use `Object.create()` for setting prototypes.

### Why __proto__ is Not Recommended:
Even though it works, it's not recommended to use __proto__ because:

1. Performance Issues – Directly modifying __proto__ can slow down prototype chain lookups, making the app less efficient.
2. Not Standardized for Object Creation – Object.create() is the official way to set prototypes.
3. Confusing and Hard to Debug – Modifying an object's prototype manually can lead to unexpected behavior, especially in large codebases.
4. Security Risks – If you're modifying __proto__ improperly, it can lead to prototype pollution, making objects inherit unwanted properties.