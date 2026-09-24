"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SONEIUM_MINATO_TEST = void 0;
const types_1 = require("../../../types");
exports.SONEIUM_MINATO_TEST = {
    type: "native",
    id: "SONEIUM_MINATO_TEST",
    name: "Soneium Minato",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 1946,
    rpcUrl: "https://rpc.minato.soneium.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
