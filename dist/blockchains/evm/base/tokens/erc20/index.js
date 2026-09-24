"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20_TOKENS = exports.USDC_BASE = void 0;
var usdc_1 = require("./usdc");
Object.defineProperty(exports, "USDC_BASE", { enumerable: true, get: function () { return usdc_1.USDC_BASE; } });
const usdc_2 = require("./usdc");
// Array export for registry generation
exports.ERC20_TOKENS = [
    usdc_2.USDC_BASE,
];
