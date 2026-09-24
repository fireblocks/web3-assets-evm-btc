"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZKSYNC_ERA_SEPOLIA = void 0;
const types_1 = require("../../../types");
exports.ZKSYNC_ERA_SEPOLIA = {
    type: "native",
    id: "ZKSYNC_ERA_SEPOLIA",
    name: "zkSync Era Sepolia",
    symbol: "ZKS",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 300,
    rpcUrl: "https://endpoints.omniatech.io/v1/zksync-era/sepolia/public",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
