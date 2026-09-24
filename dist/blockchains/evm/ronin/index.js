"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RON = void 0;
const types_1 = require("../../../types");
exports.RON = {
    type: "native",
    id: "RON",
    name: "Ronin",
    symbol: "RON",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 2020,
    rpcUrl: "https://api.roninchain.com/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
