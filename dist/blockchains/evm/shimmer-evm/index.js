"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMR_SMR = void 0;
const types_1 = require("../../../types");
exports.SMR_SMR = {
    type: "native",
    id: "SMR_SMR",
    name: "Shimmer EVM",
    symbol: "SMR",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 148,
    rpcUrl: "https://json-rpc.evm.shimmer.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
