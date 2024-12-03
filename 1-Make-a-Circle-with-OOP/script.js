class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

// Driver code - DO NOT MODIFY BELOW
// Run node script.js in the terminal.
// Each test case should log passed.
const circle = new Circle(1);
circle.radius === 1
  ? console.log("Test 1 passed")
  : console.log("Test 1 failed");
circle.getArea() === 3.141592653589793
  ? console.log("Test 2 passed")
  : console.log("Test 2 failed");
circle.getCircumference() === 6.283185307179586
  ? console.log("Test 3 passed")
  : console.log("Test 3 failed");
