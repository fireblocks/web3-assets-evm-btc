"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_ZKSYNC_ERA = void 0;
const types_1 = require("../../../types");
exports.ETH_ZKSYNC_ERA = {
    type: "native",
    id: "ETH_ZKSYNC-ERA",
    name: "Ethereum (zkSync Era)",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 324,
    rpcUrl: "https://mainnet.era.zksync.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
