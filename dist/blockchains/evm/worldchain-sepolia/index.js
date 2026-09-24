"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORLDCHAIN_TEST = void 0;
const types_1 = require("../../../types");
exports.WORLDCHAIN_TEST = {
    type: "native",
    id: "WORLDCHAIN_TEST",
    name: "World Chain Sepolia",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 4801,
    rpcUrl: "https://worldchain-sepolia.g.alchemy.com/public",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
