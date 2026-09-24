"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPO = void 0;
const types_1 = require("../../../types");
exports.TEMPO = {
    type: "native",
    id: "TEMPO",
    name: "Tempo",
    symbol: "TEM",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 4217,
    rpcUrl: "https://tempo-mainnet.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
