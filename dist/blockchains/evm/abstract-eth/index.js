"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABSTRACT_ETH = void 0;
const types_1 = require("../../../types");
exports.ABSTRACT_ETH = {
    type: "native",
    id: "ABSTRACT_ETH",
    name: "Abstract",
    symbol: "ABS",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 2741,
    rpcUrl: "https://abstract.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
