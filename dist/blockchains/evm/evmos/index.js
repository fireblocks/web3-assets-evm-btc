"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVMOS = void 0;
const types_1 = require("../../../types");
exports.EVMOS = {
    type: "native",
    id: "EVMOS",
    name: "EVMOS",
    symbol: "EVMOS",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 9001,
    rpcUrl: "https://evmos-evm.publicnode.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
