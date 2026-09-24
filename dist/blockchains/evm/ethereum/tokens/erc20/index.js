"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20_TOKENS = exports.USDC = exports.USDT_ERC20 = void 0;
var usdt_1 = require("./usdt");
Object.defineProperty(exports, "USDT_ERC20", { enumerable: true, get: function () { return usdt_1.USDT_ERC20; } });
var usdc_1 = require("./usdc");
Object.defineProperty(exports, "USDC", { enumerable: true, get: function () { return usdc_1.USDC; } });
const usdt_2 = require("./usdt");
const usdc_2 = require("./usdc");
// Array export for registry generation
exports.ERC20_TOKENS = [
    usdt_2.USDT_ERC20,
    usdc_2.USDC,
];
