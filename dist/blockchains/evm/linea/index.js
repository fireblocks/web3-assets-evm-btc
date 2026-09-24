"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LINEA = void 0;
const types_1 = require("../../../types");
exports.LINEA = {
    type: "native",
    id: "LINEA",
    name: "Linea",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 59144,
    rpcUrl: "https://rpc.linea.build",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
