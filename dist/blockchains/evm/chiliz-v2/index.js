"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHZ_CHZ2 = void 0;
const types_1 = require("../../../types");
exports.CHZ_CHZ2 = {
    type: "native",
    id: "CHZ_CHZ2",
    name: "Chiliz Chain",
    symbol: "CHZ",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 88888,
    rpcUrl: "https://rpc.ankr.com/chiliz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
