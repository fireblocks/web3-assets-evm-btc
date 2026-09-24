"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LINEA_TEST = void 0;
const types_1 = require("../../../types");
exports.LINEA_TEST = {
    type: "native",
    id: "LINEA_TEST",
    name: "Linea Goerli",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 59140,
    rpcUrl: "https://rpc.sepolia.linea.build",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
