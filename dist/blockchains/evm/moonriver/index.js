"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOVR_MOVR = void 0;
const types_1 = require("../../../types");
exports.MOVR_MOVR = {
    type: "native",
    id: "MOVR_MOVR",
    name: "Moonriver",
    symbol: "MOVR",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 1285,
    rpcUrl: "https://rpc.api.moonriver.moonbeam.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
