"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOTANIX_ETH_TEST = void 0;
const types_1 = require("../../../types");
exports.BOTANIX_ETH_TEST = {
    type: "native",
    id: "BOTANIX_ETH_TEST",
    name: "Botanix Testnet",
    symbol: "BOT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 3636,
    rpcUrl: "https://rpc.ankr.com/botanix_testnet",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
