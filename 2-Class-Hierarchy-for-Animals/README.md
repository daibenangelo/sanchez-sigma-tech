# 2. Class Hierarchy for Animals

## Instructions

1. There's a superclass created for you called `Animal` that has the following properties and methods:
   - `name` - The name of the animal.
   - `age` - The age of the animal.
   - `species` - The species of the animal.
   - `eat` - A method that returns `The <species> named <name> is eating.`.
   - `sleep` - A method that returns `The <species> named <name> is sleeping.`.
   - `reproduce` - A method that returns `The <species> named <name> is reproducing.`.
2. Create the following subclasses that **inherit** from the `Animal` class:
   - `Dog`
   - `Cat`
   - `Bird`
   - `Fish`
3. Each subclass should have its own unique properties and methods as follows:
   - `bark` - A method that belongs to the `Dog` class that returns `The dog named <name> is barking.`
   - `meow` - A method that belongs to the `Cat` class that returns `The cat named <name> is meowing.`
   - `fly` - A method that belongs to the `Bird` class that returns `The bird named <name> is flying.`
   - `swim` - A method that belongs to the `Fish` class that returns `The fish named <name> is swimming.`

**Example:**

```javascript
// Create some instances of the Animal subclasses:
const fido = new Dog("Fido", 5, "Golden Retriever");
const felix = new Cat("Felix", 3, "Tabby");
const tweety = new Bird("Tweety", 1, "Canary");
const nemo = new Fish("Nemo", 2, "Clownfish");

// Call the methods on the instances:
fido.eat(); // Should return 'The Golden Retriever named Fido is eating.'
fido.bark(); // Should return 'The dog named Fido is barking.'

felix.sleep(); // Should return 'The Tabby named Felix is sleeping.'
felix.meow(); // Should return 'The cat named Felix is meowing.'

tweety.reproduce(); // Should return 'The Canary named Tweety is reproducing.'
tweety.fly(); // Should return 'The bird named Tweety is flying.'

nemo.eat(); // Should return 'The Clownfish named Nemo is eating.'
nemo.swim(); // Should return 'The fish named Nemo is swimming.'
```

**Helpful Links:**

- [Classes | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Inheritance and the prototype chain | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
