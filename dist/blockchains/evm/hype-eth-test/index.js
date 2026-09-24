"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HYPE_ETH_TEST = void 0;
const types_1 = require("../../../types");
exports.HYPE_ETH_TEST = {
    type: "native",
    id: "HYPE_ETH_TEST",
    name: "Hyperliquid Test",
    symbol: "HYPE",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 998,
    rpcUrl: "https://hyperliquid-testnet.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
