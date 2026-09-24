"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLAST = void 0;
const types_1 = require("../../../types");
exports.BLAST = {
    type: "native",
    id: "BLAST",
    name: "Blast",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 81457,
    rpcUrl: "https://rpc.blast.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
