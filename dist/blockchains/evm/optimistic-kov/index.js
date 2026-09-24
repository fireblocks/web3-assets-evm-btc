"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPTIMISTIC_KOV = void 0;
const types_1 = require("../../../types");
exports.OPTIMISTIC_KOV = {
    type: "native",
    id: "OPTIMISTIC_KOV",
    name: "Optimism Testnet Kovan",
    symbol: "OPT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 69,
    rpcUrl: "https://kovan.optimism.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
