"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MORPH = void 0;
const types_1 = require("../../../types");
exports.MORPH = {
    type: "native",
    id: "MORPH",
    name: "Morph",
    symbol: "MOR",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 2818,
    rpcUrl: "https://rpc.morphl2.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
