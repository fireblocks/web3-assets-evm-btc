"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OMNI_EVM_TEST = void 0;
const types_1 = require("../../../types");
exports.OMNI_EVM_TEST = {
    type: "native",
    id: "OMNI_EVM_TEST",
    name: "Omni EVM Testnet",
    symbol: "OMNI",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 164,
    rpcUrl: "https://omega.omni.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
