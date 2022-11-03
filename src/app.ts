import { sample } from "lodash";

export class FactGenerator {
  public facts: string[];
  constructor(facts: string[]) {
    this.facts = facts
  }
  public generateFact(): string {
    return sample(this.facts)
  }
}

export class DogFactGenerator extends FactGenerator {
  constructor() {
    let dogFacts: string[] = ["Dogs sweat through their paws only.", "Yawning is contagious — even for dogs.", "Dogs are not colorblind. They can see blue and yellow."];
    super(dogFacts)
  }
}

export class CatFactGenerator extends FactGenerator {
  constructor() {
    let catFacts: string[] = ["The ridges on a cat's nose are as unique as a fingerprint.", "Male cats are more likely to be left-pawed, while female cats are more likely to be right-pawed.", "The oldest cat ever lived for 38 years."]
    super(catFacts)
  }
}

export function getModifiedString(text: string) {
  return "\x1B[34m" + "-".repeat(text.length+4) + "\n\x1B[33m" + " ".repeat(2) + text + " ".repeat(2) + "\n\x1B[34m" + "-".repeat(text.length+4) + "\x1B[37m"
}

export class FactMachine {
  private factGenerator: FactGenerator;
  private getModifiedString;
  constructor(factGenerator: FactGenerator, getModifiedString) {
    this.factGenerator = factGenerator;
    this.getModifiedString = getModifiedString;
  }
  getRandomFact() {
    const fact = this.factGenerator.generateFact()
    return this.getModifiedString(fact)
  }
}

