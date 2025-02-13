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