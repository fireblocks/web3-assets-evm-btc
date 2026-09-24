"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CITREA_TEST = void 0;
const types_1 = require("../../../types");
exports.CITREA_TEST = {
    type: "native",
    id: "CITREA_TEST",
    name: "cBTC (Test)",
    symbol: "CIT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 5115,
    rpcUrl: "https://rpc.testnet.citrea.xyz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
