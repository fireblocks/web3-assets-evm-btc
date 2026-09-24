"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRONOS_TEST = void 0;
const types_1 = require("../../../types");
exports.CRONOS_TEST = {
    type: "native",
    id: "CRONOS_TEST",
    name: "Cronos Test",
    symbol: "CRO",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 338,
    rpcUrl: "https://endpoints.omniatech.io/v1/cronos/testnet/public",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
