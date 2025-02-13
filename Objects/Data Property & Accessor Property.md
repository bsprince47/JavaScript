## Data Properties (Regular Properties) 
```js
const user = {
    name: "random",
    age: 25
};

console.log(user.name);
user.age = 30;
console.log(user.age); // 30
```

## Accessor Properties (Getters & Setters)
```js
const User = {
    firstName = "random1",
    lastName = "random2",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        [this.firstName, this.lastName] = value.split[" "];
    }
};

console.log(user.fullName);
user.fullName = "Random properly";

console.log(user.firstName);
console.log(user.lastName);

```

## Real Use Case
```js
const user = {
  firstName: "alex",
  lastName: "mason",
  _password: "secret123", // Private property (convention: _password)
  _email: "alex@example.com",

  // Getter: Format full name
  get fullName() {
    return `${this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1)} ` +
           `${this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1)}`;
  },

  // Getter: Hide password when accessed
  get password() {
    return "****"; // Prevents direct access
  },

  // Setter: Validate password before setting
  set password(newPass) {
    if (newPass.length < 8) {
      console.log("Password must be at least 8 characters long.");
    } else {
      this._password = newPass;
      console.log("Password updated successfully!");
    }
  },

  // Setter: Validate email format
  set email(newEmail) {
    if (/^\S+@\S+\.\S+$/.test(newEmail)) {
      this._email = newEmail;
      console.log("Email updated successfully!");
    } else {
      console.log("Invalid email format.");
    }
  },

  get email() {
    return this._email;
  }
};

console.log(user.fullName); // Alex Mason (Auto-formatted)
console.log(user.password); // **** (Hides actual password)

user.password = "short";   // Password must be at least 8 characters long.
user.password = "newsecurepass"; // Password updated successfully!

user.email = "invalid"; // Invalid email format.
user.email = "new@example.com"; // Email updated successfully!
console.log(user.email); // new@example.com

```