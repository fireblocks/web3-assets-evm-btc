"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAMINO = void 0;
const types_1 = require("../../../types");
exports.CAMINO = {
    type: "native",
    id: "CAMINO",
    name: "Camino",
    symbol: "CAM",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 500,
    rpcUrl: "https://api.camino.network/ext/bc/C/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
