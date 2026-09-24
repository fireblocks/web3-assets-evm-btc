"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROBINHOOD_CHAIN_TESTNET_TEST = void 0;
const types_1 = require("../../../types");
exports.ROBINHOOD_CHAIN_TESTNET_TEST = {
    type: "native",
    id: "ROBINHOOD_CHAIN_TESTNET_TEST",
    name: "Robinhood Chain Testnet",
    symbol: "ROB",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 46630,
    rpcUrl: "https://rpc.testnet.chain.robinhood.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
