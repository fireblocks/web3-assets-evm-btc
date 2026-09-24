"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TURBO_TESTNET = void 0;
const types_1 = require("../../../types");
exports.TURBO_TESTNET = {
    type: "native",
    id: "TURBO_TESTNET",
    name: "Turbo Testnet",
    symbol: "TUR",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 94323,
    rpcUrl: "https://rpc.example.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
