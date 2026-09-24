"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZKSYNC_ERA_TEST = void 0;
const types_1 = require("../../../types");
exports.ZKSYNC_ERA_TEST = {
    type: "native",
    id: "ZKSYNC_ERA_TEST",
    name: "zkSync Era Testnet",
    symbol: "ZKS",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 280,
    rpcUrl: "https://rpc.example.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
