"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20_TOKENS = exports.USDC_BNB = exports.USDT_BNB = void 0;
var usdt_1 = require("./usdt");
Object.defineProperty(exports, "USDT_BNB", { enumerable: true, get: function () { return usdt_1.USDT_BNB; } });
var usdc_1 = require("./usdc");
Object.defineProperty(exports, "USDC_BNB", { enumerable: true, get: function () { return usdc_1.USDC_BNB; } });
const usdt_2 = require("./usdt");
const usdc_2 = require("./usdc");
// Array export for registry generation
exports.ERC20_TOKENS = [
    usdt_2.USDT_BNB,
    usdc_2.USDC_BNB,
];
