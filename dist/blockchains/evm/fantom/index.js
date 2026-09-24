"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FTM_FANTOM = void 0;
const types_1 = require("../../../types");
exports.FTM_FANTOM = {
    type: "native",
    id: "FTM_FANTOM",
    name: "Fantom",
    symbol: "FTM",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 250,
    rpcUrl: "https://rpcapi.fantom.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
