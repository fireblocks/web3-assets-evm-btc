"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TKX = void 0;
const types_1 = require("../../../types");
exports.TKX = {
    type: "native",
    id: "TKX",
    name: "TokenizeXchange",
    symbol: "TKX",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 18888,
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
