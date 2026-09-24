"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HT_CHAIN_TEST = void 0;
const types_1 = require("../../../types");
exports.HT_CHAIN_TEST = {
    type: "native",
    id: "HT_CHAIN_TEST",
    name: "Huobi ECO Chain Testnet",
    symbol: "HT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 256,
    rpcUrl: "https://rpc.ankr.com/huobichain_testnet",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
