"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTR_ASTR = void 0;
const types_1 = require("../../../types");
exports.ASTR_ASTR = {
    type: "native",
    id: "ASTR_ASTR",
    name: "Astar",
    symbol: "ASTR",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 592,
    rpcUrl: "https://evm.astar.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
