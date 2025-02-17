# Object.getPrototypeOf() vs. Object.setPrototypeOf()

## Object.getPrototypeOf(obj)
This method retrieves the prototype of an object.

```js
const car = {
    drive() {
        console.log("Driving...");
    }
};

const myCar = Object.create(car);

console.log(Object.getPrototypeOf(myCar));
// {drive: [Function: drive]}
```

## Object.setPrototypeOf(obj, prototype)
This method sets or changes the prototype of an object dynamically.
```js
const animal = {
    makeSound() {
        console.log("Some generic sound..");
    }
}

const dog = {
    bark() {
        console.log("Woof woof!");
    }
}


console.log(Object.getPrototypeOf(dog)); 
// Outputs: [Object: null prototype] {}

Object.setPrototypeOf(dog, animal);

dog.makeSound(); // Outputs: Some generic sound...
```


## Why Object.setPrototypeOf() is Not Recommended:
Although it works, Object.setPrototypeOf() is slow and can negatively impact performance. Instead of modifying prototypes dynamically, it's better to set them at object creation using Object.create().

```javascript
const dog = Object.create(animal);
dog.bark = function() {
  console.log("Woof woof!");
};

dog.makeSound(); // Outputs: Some generic sound...
```