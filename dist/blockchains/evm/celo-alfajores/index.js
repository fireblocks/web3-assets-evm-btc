"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CELO_ALFAJORES = void 0;
const types_1 = require("../../../types");
exports.CELO_ALFAJORES = {
    type: "native",
    id: "CELO_ALFAJORES",
    name: "Celo Alfajores Testnet",
    symbol: "CEL",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 44787,
    rpcUrl: "https://rpc.example.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
