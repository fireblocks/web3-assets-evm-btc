"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BSC_TEST = void 0;
const types_1 = require("../../../types");
exports.BSC_TEST = {
    type: "native",
    id: "BSC_TEST",
    name: "BNB Smart Chain Testnet",
    symbol: "BSC",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 97,
    rpcUrl: "https://bsc-testnet.blockpi.network/v1/rpc/public",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
