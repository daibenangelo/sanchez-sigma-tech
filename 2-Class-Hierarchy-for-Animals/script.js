class Animal {
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  eat() {
    return `The ${this.species} named ${this.name} is eating.`;
  }

  sleep() {
    return `The ${this.species} named ${this.name} is sleeping.`;
  }

  reproduce() {
    return `The ${this.species} named ${this.name} is reproducing.`;
  }
}

// Write your code here

class Dog extends Animal {
  bark() {
    return `The dog named ${this.name} is barking.`;
  }
}

class Cat extends Animal {
  meow() {
    return `The cat named ${this.name} is meowing.`;
  }
}

class Bird extends Animal {
  fly() {
    return `The bird named ${this.name} is flying.`;
  }
}

class Fish extends Animal {
  swim() {
    return `The fish named ${this.name} is swimming.`;
  }
}

// Driver code - DO NOT MODIFY BELOW
// Run node script.js in the terminal.
// Each test case should log passed.
const fido = new Dog("Fido", 5, "Golden Retriever");
const felix = new Cat("Felix", 3, "Tabby");
const tweety = new Bird("Tweety", 1, "Canary");
const nemo = new Fish("Nemo", 2, "Clownfish");

// Call the methods on the instances:
fido.eat() === "The Golden Retriever named Fido is eating."
  ? console.log("Test 1 passed")
  : console.log("Test 1 failed");
fido.bark() === "The dog named Fido is barking."
  ? console.log("Test 2 passed")
  : console.log("Test 2 failed");

felix.sleep() === "The Tabby named Felix is sleeping."
  ? console.log("Test 3 passed")
  : console.log("Test 3 failed");
felix.meow() === "The cat named Felix is meowing."
  ? console.log("Test 4 passed")
  : console.log("Test 4 failed");

tweety.reproduce() === "The Canary named Tweety is reproducing."
  ? console.log("Test 5 passed")
  : console.log("Test 5 failed");
tweety.fly() === "The bird named Tweety is flying."
  ? console.log("Test 6 passed")
  : console.log("Test 6 failed");

nemo.eat() === "The Clownfish named Nemo is eating."
  ? console.log("Test 7 passed")
  : console.log("Test 7 failed");
nemo.swim() === "The fish named Nemo is swimming."
  ? console.log("Test 8 passed")
  : console.log("Test 8 failed");
