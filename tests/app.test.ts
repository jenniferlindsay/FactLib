import { FactMachine, FactGenerator, getModifiedString } from "../src/app";

export class MockFactGenerator extends FactGenerator {
  constructor() {
    super(["my mocked fact"])
  }
}

describe("Testing FactMachine", () => {
  var factMachine: FactMachine
  var mockFactGenerator: MockFactGenerator
  // var stringModifier: StringModifier

  test("FactMachine.getFact() returns fact from FactGenerator", () => {
    mockFactGenerator = new MockFactGenerator()
    // stringModifier = new StringModifier()
    let expectedString = getModifiedString("my mocked fact")
    factMachine = new FactMachine(mockFactGenerator, getModifiedString);
    expect(factMachine.getRandomFact()).toBe(expectedString);
  });
});
