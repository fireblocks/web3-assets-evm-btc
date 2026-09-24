"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SONGBIRD_LEGACY = void 0;
const types_1 = require("../../../types");
exports.SONGBIRD_LEGACY = {
    type: "native",
    id: "SONGBIRD_LEGACY",
    name: "Songbird Canary-Network (Legacy derivation)",
    symbol: "SON",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 19,
    rpcUrl: "https://songbird-api.flare.network/ext/C/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
