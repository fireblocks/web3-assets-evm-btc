"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZILLIQA = void 0;
const types_1 = require("../../../types");
exports.ZILLIQA = {
    type: "native",
    id: "ZILLIQA",
    name: "Zilliqa EVM Mainnet",
    symbol: "ZIL",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 32769,
    rpcUrl: "https://api.zilliqa.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
