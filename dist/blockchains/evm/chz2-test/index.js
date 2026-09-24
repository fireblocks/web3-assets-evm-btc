"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHZ2_TEST = void 0;
const types_1 = require("../../../types");
exports.CHZ2_TEST = {
    type: "native",
    id: "CHZ2_TEST",
    name: "Chiliz Chain Testnet",
    symbol: "CHZ2",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 88882,
    rpcUrl: "https://spicy-rpc.chiliz.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
