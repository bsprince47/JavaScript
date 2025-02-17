# Object.crate()

this is a cool method in JavaScript that lets you create a new object with a specified prototyp. It's like saying, "Hey, here's new object, but I want it to inehrit form this other object!" This methods is super handy for when you want to set up prototype chains manually.

## How It Works
`Object.create()` creates a new object and links it to a prototype. You can also pass properties to new object.
```js
const person = {
    greet() {
        console.log("Hi");
    }
}

const john = Object.create(person);
john.greet(); // Hi
```

## Prototype Chaining
When you try to access a property on an object, JavaScript will first check if it exists on the object itself. If it doesn't, JavaScript looks up the prototype chain, checking the object's prototype, then the prototype's prototype, and so on. This chain continues until it finds the property or reaches null (if no prototype is set).
```js
const animal = {
    speak() {
        console.log("Animal speaks");
    }
};

const dog = Object.create(animal);
dog.bark = function() {
    console.log("Bark bark!");
};

dog.speak(); // Animal speaks
dog.bark(); // Bark bark!
```


> [!NOTE]
> Instead of __proto__ use `Object.create()` for setting prototypes.