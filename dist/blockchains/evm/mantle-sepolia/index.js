"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MANTLE_TEST = void 0;
const types_1 = require("../../../types");
exports.MANTLE_TEST = {
    type: "native",
    id: "MANTLE_TEST",
    name: "Mantle Sepolia",
    symbol: "MNT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 5003,
    rpcUrl: "https://rpc.sepolia.mantle.xyz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
