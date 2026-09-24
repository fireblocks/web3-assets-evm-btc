"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOMNIA = void 0;
const types_1 = require("../../../types");
exports.SOMNIA = {
    type: "native",
    id: "SOMNIA",
    name: "Somnia",
    symbol: "SOM",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 5031,
    rpcUrl: "https://somnia-rpc.publicnode.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
