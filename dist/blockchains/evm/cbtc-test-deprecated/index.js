"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cBTC_TEST_DEPRECATED = void 0;
const types_1 = require("../../../types");
exports.cBTC_TEST_DEPRECATED = {
    type: "native",
    id: "cBTC_TEST_DEPRECATED",
    name: "Citrea Bitcoin (Test)",
    symbol: "CBT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 5115,
    rpcUrl: "https://rpc.example.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
