"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTR_TEST = void 0;
const types_1 = require("../../../types");
exports.ASTR_TEST = {
    type: "native",
    id: "ASTR_TEST",
    name: "Astar Shibuya",
    symbol: "ASTR",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 81,
    rpcUrl: "https://evm.shibuya.astar.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
