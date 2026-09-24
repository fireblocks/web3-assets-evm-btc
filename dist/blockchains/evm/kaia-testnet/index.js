"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KLAY_KAIA_TEST = void 0;
const types_1 = require("../../../types");
exports.KLAY_KAIA_TEST = {
    type: "native",
    id: "KLAY_KAIA_TEST",
    name: "Kaia Kairos",
    symbol: "KAIA",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 1001,
    rpcUrl: "https://public-en-kairos.node.kaia.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
