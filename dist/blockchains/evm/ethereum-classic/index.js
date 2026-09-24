"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETC_TEST = exports.ETC = void 0;
const types_1 = require("../../../types");
exports.ETC = {
    type: "native",
    id: "ETC",
    name: "Ethereum Classic",
    symbol: "ETC",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 61,
    decimals: 18,
    evmChainId: 61,
    rpcUrl: "https://etc.rivet.link",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
exports.ETC_TEST = {
    type: "native",
    id: "ETC_TEST",
    name: "Ethereum Classic Testnet Mordor",
    symbol: "ETC",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    // Mordor testnet chain ID (matches the old DRS: isTestnet ? 63 : 61).
    evmChainId: 63,
    rpcUrl: "https://rpc.mordor.etccooperative.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
