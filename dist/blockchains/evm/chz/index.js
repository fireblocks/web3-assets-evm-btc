"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHZ = void 0;
const types_1 = require("../../../types");
exports.CHZ = {
    type: "native",
    id: "CHZ",
    name: "Chiliz Legacy Chain",
    symbol: "CHZ",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 99999,
    rpcUrl: "https://rpc.ankr.com/chiliz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
