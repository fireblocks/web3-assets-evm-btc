"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOMNIA_TEST = void 0;
const types_1 = require("../../../types");
exports.SOMNIA_TEST = {
    type: "native",
    id: "SOMNIA_TEST",
    name: "Somnia Test",
    symbol: "SOM",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 50312,
    rpcUrl: "https://dream-rpc.somnia.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
