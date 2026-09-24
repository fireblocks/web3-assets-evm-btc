"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLUME = void 0;
const types_1 = require("../../../types");
exports.PLUME = {
    type: "native",
    id: "PLUME",
    name: "Plume",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 98865,
    rpcUrl: "https://rpc.plumenetwork.xyz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
