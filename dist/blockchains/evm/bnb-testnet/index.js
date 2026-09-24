"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BNB_TEST = void 0;
const types_1 = require("../../../types");
exports.BNB_TEST = {
    type: "native",
    id: "BNB_TEST",
    name: "BNB Smart Chain Testnet",
    symbol: "BNB",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 97,
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
