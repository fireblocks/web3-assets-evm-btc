"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOTANIX_ETH = void 0;
const types_1 = require("../../../types");
exports.BOTANIX_ETH = {
    type: "native",
    id: "BOTANIX_ETH",
    name: "Botanix Mainnet",
    symbol: "BOT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 3637,
    rpcUrl: "https://rpc.ankr.com/botanix_mainnet",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
