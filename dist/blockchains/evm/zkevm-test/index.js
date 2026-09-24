"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZKEVM_TEST = void 0;
const types_1 = require("../../../types");
exports.ZKEVM_TEST = {
    type: "native",
    id: "ZKEVM_TEST",
    name: "zkEVM Testnet",
    symbol: "ZKE",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 1442,
    rpcUrl: "https://endpoints.omniatech.io/v1/polygon-zkevm/testnet/public",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
