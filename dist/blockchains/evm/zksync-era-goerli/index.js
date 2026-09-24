"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_ZKSYNC_ERA_TEST = void 0;
const types_1 = require("../../../types");
exports.ETH_ZKSYNC_ERA_TEST = {
    type: "native",
    id: "ETH_ZKSYNC_ERA_TEST",
    name: "Ethereum (zkSync Era Goerli)",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 280,
    rpcUrl: "https://sepolia.era.zksync.dev",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
