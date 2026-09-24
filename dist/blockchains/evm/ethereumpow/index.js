"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETHW = void 0;
const types_1 = require("../../../types");
exports.ETHW = {
    type: "native",
    id: "ETHW",
    name: "EthereumPoW",
    symbol: "ETHW",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 10001,
    rpcUrl: "https://mainnet.ethereumpow.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
