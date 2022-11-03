"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.getModifiedString = exports.DogFactGenerator = exports.CatFactGenerator = exports.FactMachine = void 0;
var app_1 = require("./app");
__createBinding(exports, app_1, "FactMachine");
__createBinding(exports, app_1, "CatFactGenerator");
__createBinding(exports, app_1, "DogFactGenerator");
__createBinding(exports, app_1, "getModifiedString");
