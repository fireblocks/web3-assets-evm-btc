"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PEAQ = void 0;
const types_1 = require("../../../types");
exports.PEAQ = {
    type: "native",
    id: "PEAQ",
    name: "Peaq",
    symbol: "PEAQ",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 3338,
    rpcUrl: "https://quicknode1.peaq.xyz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
