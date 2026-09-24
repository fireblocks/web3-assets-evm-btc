"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DSETH_DEV = void 0;
const types_1 = require("../../../types");
exports.DSETH_DEV = {
    type: "native",
    id: "DSETH_DEV",
    name: "dSETH (Dev)",
    symbol: "DSE",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 19150319,
    rpcUrl: "https://dseth-dev.example.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
