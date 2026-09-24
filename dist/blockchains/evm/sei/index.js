"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEI = void 0;
const types_1 = require("../../../types");
exports.SEI = {
    type: "native",
    id: "SEI",
    name: "Sei",
    symbol: "SEI",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 1329,
    rpcUrl: "https://sei.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
