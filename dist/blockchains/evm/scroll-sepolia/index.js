"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCROLL_SEPOLIA_TEST = void 0;
const types_1 = require("../../../types");
exports.SCROLL_SEPOLIA_TEST = {
    type: "native",
    id: "SCROLL_SEPOLIA_TEST",
    name: "Scroll Sepolia",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 534351,
    rpcUrl: "https://sepolia-rpc.scroll.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
