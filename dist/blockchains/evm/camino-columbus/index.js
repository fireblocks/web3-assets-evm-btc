"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAMINO_COLUMBUS_TEST = void 0;
const types_1 = require("../../../types");
exports.CAMINO_COLUMBUS_TEST = {
    type: "native",
    id: "CAMINO_COLUMBUS_TEST",
    name: "Camino Columbus",
    symbol: "CAM",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 501,
    rpcUrl: "https://columbus.camino.network/ext/bc/C/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
