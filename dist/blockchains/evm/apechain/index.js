"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APECHAIN = void 0;
const types_1 = require("../../../types");
exports.APECHAIN = {
    type: "native",
    id: "APECHAIN",
    name: "ApeChain",
    symbol: "APE",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 33139,
    rpcUrl: "https://api.apechain.com/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
