function firstRepeatingElement(arr) {
  let checked = [];

  for (let i = 0; i < arr.length; i++) {
    if (checked.includes(arr[i])) {
      return arr[i];
    } else {
      checked.push(arr[i]);
    }
  }

  return undefined;
}

// Driver code - DO NOT MODIFY BELOW
// Run node script.js in the terminal.
// Each test case should log passed.
firstRepeatingElement([2, 5, 6, 8, 5, 2, 6]) === 5
  ? console.log("Test 1 passed")
  : console.log("Test 1 failed");
firstRepeatingElement([2, 3, 4, 5]) === undefined
  ? console.log("Test 2 passed")
  : console.log("Test 2 failed");
firstRepeatingElement([2, 5, 5, 2, 3, 5, 1, 2, 4]) === 5
  ? console.log("Test 3 passed")
  : console.log("Test 3 failed");
