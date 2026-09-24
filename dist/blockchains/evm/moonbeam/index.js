"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLMR_GLMR = void 0;
const types_1 = require("../../../types");
exports.GLMR_GLMR = {
    type: "native",
    id: "GLMR_GLMR",
    name: "Moonbeam",
    symbol: "GLMR",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 1284,
    rpcUrl: "https://rpc.api.moonbeam.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
