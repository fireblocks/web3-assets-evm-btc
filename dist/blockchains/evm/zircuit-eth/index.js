"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZIRCUIT_ETH = void 0;
const types_1 = require("../../../types");
exports.ZIRCUIT_ETH = {
    type: "native",
    id: "ZIRCUIT_ETH",
    name: "Zircuit",
    symbol: "ZIR",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 48900,
    rpcUrl: "https://mainnet.zircuit.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
