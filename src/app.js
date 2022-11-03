"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.FactMachine = exports.getModifiedString = exports.CatFactGenerator = exports.DogFactGenerator = exports.FactGenerator = void 0;
var lodash_1 = require("lodash");
var FactGenerator = /** @class */ (function () {
    function FactGenerator(facts) {
        this.facts = facts;
    }
    FactGenerator.prototype.generateFact = function () {
        return (0, lodash_1.sample)(this.facts);
    };
    return FactGenerator;
}());
exports.FactGenerator = FactGenerator;
var DogFactGenerator = /** @class */ (function (_super) {
    __extends(DogFactGenerator, _super);
    function DogFactGenerator() {
        var dogFacts = ["Dogs sweat through their paws only.", "Yawning is contagious — even for dogs.", "Dogs are not colorblind. They can see blue and yellow."];
        return _super.call(this, dogFacts) || this;
    }
    return DogFactGenerator;
}(FactGenerator));
exports.DogFactGenerator = DogFactGenerator;
var CatFactGenerator = /** @class */ (function (_super) {
    __extends(CatFactGenerator, _super);
    function CatFactGenerator() {
        var catFacts = ["The ridges on a cat's nose are as unique as a fingerprint.", "Male cats are more likely to be left-pawed, while female cats are more likely to be right-pawed.", "The oldest cat ever lived for 38 years."];
        return _super.call(this, catFacts) || this;
    }
    return CatFactGenerator;
}(FactGenerator));
exports.CatFactGenerator = CatFactGenerator;
function getModifiedString(text) {
    return "\x1B[34m" + "-".repeat(text.length + 4) + "\n\x1B[33m" + " ".repeat(2) + text + " ".repeat(2) + "\n\x1B[34m" + "-".repeat(text.length + 4) + "\x1B[37m";
}
exports.getModifiedString = getModifiedString;
var FactMachine = /** @class */ (function () {
    function FactMachine(factGenerator, getModifiedString) {
        this.factGenerator = factGenerator;
        this.getModifiedString = getModifiedString;
    }
    FactMachine.prototype.getRandomFact = function () {
        var fact = this.factGenerator.generateFact();
        return this.getModifiedString(fact);
    };
    return FactMachine;
}());
exports.FactMachine = FactMachine;
