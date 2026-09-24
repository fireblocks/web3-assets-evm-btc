"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INK_ETH_TEST = void 0;
const types_1 = require("../../../types");
exports.INK_ETH_TEST = {
    type: "native",
    id: "INK_ETH_TEST",
    name: "Ink Sepolia Test",
    symbol: "INK",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 763373,
    rpcUrl: "https://ink-sepolia.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
