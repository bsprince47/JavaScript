

## **Real-World Boolean Use Case**

### **a. Conditional Rendering**

- Show or hide elements in a UI based on a condition:
    
```jsx
let isAuthenticated = true;
if (isAuthenticated) {
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}
```
    

### **b. Toggles**

- Manage state (e.g., dark mode):
    
```jsx
let isDarkMode = false;
isDarkMode = !isDarkMode;
console.log(isDarkMode); // true
```
    

### **c. Form Validation**

- Validate user inputs:

```jsx
let isEmailValid = email.includes("@");
console.log(isEmailValid ? "Valid email" : "Invalid email");
```


## Boolean in Array Methods

### **a. Filter an Array**

- Filter based on Boolean conditions:
    
```jsx
let tasks = [
    { title: "Task 1", completed: true },
    { title: "Task 2", completed: false },
];
let completedTasks = tasks.filter(task => task.completed);
console.log(completedTasks); // [{ title: "Task 1", completed: true }]
```
    

### **b. Check All/Some Conditions**

- `every()` and `some()` methods:
    
```jsx
let ages = [18, 22, 30];
console.log(ages.every(age => age >= 18)); // true
console.log(ages.some(age => age < 18));  // false
```

## Boolean in Error Handling
- Use Booleans to check for errors:
    
```jsx
let isError = false;

try {
    // Code that may throw an error
} catch (error) {
    isError = true;
    console.log("An error occurred.");
}

if (!isError) {
    console.log("Operation successful!");
}
```

## Boolean Flags

- Track or control the flow of operations:
    
```jsx
let isProcessing = false;

function startProcess() {
    if (!isProcessing) {
    isProcessing = true;
    console.log("Process started!");
    // Simulate process completion
    setTimeout(() => (isProcessing = false), 1000);
    } else {
    console.log("Process already running!");
    }
}

startProcess(); // 'Process started!'
startProcess(); // 'Process already running!'
```

## **Boolean in Control Structures**

### **a. Conditional Statements**

- Booleans often drive conditional flows:
    
```jsx
let isPremiumUser = true;

if (isPremiumUser) {
    console.log("Access granted to premium features.");
} else {
    console.log("Upgrade to access premium features.");
}
```
    

### **b. Loops**

- Boolean values can control loops:

```jsx
let isRunning = true;
let counter = 0;

while (isRunning) {
    console.log(`Counter: ${counter}`);
    counter++;
    if (counter >= 5) isRunning = false; // Stop the loop
}
```

## **Boolean and DOM Manipulation**

### **a. Toggle Visibility**

- Show or hide elements based on a Boolean:
    
    ```jsx
    let isVisible = false;
    
    function toggleVisibility() {
      isVisible = !isVisible;
      document.querySelector("#myDiv").style.display = isVisible ? "block" : "none";
    }
    ```
    

### **b. Enable/Disable Input Fields**

- Control form elements:

```jsx
let isDisabled = true;

function toggleInput() {
    isDisabled = !isDisabled;
    document.querySelector("#myInput").disabled = isDisabled;
}
```

## **Boolean in API Responses**

### **a. Check Success Status**

- Many APIs return a Boolean to indicate success or failure:
    
```jsx
fetch("/api/data")
    .then(response => response.json())
    .then(data => {
    if (data.success) {
        console.log("Data retrieved successfully!");
    } else {
        console.log("Failed to fetch data.");
    }
    });
```
    

### **b. Validate User Permissions**

- Manage access control:
    
```jsx
let user = {
    isAdmin: false,
    canEdit: true,
};

if (user.isAdmin || user.canEdit) {
    console.log("User has permission to edit.");
} else {
    console.log("Permission denied.");
}
```

## Boolean in Event Listeners

- Use Boolean flags to manage event listeners efficiently:
    
```jsx
let isListening = false;

function startListening() {
    if (!isListening) {
    isListening = true;
    document.addEventListener("click", () => console.log("Clicked!"));
    }
}
```
    
## Boolean in Timing Functions

### a. Control Intervals

- Use Boolean flags to manage `setInterval` or `setTimeout`:
    
```jsx
let isRunning = false;
let interval;

function startTimer() {
    if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => console.log("Tick..."), 1000);
    }
}

function stopTimer() {
    if (isRunning) {
    isRunning = false;
    clearInterval(interval);
    }
}

startTimer();
setTimeout(stopTimer, 5000); // Stop after 5 seconds
```