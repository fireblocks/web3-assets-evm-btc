"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_AETH_SEPOLIA = void 0;
const types_1 = require("../../../types");
exports.ETH_AETH_SEPOLIA = {
    type: "native",
    id: "ETH-AETH_SEPOLIA",
    name: "Ethereum (Arbitrum Sepolia)",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 421614,
    rpcUrl: "https://sepolia-rollup.arbitrum.io/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
