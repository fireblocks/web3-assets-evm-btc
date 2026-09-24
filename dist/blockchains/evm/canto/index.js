"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CANTO = void 0;
const types_1 = require("../../../types");
exports.CANTO = {
    type: "native",
    id: "CANTO",
    name: "Canto",
    symbol: "CANTO",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 7700,
    rpcUrl: "https://canto.gravitychain.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
