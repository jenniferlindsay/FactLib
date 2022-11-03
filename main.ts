// example main

const FactLib = require("./src/FactLib");
const readline = require("readline")

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Would you like a cat fact or a dog fact? (c/d) ", function(userInput) {
  rl.close();

  if (userInput == "c" || userInput == "cat") {
    var factGenerator = new FactLib.CatFactGenerator();
  }
  else if (userInput == "d" || userInput == "dog") {
    var factGenerator = new FactLib.DogFactGenerator();
  }
  else {
    console.error("Bad input")
    return
  }

  const factMachine = new FactLib.FactMachine(factGenerator, FactLib.getModifiedString);
  console.log(factMachine.getRandomFact());
});
