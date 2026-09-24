"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20_TOKENS = exports.USDC_POL = exports.USDT_POL = void 0;
var usdt_1 = require("./usdt");
Object.defineProperty(exports, "USDT_POL", { enumerable: true, get: function () { return usdt_1.USDT_POL; } });
var usdc_1 = require("./usdc");
Object.defineProperty(exports, "USDC_POL", { enumerable: true, get: function () { return usdc_1.USDC_POL; } });
const usdt_2 = require("./usdt");
const usdc_2 = require("./usdc");
// Array export for registry generation
exports.ERC20_TOKENS = [
    usdt_2.USDT_POL,
    usdc_2.USDC_POL,
];
