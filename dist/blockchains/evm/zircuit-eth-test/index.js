"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZIRCUIT_ETH_TEST = void 0;
const types_1 = require("../../../types");
exports.ZIRCUIT_ETH_TEST = {
    type: "native",
    id: "ZIRCUIT_ETH_TEST",
    name: "Zircuit Testnet",
    symbol: "ZIR",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 48899,
    rpcUrl: "https://rpc.example.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
