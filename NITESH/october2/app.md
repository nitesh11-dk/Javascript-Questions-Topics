### Short Note on Generator Functions with E-commerce Example

A **generator function** in JavaScript creates an iterator that can yield values one at a time and can pause its execution using the `yield` keyword. It’s useful for handling large datasets or sequences, as values are only produced when needed, saving memory and improving performance.

#### Key Features:
1. **Defined with `function*`:**  
   Generators are created using the `function*` syntax.
   
2. **`yield` keyword:**  
   Instead of returning a value and ending the function, `yield` pauses the function and returns a value. The function can be resumed with `.next()`.

3. **Lazy Evaluation:**  
   Generators produce values only when needed.

#### Example 1: Simple Generator
```javascript
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const numbers = numberGenerator();

console.log(numbers.next().value); // Output: 1
console.log(numbers.next().value); // Output: 2
console.log(numbers.next().value); // Output: 3
```

---

### E-commerce Example: Product Recommendations

Imagine an e-commerce website that recommends products based on user activity. Instead of loading all recommended products at once, which could slow down the page, you can use a generator to display products one by one.

#### Example Code:
```javascript
function* productRecommendations() {
    yield "Product 1: Running Shoes";
    yield "Product 2: Sneakers";
    yield "Product 3: Formal Shoes";
    yield "Product 4: Sandals";
}

const products = productRecommendations();

// Fetching and displaying products one by one
console.log(products.next().value); // Output: Product 1: Running Shoes
console.log(products.next().value); // Output: Product 2: Sneakers
console.log(products.next().value); // Output: Product 3: Formal Shoes
```

#### Use Case:
In an e-commerce application, when a user scrolls down the page, the generator can be used to fetch and display the next product without loading all products at once. This reduces memory usage and improves the app’s performance. The `.next()` method fetches the next product when needed, creating a smooth and efficient experience.