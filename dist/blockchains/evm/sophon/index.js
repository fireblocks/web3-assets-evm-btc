"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOPHON = void 0;
const types_1 = require("../../../types");
exports.SOPHON = {
    type: "native",
    id: "SOPHON",
    name: "Sophon",
    symbol: "SOP",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 50104,
    rpcUrl: "https://rpc.sophon.xyz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
