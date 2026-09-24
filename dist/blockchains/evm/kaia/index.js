"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KLAY_KAIA = void 0;
const types_1 = require("../../../types");
exports.KLAY_KAIA = {
    type: "native",
    id: "KLAY_KAIA",
    name: "Kaia",
    symbol: "KAIA",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 8217,
    rpcUrl: "https://public-en.node.kaia.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
