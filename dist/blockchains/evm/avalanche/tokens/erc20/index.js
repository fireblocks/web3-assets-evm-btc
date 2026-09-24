"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20_TOKENS = exports.USDC_AVAX = exports.USDT2_AVAX = void 0;
var usdt_1 = require("./usdt");
Object.defineProperty(exports, "USDT2_AVAX", { enumerable: true, get: function () { return usdt_1.USDT2_AVAX; } });
var usdc_1 = require("./usdc");
Object.defineProperty(exports, "USDC_AVAX", { enumerable: true, get: function () { return usdc_1.USDC_AVAX; } });
const usdt_2 = require("./usdt");
const usdc_2 = require("./usdc");
// Array export for registry generation
exports.ERC20_TOKENS = [
    usdt_2.USDT2_AVAX,
    usdc_2.USDC_AVAX,
];
