"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_AETH = void 0;
const types_1 = require("../../../types");
exports.ETH_AETH = {
    type: "native",
    id: "ETH-AETH",
    name: "Ethereum (Arbitrum)",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 42161,
    rpcUrl: "https://arb1.arbitrum.io/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
