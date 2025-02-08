
### Clearing Objects to Free Memory
```js
let user = { name: "Alice", email: "alice@example.com" };
user = null; // Clears the object reference, allowing garbage collection
```

### Indicating a Missing Value in a Database
```js
let userProfile = { name: "Bob", bio: null, website: "https://bob.dev" };
if (userProfile.bio === null) {
  console.log("No bio available");
}
```

### API Responses: Handling `null` Values
```js
fetch("https://api.example.com/product/123")
  .then(response => response.json())
  .then(data => {
    console.log(data.price ?? "Price not available");
  });
```

### Preventing Crashes With Optional Chaining (`?.`)
```js
let user = null;
console.log(user?.name); // No error, just returns undefined
```

### UI Logic: Showing Placeholder Content
```js
let userProfile = { name: "Charlie", profilePicture: null };
let profilePic = userProfile.profilePicture ?? "default-avatar.png";
console.log(profilePic); // "default-avatar.png"
```

### Handling `null` in Forms (User Input)
```js
let userInput = { name: "David", phoneNumber: null };
if (userInput.phoneNumber === null) {
  console.log("No phone number provided");
}
```

### Handling `null` in GraphQL Queries
```js
const query = `
  {
    user(id: 1) {
      name
      email
      bio
    }
  }
`;
fetch("https://api.example.com/graphql", {
  method: "POST",
  body: JSON.stringify({ query })
})
  .then(res => res.json())
  .then(data => {
    console.log(data.user.bio ?? "No bio provided");
  });
```

### Using `null` for Resetting State in React
```js
const [selectedUser, setSelectedUser] = React.useState(null);
function closeUserModal() {
  setSelectedUser(null); // Closes the modal by resetting state
}
```

### Representing an Empty Value in JSON
```js
let user = { name: "Eve", age: 25, address: null };
let json = JSON.stringify(user);
console.log(json); // '{"name":"Eve","age":25,"address":null}'
```

### Indicating a Relationship That Doesn't Exist
```js
let employee = { name: "Frank", managerId: null };
```