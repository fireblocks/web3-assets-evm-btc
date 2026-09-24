"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHZ_CHZ = void 0;
const types_1 = require("../../../types");
exports.CHZ_CHZ = {
    type: "native",
    id: "CHZ_$CHZ",
    name: "Chiliz Legacy",
    symbol: "CHZ",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 88,
    rpcUrl: "https://explorer.chiliz.com/api",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
