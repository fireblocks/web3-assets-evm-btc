"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRONOS = void 0;
const types_1 = require("../../../types");
exports.CRONOS = {
    type: "native",
    id: "CRONOS",
    name: "Cronos",
    symbol: "CRO",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 25,
    rpcUrl: "https://cronos-evm-rpc.publicnode.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
