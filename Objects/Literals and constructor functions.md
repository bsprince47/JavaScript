## Objet Literals
An object literal is the simplest way to create an object using only curly brackets {}.
```js
const user = {
    name: "random",
    age: 25,
    greet: function() {
        console.log("Assalam u Alaikum, my name is " + this.name)
    }
};

user.greet(); // Assalam u Alaikum, my name is random
```

## Constructor Function
A constructor function is used to create multiple instances of an object with shared properties and methods.

```js
function User(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Assalam u Alaikum " + this.name);
    }
}

const user1 = new User("Microsoft", 25);
const user2 = new User("Google", 30);

user1.greet(); // Assalam u Alaikum, Microsoft
user2.greet(); // Assalam u Alaikum, Google
```

> [!TIP]
> Use Prototypes for Efficiency

## Prototypes
Instead of defining functions inside the constructor (which duplicates them for each instance), use prototypes.

```js
function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.greet = function() {
    console.log("Assalam u Alaikum" + this.name);
}

const user1 = new User("Google", 25);
user1.greet();
```

## constructor push in Array
```js
function User(name, age) {
    this.name = name;
    this.age = age;
}

const users = [];
users.push(new User("Random1",25))
users.push(new User("Random2",30))

console.log(users);
```