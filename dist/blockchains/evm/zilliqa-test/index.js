"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZILLIQA_TEST = void 0;
const types_1 = require("../../../types");
exports.ZILLIQA_TEST = {
    type: "native",
    id: "ZILLIQA_TEST",
    name: "Zilliqa EVM Test",
    symbol: "ZIL",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 33101,
    rpcUrl: "https://api.testnet.zilliqa.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
