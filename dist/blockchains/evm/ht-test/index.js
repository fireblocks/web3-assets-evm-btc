"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HT_TEST = void 0;
const types_1 = require("../../../types");
exports.HT_TEST = {
    type: "native",
    id: "HT_TEST",
    name: "HT Chain Testnet",
    symbol: "HT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 256,
    rpcUrl: "https://hecotestapi.terminet.io/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
