## Basic Object Method
use this to access object properties
```js
const user = {
    name: "random1",
    greet: function() {
        console.log("Asslam u Alaikum" + this.name);
    }
}

user.greet();
```

## Shorter ES6 Method Syntax
```js
const user = {
    name: "Alex",
    greet() {
        console.log(`Hellow, my name is ${this.name}`);
    }
};

user.greet();
```

difference is in greet();

## Using this Inside Methods
this refers to the object itself.
```js
const user = {
    name: "random1",
    age: 25,
    details() {
        return `${this.name} is ${this.age} years old.`;
    }
};

console.log(user.details());
```

## Arrow Functions & this Issue
Arrow functions dont bind this, so avoid using them for object methods.
```js
const user {
    name: "random1",
    greet: () => {
        console.log(`Assalam u Alaikum is ${this.name}`);
    }
};

user.great(); // Undefined (wrong "this")
```

