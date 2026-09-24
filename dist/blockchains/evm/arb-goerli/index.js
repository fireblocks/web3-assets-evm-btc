"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARB_GOERLI = void 0;
const types_1 = require("../../../types");
exports.ARB_GOERLI = {
    type: "native",
    id: "ARB_GOERLI",
    name: "Arbitrum Goerli",
    symbol: "ARB",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 421613,
    rpcUrl: "https://goerli-rollup.arbitrum.io/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
