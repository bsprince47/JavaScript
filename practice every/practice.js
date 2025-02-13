const person = {
    greet() {
        console.log("deer " + this.name);
    }
}
const user = {
    name: "random",
    __proto__: person
}

user.greet();
console.log(Object.getPrototypeOf(user) === person)