"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NERO = void 0;
const types_1 = require("../../../types");
exports.NERO = {
    type: "native",
    id: "NERO",
    name: "NERO",
    symbol: "NERO",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 1689,
    rpcUrl: "https://rpc.nerochain.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
