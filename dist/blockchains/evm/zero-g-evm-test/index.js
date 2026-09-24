"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZERO_G_EVM_TEST = void 0;
const types_1 = require("../../../types");
exports.ZERO_G_EVM_TEST = {
    type: "native",
    id: "ZERO_G_EVM_TEST",
    name: "0G Galileo",
    symbol: "ZER",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 16601,
    rpcUrl: "https://evmrpc-testnet.0g.ai",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
