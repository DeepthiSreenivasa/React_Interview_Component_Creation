You have a product list:

const products = [
  { id: 1, name: "iPhone", price: 80000 },
  { id: 2, name: "Laptop", price: 120000 },
  { id: 3, name: "Headphones", price: 5000 },
  { id: 4, name: "Monitor", price: 15000 }
];

Build a React component that has:

Search: [____________]

Min Price: [____]
Max Price: [____]

iPhone       ₹80000
Laptop       ₹120000
...

Requirements:

Filter products by name.
Filter products by minimum and maximum price.
All filters should work together.
Don't mutate the original products array.
Show "No products found" when there are no matches.
Keep the filtering logic clean and avoid unnecessary re-renders.

Write the component from scratch.
