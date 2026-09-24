"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MANTLE = void 0;
const types_1 = require("../../../types");
exports.MANTLE = {
    type: "native",
    id: "MANTLE",
    name: "Mantle",
    symbol: "MNT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 5000,
    rpcUrl: "https://rpc.mantle.xyz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
