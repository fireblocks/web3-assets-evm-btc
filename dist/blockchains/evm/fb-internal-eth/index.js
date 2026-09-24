"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FB_INTERNAL_ETH = void 0;
const types_1 = require("../../../types");
exports.FB_INTERNAL_ETH = {
    type: "native",
    id: "FB_INTERNAL_ETH",
    name: "Fireblocks Internal ETH",
    symbol: "FB_",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 20260416,
    rpcUrl: "https://rpc.example.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
