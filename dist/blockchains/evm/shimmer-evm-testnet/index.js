"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMR_TEST = void 0;
const types_1 = require("../../../types");
exports.SMR_TEST = {
    type: "native",
    id: "SMR_TEST",
    name: "Shimmer EVM Testnet",
    symbol: "SMR",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 1073,
    rpcUrl: "https://json-rpc.evm.testnet.shimmer.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
