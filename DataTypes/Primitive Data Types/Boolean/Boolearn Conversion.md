# Boolearn Conversion in JavaScript

**Truthy and Falsy values**: Non-Boolean values can be converted to Boolean using `Boolean()` or `!!`.

- **Falsy values**: `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`
- **Truthy values**: Anything else (e.g., `"Hello"`, `42`, `[]`, `{}`)

```jsx
console.log(Boolean("")); // false
console.log(Boolean(42)); // true
console.log(!!"text");    // true
```