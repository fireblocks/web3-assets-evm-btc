"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLASMA = void 0;
const types_1 = require("../../../types");
exports.PLASMA = {
    type: "native",
    id: "PLASMA",
    name: "Plasma",
    symbol: "PLA",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 9745,
    rpcUrl: "https://plasma.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
