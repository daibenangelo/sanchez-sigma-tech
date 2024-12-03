# 1. Make a Circle with OOP

Your task is to create a `Circle` class constructor that takes a radius as a parameter and has the following properties and methods:

- `radius` - The radius of the circle.
- `getArea` - A method that returns the area of the circle.
- `getCircumference` - A method that returns the circumference of the circle.

**Notes:**

- The formula for the area of a circle is `Math.PI * radius * radius`.
- The formula for the circumference of a circle is `2 * Math.PI * radius`.

**Example:**

```javascript
const circle1 = new Circle(1);
circle1.radius === 1; // Should return true
circle1.getArea() === 3.141592653589793; // Should return true
circle1.getCircumference() === 6.283185307179586; // Should return true
```

**Helpful Links:**

- [Classes | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Math.PI | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
