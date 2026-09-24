"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HEDERA_EVM = void 0;
const types_1 = require("../../../types");
exports.HEDERA_EVM = {
    type: "native",
    id: "HEDERA_EVM",
    name: "Hedera EVM",
    symbol: "HED",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 295,
    rpcUrl: "https://mainnet.hedera.api.hgraph.io/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
