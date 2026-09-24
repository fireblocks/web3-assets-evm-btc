"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLASMA_TEST = void 0;
const types_1 = require("../../../types");
exports.PLASMA_TEST = {
    type: "native",
    id: "PLASMA_TEST",
    name: "Plasma Testnet",
    symbol: "PLA",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 9746,
    rpcUrl: "https://testnet-rpc.plasma.to",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
