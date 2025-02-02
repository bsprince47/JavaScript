# Boolean in Comparisons

### **a. Equality Operators**

- Strict equality (`===`) and loose equality (`==`):
    
    ```jsx
    console.log(5 === "5"); // false
    console.log(5 == "5");  // true
    ```
    

### **b. Relational Comparisons**

- Compare numbers, strings, or dates:
    
    ```jsx
    let isOlder = 30 > 25;
    console.log(isOlder); // true
    ```
    

### **c. Combining Comparisons**

- Use multiple conditions:
    
    ```jsx
    let age = 18;
    let isAdult = age >= 18 && age <= 60;
    console.log(isAdult); // true
    ```